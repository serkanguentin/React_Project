import React, { Component } from "react";

export default class Products extends Component {
  addToCart=(product)=>{
    alert(product.productName);
  }
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Preis</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>
                  <button onClick={()=>this.addToCart(product)} type="button" class="btn btn-warning">
                   add
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
