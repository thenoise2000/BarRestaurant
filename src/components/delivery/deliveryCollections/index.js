import React from "react";
import "./deliveryCollections.css";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem";
import PrevArrow from "../../common/carousel/prevArrow";
import NextArrow from "../../common/carousel/nextArrow";
import Carousel from "react-grid-carousel";

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://c.tenor.com/YuYiIhA2d54AAAAd/pizza-hut-pepperoni.gif",
      },   
      {
        id: 2,
        title: "Burger",
        cover: "https://images.squarespace-cdn.com/content/v1/562501b5e4b04bb42a214f69/1492644012924-CD8KQCSGLEYX4MKND5IW/Steak+Fire.gif",
      },
      {
        id: 3,
        title: "Rolls",
        cover: "https://c.tenor.com/4L7UUNpapqEAAAAd/roll-pumpkin.gif",
      },
      {
        id: 4,
        title: "Cake",
        cover: "https://thumbs.gfycat.com/RealisticCompleteBunny-max-1mb.gif",
      },
      {
        id: 5,
        title: "Biryani",
        cover: "https://c.tenor.com/p-LOAl8Ue_UAAAAC/tenor.gif",
      },
      {
        id: 6,
        title: "Chaat",
        cover: "https://www.localguidesconnect.com/t5/image/serverpage/image-id/953525iC045E05CF16651C8/image-size/medium?v=v2&px=400",
      },
      {
        id: 7,
        title: "Momos",
        cover: "https://images.hive.blog/p/2gsjgna1uruv8X2R8t7XDv5HGXyHWCCu4rKmbB5pmEzjYSsVPbkyDVTrdz35q9WNb6VKZEGBAzMByuJ9Vx134bcHHqyCkHUB473Q4LH4CtzDVor669?format=match&mode=fit",
      },
      {
        id: 8,
        title: "Paneer",
        cover: "https://www.localguidesconnect.com/t5/image/serverpage/image-id/988909i17DFD9B06F04DCF2?v=v2",
      },
      {
        id: 9,
        title: "Samosa",
        cover: "https://c.tenor.com/uoyHBqmTXQoAAAAd/cheese-samosa-sprinkled.gif",
      },
      {
        id: 10,
        title: "Paratha",
        cover: "https://media.giphy.com/media/d2k7XiOHvJYpCL2E/giphy.gif",
      },
      {
        id: 11,
        title: "Pastry",
        cover: "https://gifimage.net/wp-content/uploads/2018/11/french-pastry-gif.gif",
      },     
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};

const DeliveryCollections = () => {
    return (
        <div className="delivery-collections">
            <div className="max-width">
                <div className="letter">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item) => {
                        return <DeliveryItem item={item}/>;
                    })}
                </Slider>
            </div>   
        </div>
    );
};

export default DeliveryCollections;