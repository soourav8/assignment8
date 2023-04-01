import React, { useEffect, useState } from 'react';
import './Blog.css'
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import Title from '../TItle/Title';

const Blog = () => {
    const [values, setValues] = useState([])
    const [readTime, setReadTime] = useState('')
    const [title, setTitle] = useState('')
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setValues(data))

    }, [])

    const handleTitle = (title) => {
        setTitle(title)
    }

    const handleRead = (read_time) => {


        const previousReadTime = JSON.parse(localStorage.getItem('read_time'));

        if (previousReadTime) {

            const sum = previousReadTime + read_time;
            localStorage.setItem('read_time', sum)
            setReadTime(sum)

        }
        else {
            localStorage.setItem('read_time', read_time)
            setReadTime(read_time)
        }


    }
    return (
        <div className='blog-container'>

            <div className='blog'>
                {
                    values.map(value => <Card value={value} key={value.index} handleRead={handleRead} handleTitle={handleTitle}></Card>)
                }

            </div>
            <div className='bookmark'>
                <Bookmark readTime={readTime}></Bookmark>
                <Title title={title}></Title>

            </div>

        </div>
    );
};

export default Blog;