import { useDispatch, useSelector } from "react-redux";
//import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";
import React from 'react';

const CartContainer = () => {
  
    const dispatch = useDispatch();
    const {amount, cartItems, total} = useSelector((state)=>state.cart);

    if(amount<1){
        return(
            <div>Your cart is empty

            </div>
        );
    }

    return (
        <section className='cart'>
          <header>
            <h2>your bag</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                total <span>${total}</span>
              </h4>
            </div>
            <button
            className='btn clear-btn'
            onClick={() => {
              //dispatch(clearCart());
              dispatch(openModal());
            }}
            >
            clear cart
          </button>
          </footer>
        </section>
      );
};

export default CartContainer;