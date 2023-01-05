import React from "react";
import { useState, useEffect } from "react";
import basket from "../assets/img/shopping-basket.png";

const Footer = ({cart, setCart}) => {

  const [modal, setModal] = useState(false);
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (
      total += Number(item.price)
    ))
    setPrice(total.toFixed(2));
  }

  useEffect(() => {
    handlePrice();
  })

  const handleCartClearence = () => {
    setCart([]);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [modalMessage, setModalMessage] = useState(false);

  const showModal = () => {
    setModalMessage(!modalMessage);
  };

  if(modalMessage) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <footer>
        <div className="footer-container">
          {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              {
                cart.map((item) => (
                  <div className="cart__box" key={item.id}>
                    <span className="cart-item__name">{item.name}</span>
                    <span className="cart-item__price"><span>$</span> {item.price}</span>
                  </div>
                ))
              }
              <div className="cart__total">
                <span>Total</span>
                <span className="cart-total__price"><span>$</span> {price}</span>
              </div>
            </div>
            <div className="modal-footer">
              <div className="footer-container">
                <button className="btn-basket"><img src={basket} alt="basket" /></button>
                <p>{price}$</p>
                {modalMessage && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-message">
                      <h3 className="modal__caption">Congratulations!</h3>
                      <p className="modal__text">Your order it’s on its way.</p>
                      <div onClick={showModal} className="btn-order__container">
                        <div onClick={handleCartClearence} className="btn-order">
                          <button>Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  <div onClick={showModal} className="btn-order">
                    <button>Order Now</button>
                  </div>
              </div>
            </div>
            <br></br>
          </div>
          )}

          <button className="btn-basket" onClick={toggleModal}><img src={basket} alt="basket" /></button>
          <p>{price}$</p>
            {modalMessage && (
              <div className="modal">
                <div className="overlay"></div>
                <div className="modal-message">
                  <h3 className="modal__caption">Congratulations!</h3>
                  <p className="modal__text">Your order it’s on its way.</p>
                  <div onClick={showModal} className="btn-order__container">
                    <div onClick={handleCartClearence} className="btn-order">
                      <button>Ok</button>
                    </div>
                  </div>
                </div>
              </div>
              )}


              <div onClick={showModal} className="btn-order">
                <button>Order Now</button>
              </div>
        </div>
      </footer>
      <br></br>
    </>
  );
};

export default Footer;