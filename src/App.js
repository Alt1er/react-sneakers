import Card from "./Components/Card";
import Header from "./Components/Header";
import React from "react";
import Drawer from "./Components/Drawer";

const sneakers = [
    {name: 'Чоловічі Кроссовки Nike Blazer Mid Suede', price: 1200 , imageUrl: '/img/Sneakers/Sneakers1.jpg'},
    {name: 'Чоловічі Кроссовки Nike Air Max 270', price: 15100, imageUrl: '/img/Sneakers/Sneakers2.jpg'},
    {name: 'Чоловічі Кроссовки Nike Blazer Mid Suede', price: 1500, imageUrl: '/img/Sneakers/Sneakers3.jpg'},
    {name: 'Чоловічі Кроссовки Puma X Aka Boku Future Rider', price: 15500, imageUrl: '/img/Sneakers/Sneakers4.jpg'},
]

function App() {
  return (
    <div className="wrapper clear">

        <Drawer />
        <Header />

        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Усі кросівки</h1>

                <div className="searchBlock align-center">
                    <img src="/img/searchElement.svg" alt="Search" />
                    <input className="ml-15" type="text" placeholder='Пошук...'/>
                </div>
            </div>


            <div className="d-flex flex-wrap justify-between">
                {sneakers.map((obj) =>
                    <Card
                        title ={obj.name}
                        price = {obj.price}
                        imageUrl = {obj.imageUrl}
                        onClick = {() => {console.log(obj)}}
                    />
                )}
            </div>


        </div>

    </div>
  );
}

export default App;
