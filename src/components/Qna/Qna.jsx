import React from 'react';

const Qna = () => {
    return (
        <div style={{marginTop: '200px'}}>
            <p>1.Props vs state</p>
            <p>Ans: Props  are used to pass data from a parent component to a child component and it can pass function and object and array</p>
            <p>2.How does useState work?</p>
            <p>ans:The useState hook is a function provided by React that allows functional components to have state. It returns an array containing two values: the current state value and a function to update the state.</p>
            <p>3.Purpose of useEffect other than fetching data.</p>
            <p>Ans: useEffect hook is a powerful tool for managing side effects in React components. While it is commonly used for fetching data, it can be used in many other scenarios as well.</p>
            <p>4.How Does React work?</p>
            <p>Ans:reusable UI components and compose them together to create complex applications.

Here's how React works:</p>
        </div>
    );
};

export default Qna;