const Button = ({text = "Submit"}) =>{
    return <button type="button" className="text-white bg-brand box-border border bg-red-300 p-2">{text}</button>
}

export default Button