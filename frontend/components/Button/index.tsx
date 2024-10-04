const Button = (props : any) => {
    return(
        <button onClick={props.onclick} type="button" className={`h-12 bg-gray-800  text-white font-semibold shadow-md transform hover:scale-110 transition-all duration-300 rounded-lg w-36`}>
            {props.text}
        </button>
    )
}


export default Button;