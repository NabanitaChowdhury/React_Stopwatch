export const Button = ({ text,className,onClick,id}) => {
    return (
        <button onClick={onClick} id={id} className={className}>{text}</button>
    )
}

