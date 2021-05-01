import "./App.css";
import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super();
  }

  renderObj = () => {
    let out = []; //теги, используя возможности jsx будем класть в массив
    // перебираем переданный props, но в props только артикул и количество
    for (let key in this.props.cart) {
      // поэтому мы создаем дополнительный метод, который позволяет вытянуть из массива товаров - описание одного товара, и здесь его получаем по артикулу. потом добавляем нужные данные в out и возвращаем его.
      let goods = this.getGoodsFromArr(key);
      // console.log(goods);
      out.push(
        <tr key={key}>
          <td>{goods["title"]}</td>
          <td>{this.props.cart[key]}</td>
          <td>{this.props.cart[key] * goods["cost"]}</td>
        </tr>
      );
    }
    return out;
  };
  // Напишем метод this.getGoodsFromArr(key).
  // Его задача - перебирать массив до совпадения артикулов
  // и возвращать найденный товар.
  getGoodsFromArr = (art) => {
    for (let i = 0; i < this.props.goods.length; i++) {
      if (art === this.props.goods[i]["articul"]) {
        return this.props.goods[i];
      }
    }
  };
  render() {
    return (
      <div className="cart-field">
        <h1>Корзина (в долларах)</h1>
        <table>
          <tbody>
            <tr>
              <th>Art</th>
              <th>Count</th>
              <th>Cost</th>
            </tr>
            {this.renderObj()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Cart;
