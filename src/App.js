import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import Categories from "./Categories";
import Navi from "./Navi";
import Products from "./Products";
export default class App extends Component {
  state = { currentCategory: "", products: [] };
  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  getProducts = () => {
    fetch("http://localhost:3000/products")
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
                info={ProductInfo}
              />
            </Col>
            <Col xs="8">
              <Products
                product={this.state.products}
                currentCategory={this.state.currentCategory}
                info={CategoryInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
