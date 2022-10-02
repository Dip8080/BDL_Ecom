import React from 'react';
import('./Info.css')

const InfoCard = ({text, des,bg,url}) => {
    return (
      <div class="card w-96 bg-base-100 shadow-xl info_card">
      <figure><img src={url} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
        {text}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>Some catchy line about this whole venture</p>
        
      </div>
    </div>
   
     
    );
};

export default InfoCard;



{/* <div class="card w-96 bg-base-100 shadow-xl image-full rounded-0 info_card"> */}