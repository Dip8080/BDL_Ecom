import React from 'react';
import('./Catagories.css')

const catagoryArray = [

        {
            img : "https://i.ibb.co/HnHcdnK/300188-removebg-preview.png",
            text : "Anniversary Gifts"

        },

        {
            img : "https://i.ibb.co/0tFnNVp/300219-removebg-preview.png",
            text : "Solitaires"

        },

        {
            img : "https://i.ibb.co/kJ34cKZ/300291-removebg-preview.png",
            text : "New in"

        },

        {
            img : "https://i.ibb.co/Lx4PZpK/300187-removebg-preview.png",
            text : "Kids"

        },

        {
            img : "https://i.ibb.co/sjgZvQF/300186-removebg-preview.png",
            text : "Fast Delivery"

        },

        {
            img : "https://i.ibb.co/10bfT5K/300217-218-removebg-preview.png",
            text : "Silver"

        },

        {
            img : "https://i.ibb.co/DDZBH7v/300205-removebg-preview.png",
            text : "Other Jewlellery"

        }






]

const Catagories = () => {
    return (
        <div className='flex lg:hidden  overflow-scroll my-5'>
            
                {

                    catagoryArray.map(x=><SingleCard key={x._id} 
                    
                            img={x.img} text= {x.text}
                    
                    ></SingleCard>)

                }

        </div>
    );
};

const SingleCard = ({img,text})=>{

    return (
        <>
        <div class="avatar p-1 grid grid-cols">
        <div class="w-28 mask mask-squircle mx-2">
          <img src={img} />

       
        
           
       
        </div>
        {/* <h1>{text}</h1> */}
        {/* hello */} 
        
        <div>
        <h1 className='mx-5 px-2 subpixel-antialiased text-sm'> {text}</h1>
        </div>        
      </div>
      </>


    )

}

export default Catagories;