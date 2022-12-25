const Input = props => {
    return (
        <input  type="number" className={props.className} placeholder={props.placeholder} onChange={props.onChange} />
    )
}
export default Input