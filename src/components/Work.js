import React from 'react'
import PickMeals from "./Assets/pick-meals-image.png";
import ChooseMeals from "./Assets/choose-image.png";
import DeliveryMeals from "./Assets/delivery-image.png";


const  Work=()=> {
    const workInfoData=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"With our Pic Meals option, you have the freedom to customize your dining experience to perfectly suit your cravings.",
        },
        {
            image:ChooseMeals,
            title:"Choose How Often",
            text:"Personalized Experience: Tailor your meal to your exact preferences, ensuring every bite is a delight Fresh and Flavorful With the finest ingredients and customizable options, you're guaranteed a meal that's both wholesome and delicious Endless Possibilities: With countless combinations to choose from, you'll never run out of exciting new flavors to explore.",
        },
        {
            image:DeliveryMeals,
            title:"Fast Delivery",
            text:"Experience the convenience and flavor of FOODIE delivered right to your doorstep with our Delivery Meals option. Our commitment to exceptional taste and quality ingredients ensures that every bite is a delicious journey for your taste buds.",
        },
    
        
    ];
  return (
    <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-subheading'>How It Work</h1>
        <p className='primary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, facilis animi tempore fugit consequatur numquam officia ratione sit maiores error sint eaque officiis quis illo qui laudantium alias praesentium. Tempore?</p>


    </div>
    <div className='work-section-bottom'>
        {workInfoData.map((data)=>(
            <div className='work-section-info'>
            <div className='info-boxes-img-container'>
            <img src={data.image} alt=""/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            </div>
        )
        )}
    </div>
      
    </div>
  )
}

export default Work;
