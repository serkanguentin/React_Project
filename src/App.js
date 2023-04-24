import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import Categories from "./Categories";
import Navi from "./Navi";
import Products from "./Products";
export default class App extends Component {
  state = { currentCategory: "", products: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = categoryId => {
    let url="http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let ProductInfo = { title: "Product List" };
    let CategoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="4">
              <Categories
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}
              />
            </Col>
            <Col xs="8">
              <Products
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={ProductInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
