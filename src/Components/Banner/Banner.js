import React from 'react';
import ('./Banner.css')

const Banner = () => {
    return (
        <div class="carousel w-full slide_div">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/pretty-woman-with-golden-nails-beautiful-gold-jewelry-isolated-white_186202-8220.jpg?w=826&t=st=1664618280~exp=1664618880~hmac=b8169cb974e9111f4026cbbee15ed4fb563ecaa8ccb91d8abdeb25be21328f3c" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="">❮</a> 
            <a href="#slide2" class="">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/portrait-fashion-woman-with-black-nails-lips-black-color_186202-6859.jpg?w=900&t=st=1664604268~exp=1664604868~hmac=87438a7c8e10866a41b5513fe6ab0b1983064e1067c4e2b00375b964cc5d70f5" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="">❮</a> 
            <a href="#slide3" class="">❯</a>
          </div>
        </div> 
       
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1664604297~exp=1664604897~hmac=04ef9d0b90a1886c4de06c03e28c2c3d11ed8556685f96ee0d9441113553f4a9" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="">❮</a> 
            <a href="#slide1" class="">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;