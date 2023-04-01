import React, { useEffect, useState } from 'react';
import './Blog.css'
import Card from '../Card/Card';

const Blog = () => {
    const [values, setValues] = useState([])
    useEffect(()=>{
        fetch('generated.json')
        .then(res => res.json() )
        .then(data => setValues(data))

    },[])

    const handleRead = (_id, read_time) => {
        console.log(_id)
        console.log(read_time)

    }
    return (
        <div className='blog-container'>
            
            <div className='blog'>
                {
                    values.map(value=> <Card value={value} key={value.index} handleRead={handleRead}></Card>)
                }

            </div>
            <div className='bookmark'>
                <p></p>

            </div>
            
        </div>
    );
};

export default Blog;