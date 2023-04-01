import React from 'react';
import './Card.css'
const Card = ({ value }) => {
    console.log(value)
    const { cover_image, picture, _id, read_time, title, name , published} = value
    return (
        <div>
            <div className='card'>
                <img src={cover_image} alt="" />
                <div className='card-info'>

                
                <div className='author-image'>
                   <img src={picture} alt="" />
                   <div>
                    <p>{name}</p>
                    <small>{published}</small>
                   </div>
                </div>
                <div>
                    <small>{read_time}min read</small><span>@</span>
                    
                </div>
                </div>
                <h2>{title}</h2>

                <a>Mark as read</a>
            </div>
        </div>
    );
};

export default Card;