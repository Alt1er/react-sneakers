import Card from "./Components/Card";
import Header from "./Components/Header";
import React from "react";
import Drawer from "./Components/Drawer";



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6714d6af690bf212c762af6b.mockapi.io/items')
            .then(res => {
                return res.json();
            }).then(json => {
            setItems(json);
        } );
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [ ...prev, obj]);
    }
    console.log(cartItems)
  return (
    <div className="wrapper clear">

        {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)}/>

        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Усі кросівки</h1>

                <div className="searchBlock align-center">
                    <img src="/img/searchElement.svg" alt="Search" />
                    <input className="ml-15" type="text" placeholder='Пошук...'/>
                </div>
            </div>


            <div className="d-flex flex-wrap justify-between">
                {items.map((item) =>
                    <Card
                        title ={item.name}
                        price = {item.price}
                        imageUrl = {item.imageUrl}
                        onFavorite={() => console.log("Favorite")}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                )}
            </div>


        </div>

    </div>
  );
}

export default App;
