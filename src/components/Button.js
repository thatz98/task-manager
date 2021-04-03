const Button = (props) => {
    return (

        <button
            style={{ background: props.color }}
            className='btn'
            onClick={props.onClick}>
            {props.text}
        </button>

    )
}

export default Button
