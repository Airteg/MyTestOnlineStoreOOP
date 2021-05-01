import "./App.css";
import React from "react";
import Goods from "./Goods.jsx";
import Cart from "./Cart";
import goodsArr from "../goods.json";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { cart: {}, count: 0 };
  }
  addToCart = (event) => {
    // console.log("click");

    event.preventDefault();

    // если кликнули не на кнопке с нужным нам классом, то выходим из метода.
    // console.log(
    //   "Press botton=" + event.target.classList.contains("add-to-cart")
    // );
    if (!event.target.classList.contains("add-to-cart")) return false;

    // получаем текущее значение state для манипуляции
    let cartTemp = this.state.cart;

    // проверяем, если артикула товара нет в объекте корзине - то делаем
    // запись в формате атикул : 1, т.е. один товар,
    // а если товар уже есть - то увеличиваем количество на единицу.
    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : (cartTemp[event.target.dataset.key] = 1);
    // console.log(cartTemp);

    // cartTemp++;
    // сохраняем стейт с изменениями
    this.setState({ cart: cartTemp });

    // стейт count - вспомогательный, отвечает за количество товаров в корзине.
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  };

  render() {
    let showCart;
    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
    } else {
      showCart = `Пустая корзина! (Кстати, "пустая корзина" это как "пустая голова". Срочно надо заполнить.)`;
    }
    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={this.addToCart}>
          {goodsArr.map((item) => (
            <Goods
              title={item.title}
              cost={item.cost}
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
        {showCart}
      </div>
    );
  }
}
export default App;
