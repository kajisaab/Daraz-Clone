import React from "react";
import "./Home.css";
import Slider from "./Slider/Slider";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Home() {
  return (
    <div>
      <div className="banner"></div>
      <div className="sliderandnavigationpanel">
        <Slider autoPlay={10} />
        <div className="firstnavigation__panel">
          <div className="navigation__panelItems">
            <p>Electronic Items</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">
              <div className="navigation__panelItems">
                <p>Mobiles</p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Tablets</p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Laptops</p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Desktops</p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Gaming Consoles </p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Cameras </p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
              <div className="navigation__panelItems">
                <p>Printers</p>
                <KeyboardArrowRightIcon className="navigation__panelIcon" />
              </div>
            </div>
          </div>
          <div className="navigation__panelItems">
            <p>Electronic Items</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Electronic Accessories </p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>TV & Home Appliances</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Health & Beauty</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Babies & Toys</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Groceries & Pets </p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Home & Lifestyle</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Men's Fashion</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Women's Fashion</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Watches & Accessories </p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p>Sports & Outdoor </p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
          <div className="navigation__panelItems">
            <p> Automotive & Motorbike</p>
            <KeyboardArrowRightIcon className="navigation__panelIcon" />
            <div className="secondnavigation__panel">asdfasfsd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
