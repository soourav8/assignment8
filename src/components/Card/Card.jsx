import React from 'react';
import './Card.css'
const Card = ({ value, handleRead }) => {

    
    
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
                    <small onClick={handleRead}>{read_time}min read</small><span>@</span>
                    
                </div>
                </div>
                <h2>{title}</h2>

                <a href="javascript:void(0);" onClick={()=>handleRead(_id,read_time)}>Mark as read</a>
            </div>
        </div>
    );
};

export default Card;