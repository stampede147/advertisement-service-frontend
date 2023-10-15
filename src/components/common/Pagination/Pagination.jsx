import React, {useCallback} from "react";
import './Pagination.css'


const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

function Pagination(props)  {


    const currentPage = props.currentPage + 1;
    const totalPages = props.totalPages;
    const pageNeighbours = props.pageNeighbours;
    console.log("lol");

    /**
     *
     * @param page the number of page
     */
    const goToPage = useCallback((currentPage, totalPages) => {

        const {onPageChanged = f => f} = props; // return itself if onPageChanged not provided


        const toPage = Math.max(1, Math.min(currentPage, totalPages));

        const paginationData = {
            page: toPage - 1,
        }

        onPageChanged(paginationData);
    }, [currentPage, totalPages]);

    console.log([currentPage, totalPages])

    const handlePageClick = (page, totalPages, event) => {
        event.preventDefault();
        goToPage(page, totalPages);
    }

    const process = useCallback((currentPage, totalPages, pageNeighbours) => {

        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            let pages = [];

            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;

            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    }, [currentPage, totalPages, pageNeighbours]);


    const StubPage = React.memo(({index}) => {
        return <li key={index} className="page-item">
            <a className="page-link" href="#" aria-label="stub">
                <span aria-hidden="true">.</span>
                <span className="sr-only">.</span>
            </a>
        </li>
    });

    const Page = React.memo(({page, totalPages, index, currentPage}) => {
        const isActive = (currentPage) === page ? "page-item-active" : "";

        return <li key={index} className={`page-item ${isActive}`}>
            <a className="page-link" href="#" onClick={e => handlePageClick(page, totalPages, e)}>
                {page}
            </a>
        </li>
    });

    const PageListRender = () => {

        const pages = process(currentPage, totalPages, pageNeighbours);

        return <ul className={'navigation-page-list'}>
            {pages.map((page, index) => {
                if (page === LEFT_PAGE || page === RIGHT_PAGE)
                    return <StubPage key={index} index={index}/>

                return <Page key={index} page={page} index={index} currentPage={currentPage} totalPages={totalPages}/>
            })}
        </ul>

    };

    return <div className={'pagination-root'}>
        <nav className={'pagination-navigation'}>
            <PageListRender/>
        </nav>

    </div>
}


export default React.memo(Pagination);