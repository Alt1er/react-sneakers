import React from "react";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt=""/>

                <div className="ml-15">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p>Магазин найкращих кросівок</p>
                </div>
            </div>

            <ul className="headerRight d-flex align-center ">
                <li onClick={props.onClickCart} className="mr-20 align-center cu-p">
                    <img className="mr-10" src="/img/Cart.svg" alt=""/>
                    <span>Корзина</span>
                </li>
                <li className="mr-20 align-center cu-p">
                    <img className="mr-10" src="/img/like.svg" alt=""/>
                    <span>Закладки</span>
                </li>
                <li className="mr-10 align-center cu-p">
                    <img className="mr-10" src="/img/Profile.svg" alt=""/>
                    <span>Профіль</span>
                </li>
            </ul>
        </header>
    )
}

export default Header;
