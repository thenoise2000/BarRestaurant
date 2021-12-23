import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
    {
        id: 1,
        time: "35 min",
        cover: "https://www.gifservice.fr/img/gif-vignette-small/05b060bc472184e54516086d7d75f130/13738-1999-comida-comida-rapida-restaurante-pizza-pizza-hut.gif",
      },
      {
        id: 2,
        time: "29 min",
        cover: "https://www.gifservice.fr/img/gif-vignette-large/2c13bddf6cd1c61e09dbf3a499bfe9f4/13672-1992-mc-donalds-comida-rapida-restaurante-pizza-comida.gif",
      },
      {
        id: 3,
        time: "32 min",
        cover: "https://lh3.googleusercontent.com/proxy/yUhCsuBeE6d2P0Sv8Ta-7_fSA0Dvw8bzFngWOCaU1lkZxFaUzv7E7gY7wW2vBsvZusjR_HOA1H8zvzDgokKY6X0ZvMZZRlF24LYCbIwn",
      },
      {
        id: 4,
        time: "30 min",
        cover: "https://www.gifservice.fr/img/gif-vignette-small/ee7717fb3e1f2d03af1fc22e8c411e5e/798-1996-comida-comida-rapida-restaurante-pizza-dominos-pizza.gif",
      },
      {
        id: 6,
        time: "38 min",
        cover: "https://www.gifservice.fr/img/gif-vignette-large/2d54d6d9237552a0a272ab5f208866c5/768-1999-burger-king-fast-food-restaurant-pizza-essen.gif",
      },
      {
        id: 7,
        time: "31 min",
        cover: "https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-617485/profile/dqyuuzju6cmxj9gtzrny.gif",
      },
      {
        id: 8,
        time: "30 min",
        cover: "https://www.gifservice.fr/img/gif-vignette-large/704994c75db31905281912be27272057/13611-2006-kfc-comida-rapida-restaurante-pizza-comida.gif",
      },
      {
        id: 9,
        time: "40 min",
        cover: "https://images.squarespace-cdn.com/content/v1/51eed113e4b0cbccf9a6480e/1492393094610-B7VY0R7N9XOR8YJL4F3L/Subway_Landing_Page_V7.gif?format=500w",
      },
      {
        id: 10,
        time: "35 min",
        cover: "https://images.squarespace-cdn.com/content/v1/5297fe5ce4b069bc9beb487a/1609790235009-DJ5HRN983SK4U2TZP8DE/image-asset.gif",
      },    
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="letter">Top brands for you</div>
            <Slider {...settings}>
                {topBrandsList.map((brand) => (
                  <div>
                      <div className="top-brands-cover">
                          <img className="top-brands-cover zoom img-fluid" src={brand.cover} alt={brand.time}/>
                      </div>
                  </div>  
                ))}
            </Slider>
        </div>
    );
};

export default TopBrands;