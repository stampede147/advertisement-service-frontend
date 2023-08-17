const SpanBlock = (props) => {
    return (
        <div className={props.className}>
            <span>
                {props.content}
            </span>
        </div>
    );
}

export default SpanBlock;