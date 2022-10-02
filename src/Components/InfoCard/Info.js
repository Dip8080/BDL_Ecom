import React from 'react';
import InfoCard from './InfoCard';
import('./Info.css')

const Info = () => {
    const CardArray = [
            {
              _id : 1,  
              text : "Rings",
              des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsa ab ipsum nesciunt fuga saepe doloremque deleniti tenetur pariatur debitis maxime a voluptatem id repudiandae, omnis velit unde maiores! Soluta ",
               bg: "bg-primary" ,
               url : " https://as2.ftcdn.net/v2/jpg/01/62/16/95/1000_F_162169546_TXWbzLVtl8xPHS6kQhCZpXn5eAcseKdy.jpg"   
            },
            {   
                _id : 2,  
              text : "Bangles",
              des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsa ab ipsum nesciunt fuga saepe doloremque deleniti tenetur pariatur debitis maxime a voluptatem id repudiandae, omnis velit unde maiores! Soluta ",
              bg: "bg-secondary",
              url : "https://as2.ftcdn.net/v2/jpg/03/33/79/13/1000_F_333791333_htWcae6oWs7sGRVaRBwGnPE7Hip104qY.jpg"    
            },
            {
                _id : 3,  
              text : "Pendent",
              des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsa ab ipsum nesciunt fuga saepe doloremque deleniti tenetur pariatur debitis maxime a voluptatem id repudiandae, omnis velit unde maiores! Soluta ",
              bg: "bg-primary",
              url : "https://as2.ftcdn.net/v2/jpg/05/18/39/63/1000_F_518396339_a7um6dm884u0BhzDfHWCL6v2EsZcRdrR.jpg"     
            }


           



    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-5 ' >
         

            {
                CardArray.map(x=> <InfoCard key={x._id} text={x.text} des={x.des} bg={x.bg} url={x.url}></InfoCard>)
            }
        </div>
    );
};

export default Info;