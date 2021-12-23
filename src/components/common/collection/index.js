import React from "react";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";
import "./collection.css";
import { BsCardChecklist } from "react-icons/bs";

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const Collection = ({ list }) => {
    return (
        <div className="collection-wrapper">
            <div className="max-width collection">
                <div className="collection-title letter">Collections</div>
                <div className="collection-subtitle-row">
                    <div className="collection-subtitle-text letter2">
                        Explore our list
                    </div>
                    <div className="collection-location letter2">
                    <div>All Collections in this site </div>
                    <BsCardChecklist/>
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) => (
                        <div>
                            <div className="collection-cover">
                            <img src={item.cover} alt={item.title} className="collection-image zoom img-fluid"/>
                            <div className="gradient-bg"></div>
                            <div className="collection-card-title letter">{item.title}</div>
                            <div className="collection-card-subtitle letterB">
                                <div>{item.places}</div>
                                <i className="fi fi-rr-caret-right absolute-center"></i>
                            </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>            
        </div>
    );
};

export default Collection;