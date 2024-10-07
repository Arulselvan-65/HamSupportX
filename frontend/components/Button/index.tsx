const Button = (props : any) => {
    return(
        <button onClick={props.onclick} type="button" className={`h-10 bg-[#1a1b1b] font-semibold shadow-md transform hover:scale-105 transition-all duration-300 text-[16px] rounded-lg w-36`}>
            <span className="rainbow-text"> {props.text}</span>
        </button>
    )
}


export default Button;