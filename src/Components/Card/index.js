import React from "react";
import s from './Card.module.scss'

function Card ({ onFavorite, title, imageUrl, price, onPlus }) {


const [isAdded, setIsAdded] = React.useState(false);
const [isFavorite, setIsFavorite] = React.useState(false);

const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
}

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img
                    onClick={() => {setIsFavorite(!isFavorite)}}
                    width={36}
                    height={36}
                    src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                    alt="unlicked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>

            <p>{title}</p>
            <div className="description d-flex align-center justify-between mt-15">
                <div className="d-flex flex-column">
                    <p>Ціна:</p>
                    <b>{price} грн.</b>
                </div>
                <img className={s.plus}
                     onClick={onClickPlus}
                     src={isAdded ? "/img/btnChecked.svg" : "/img/Plus.svg"} alt="plus"/>
            </div>
        </div>
    )
}

export default Card;