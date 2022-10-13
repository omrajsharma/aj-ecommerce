import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem'

const recommendationData =[
    {
        id: 1,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 2,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 3,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 4,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 5,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 6,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },

]

function Recommendation() {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Recommendations
        </div>
        <div className='recommendation-list'>
            {
                recommendationData.map( item => 
                    <RecommendationItem 
                    key={item.id} 
                    title={item.title}  
                    description={item.description}
                    price={item.price}
                    img={item.img}
                    /> 
                )
            }
        </div>
    </div>
  )
}

export default Recommendation