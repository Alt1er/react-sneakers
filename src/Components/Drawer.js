import React from "react";


function Drawer({onCloseCart, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2
                    className="mb-30 d-flex justify-between">Корзина
                    <img onClick={onCloseCart}  className="removeBtn cu-p" width={32}
                         height={32} src="/img/delete.svg"
                         alt="Delete"/>
                </h2>

                <div className="items">
                    {
                        items.map((obj) => (
                            <div className="mb-20 cartItem d-flex align-center">
                                <div className="cartItemImg flex" style={{backgroundImage: `url(${obj.imageUrl})`}}>

                                </div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} грн</b>
                                </div>
                                <img className="removeBtn" width={32} height={32} src="/img/delete.svg" alt="Delete"/>
                            </div>

                    ))}



                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Сума:</span>
                            <div></div>
                            <b>12 000 грн.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>700 грн.</b>
                        </li>
                    </ul>

                    <button className="d-flex align-center">
                        <p>Оформити замовлення</p>
                        <img src="/img/Arrow.svg" alt="arrow"/>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Drawer;