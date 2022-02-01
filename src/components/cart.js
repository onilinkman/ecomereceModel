import React, { Suspense } from "react";

import "../style/cart.css";
import likeButton from "../images/icons8-favorite-80.png";
import disableLikeButton from "../images/favorite-disable-48.png";
import enableBuy from "../images/buying-enable-48.png";
import disableBuy from "../images/buying-disable-50.png";
import loadingIcon from "../images/loading-circle.gif";

class cart extends React.Component {
  swlike = false;
  swbuy = false;
  description = "";
  image = "";
  title = "";
  imageLike = disableLikeButton;
  imageBuy = disableBuy;
  ids;
  urlImage;

  /**
   * @description Funcion que se encarga de enviar los datos del objeto al componente
   */
  setValuesAndData = (p) => {
    this.swlike = p.liked;
    this.swbuy = p.buyed;
    this.ids = p.ids;
    this.description = p.description;
    this.image = p.url;
    this.title = p.name;
    this.imageLike = p.liked ? likeButton : disableLikeButton;
    this.imageBuy = p.buyed ? enableBuy : disableBuy;
    fetch(p.url)
      .then((res) => res.blob())
      .then((blob) => {
        let url = URL.createObjectURL(blob);
        let image = document.getElementById("cart" + p.ids);
        image.src = url;
      });
  };

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

  callUrlImage = () => {
    fetch();
  };

  render() {
    // let { liked, buyed, name, description, url } = this.props;
    this.setValuesAndData(this.props);
    return (
      <div className="conteiner-cart" onClick={this.actionClick}>
        <div className="cart-body">
          <div>
            <Suspense fallback={<img src={loadingIcon} alt="cargando" />}>
              <img
                alt="Logo mueble"
                className="image-cart"
                id={"cart" + this.ids}
                onLoad={console.log("holas")}
              />
            </Suspense>
          </div>
          <div className="content-cart">
            <div className="cart-title">
              <p className="font-title">{this.title}</p>
            </div>
            <div className="cart-description">
              <p className="font-description">{this.description}</p>
            </div>
            <div className="icon-action">
              <img
                src={this.imageLike}
                onClick={this.actionlike}
                alt="like-button"
              />
              <img src={this.imageBuy} onClick={this.actionbuy} alt="buying" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cart;
