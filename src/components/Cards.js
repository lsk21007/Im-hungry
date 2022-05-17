import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img2 from '../images/2.jpg'
import img9 from '../images/9.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img8 from '../images/8.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Which one should I eat?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Eat 3 takoyakis in one bite!'
              label='Yummy'
              path='/Dine-in'
            />
            <CardItem
              src={img2}
              text='Do you prefer to drink white wine or beer with lobsters?'
              label='Luxury'
              path='/Dine-in'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='We should eat BBQ after 10pm.'
              label='Smoky'
              path='/Dine-in'
            />
            <CardItem
              src={img4}
              text='Fried chicken make me happy, especially crispy one.'
              label='Crispy'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Do not forget to finish the soup after eating ramen.'
              label='Chewy'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
