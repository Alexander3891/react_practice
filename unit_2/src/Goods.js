function Goods(props) {
    return (
        <div className = "goods-block">
            <h3>{props.title}</h3>
            <p>{props.cost}</p>
            <img src={props.imag} alt={props.title} />
        </div>
    )
}


export default Goods;