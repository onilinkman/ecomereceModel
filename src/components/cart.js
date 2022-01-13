import React from "react";

import "../style/cart.css";
import confLogo from "../images/muebles.png";
import likeButton from "../images/icons8-favorite-80.png";
import disableLikeButton from "../images/favorite-disable-48.png";
import enableBuy from "../images/buying-enable-48.png";
import disableBuy from "../images/buying-disable-50.png";
import loadingIcon from "../images/loading-circle.gif";

class cart extends React.Component {
  swlike = false;
  swbuy = false;
  actionlike = (e) => {
    if (this.swlike) {
      e.target.src = disableLikeButton;
      this.swlike = false;
    } else {
      e.target.src = likeButton;
      this.swlike = true;
    }
  };

  actionbuy = (e) => {
    if (this.swbuy) {
      e.target.src = disableBuy;
      this.swbuy = false;
    } else {
      e.target.src = enableBuy;
      this.swbuy = true;
    }
  };

  //if click image icon this action not execute
  actionClick = (e) => {
    if (e.target.localName !== "img") {
      console.log("Se esta haciendo click en la imagen");
      this.props.ejecutarAccion();
    }
  };

  render() {
    return (
      <div className="conteiner-cart" onClick={this.actionClick}>
        <div className="cart-body">
          <div>
            <img src={confLogo} alt="Logo mueble" className="image-cart" />
          </div>
          <div className="content-cart">
            <div className="cart-title">
              <p className="font-title">Mueble de living</p>
            </div>
            <div className="cart-description">
              <p className="font-description">
                Aqui viente muchas cosas , descritas para este articulo
              </p>
            </div>
            <div className="icon-action">
              <img
                src={disableLikeButton}
                onClick={this.actionlike}
                alt="like-button"
              />
              <img src={disableBuy} onClick={this.actionbuy} alt="buying" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cart;
