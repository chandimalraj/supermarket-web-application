
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import banner1 from "../../images/slide1.jpg"
import banner2 from "../../images/slide3.jpg"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
 export default function BannerCarousel() {




   return (
    <Carousel swipeScrollTolerance={10} infiniteLoop= {true} autoPlay={true} showStatus={false} interval={3000} transitionTime={1000} showThumbs={false} showIndicators={false} selectedItem={1} swipeable={false}>
  
        <img src={banner1} />
       
        <img src={banner2} />

        <img src={banner1} />
       
    
    </Carousel>
  
   )
 }