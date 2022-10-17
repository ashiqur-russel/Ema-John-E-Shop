import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  //const [products, setProducts] = useState([]);
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    // find if selected product is already exist
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      // if not exist then add quantity as 1 && set to cart with selected product with all previous products
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      //if exist then filter this selected item and seperate all other items from this product
      const rest = cart.filter((product) => product.id !== selectedProduct.id);

      // increase this selected id
      selectedProduct.quantity = selectedProduct.quantity + 1;
      // set new cart with rest products and esixting products with increasing quantity
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  // load data
  /*   useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 */
  //get data from local storage
  useEffect(() => {
    // load the cart from local storage
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      // find the product
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              img={product?.img}
              handleAddToCart={handleAddToCart}
            ></Product>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>
              Review Order
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
