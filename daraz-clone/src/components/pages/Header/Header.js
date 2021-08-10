import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__container">
          <div className="header__items">
            <Link to="/save_more_on_App" className="header__items__link">
              <p>Save More on App</p>
            </Link>
          </div>
          <div className="header__items">
            <Link to="/sell_on_daraz" className="header__items__link">
              <p>sell on daraz</p>
            </Link>
          </div>
          <div className="header__items">
            <Link to="/customer_care" className="header__items__link">
              <p>Customer Care</p>
            </Link>
          </div>
          <div className="header__items">
            <Link to="/track_order" className="header__items__link">
              <p>Track My Order</p>
            </Link>
          </div>
          <div className="header__items">
            <Link to="/login" className="header__items__link">
              <p>Login</p>
            </Link>
          </div>
          <div className="header__items">
            <Link to="/Signup" className="header__items__link">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__second">
        <div className="header__secondary">
          <Link to="/">
            <img
              src="//laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
              alt=""
              className="header__logo"
            />
          </Link>
          <div className="header__search">
            <input
              placeholder="Search in Daraz"
              type="text"
              className="header__inputfield"
            />
            <SearchIcon className="search__icon" />
          </div>
          {/* Search logo  */}

          {/* shopping cart logo  */}
          <div className="header__shoppingcart">
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className="shoppingcart__icon" />
            </Link>
          </div>

          <div className="header__ad">
            <img src="images/darazad.gif" alt="" className="header__darazad" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
