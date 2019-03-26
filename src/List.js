import React from 'react';
import Card from './Card';
import './List.css';

const list = (props) => {
  console.log(props.cards);
  return (
    <section className='List'>
      <header className='List-cards'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
        <button type='button' className='List-add-button'> + Add a Card</button>
      </div>
    </section>
  )
}

export default list;