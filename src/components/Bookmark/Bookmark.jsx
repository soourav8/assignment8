import React, { useEffect } from 'react';
import './Bookmark.css'

const Bookmark = ({readTime}) => {
    useEffect(()=> {
        const getReadTime = localStorage.getItem('read_time');
        console.log(getReadTime);

    },[readTime])
    
    return (
        <>
        <div className='bookmark'>
            <p>Spent time on read :{readTime} min</p> 
        </div>
        
        </>
    );
};

export default Bookmark;