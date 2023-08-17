

const ImgBlock = (props) => {
    return (
        <div className={props.className}>
            <img className={props.className} src={props.src}/>
        </div>
    );
}

export default ImgBlock;