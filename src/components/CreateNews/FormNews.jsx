import React, { useState, useRef } from 'react';
import './CreateNews.scss';
import { createNewsArticle, updateNewsArticle } from '../../utils/fetchNewsData';
import { toast } from 'react-toastify';

const FormNews = ({ data, hide }) => {
    const [title, setTitle] = useState(data?.title);
    const [content, setContent] = useState(data?.content);
    const [category, setCategory] = useState(data?.category);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const article = {
            title: title,
            content: content,
            category: category,
            author: 'Sachin Shah',
        }

        updateNewsArticle(data.id, article)
            .then(result => {
                console.log('alert')
                toast.success('Article updated successfully')
            }).catch(err => {
                toast.error('An error occured')
            });
        hide();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' value={title} onChange={handleTitleChange} />

                <label htmlFor='content'>Content:</label>
                <textarea id='content' value={content} onChange={handleContentChange} wrap='hard' />

                <label htmlFor='category'>Category:</label>
                <input type='text' id='category' value={category} onChange={handleCategoryChange} />
                <button className='default-btn' type='submit'>Publish</button>
            </form>
        </>
    );
};

export default FormNews;
