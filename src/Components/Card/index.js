import s from './Card.module.scss'

console.log(s)


function Card (props) {

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img width={36} height={36} src="/img/unliked.svg" alt="unlicked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt=""/>

            <p>{props.title}</p>
            <div className="description d-flex align-center justify-between mt-15">
                <div className="d-flex flex-column">
                    <p>Ціна:</p>
                    <b>{props.price} грн.</b>
                </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="/img/Plus.svg" alt="plus"/>

                </button>
            </div>
        </div>
    )
}

export default Card;