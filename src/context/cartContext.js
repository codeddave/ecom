import React, { Component } from "react";
import { storeProducts } from "../data";

export const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    isCartModalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setNewProducts();
  }
  // To Create a copy of the products coming from data.js
  setNewProducts = () => {
    let newProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      newProducts = [...newProducts, singleItem];
    });
    this.setState(() => {
      return { products: newProducts };
    });
  };

  //Retrieving each item from data.js to be displayed i
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  checkCart = (product) => {
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      console.log(existingCartItem);

      return this.state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              count: cartItem.count + 1,
            }
          : cartItem
      );
    }

    return {
      ...product,
      count: 1,
    };
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === product.id
    );
    console.log(product);
    console.log(this.state.cart);
    const cartt = this.checkCart(product);
    console.log(cartt);
    product.inCart = true;

    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: !existingCartItem ? [...this.state.cart, cartt] : [...cartt],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  handleCartModal = () => {
    this.setState((prevState) => {
      return {
        isCartModalOpen: !prevState.isCartModalOpen,
      };
    });
  };
  closeModal = (id) => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setNewProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => {
      subTotal += item.total;
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(() => {
        return {
          cartSubTotal: subTotal,
          cartTax: tax,
          cartTotal: total,
        };
      });
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleCartModal: this.handleCartModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
