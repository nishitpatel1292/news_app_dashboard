import React, { useState, useRef } from 'react';
import './CreateNews.scss';
import { createNewsArticle } from '../../utils/fetchNewsData';
import { DeleteOutline } from '@mui/icons-material';

const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const imageInputRef = useRef();
    const videoInputRef = useRef();
    // const [mobilePreview, setMobilePreview] = useState(false);

    const boxRef = useRef(null);
    // This is created for the purpose of scrolling like a mobile device with grabbing screen(touching in mobile)
    const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.pageX - boxRef.current.offsetLeft;
        const startY = e.pageY - boxRef.current.offsetTop;
        const scrollLeft = boxRef.current.scrollLeft;
        const scrollTop = boxRef.current.scrollTop;

        const handleMouseMove = (e) => {
            e.preventDefault();
            const x = e.pageX - boxRef.current.offsetLeft;
            const y = e.pageY - boxRef.current.offsetTop;
            const walkX = (x - startX) * 1;
            const walkY = (y - startY) * 1;
            boxRef.current.scrollLeft = scrollLeft - walkX;
            boxRef.current.scrollTop = scrollTop - walkY;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleImageUpload = (e) => {
        if (video) {
            alert('You have already uploaded a video. Please remove it before uploading an image.');
            imageInputRef.current.value = null;
            return;

        }
        const file = e.target.files[0];
        setImage(file);
    };

    const handleVideoUpload = (e) => {
        if (image) {
            alert('You have already uploaded an image. Please remove it before uploading a video.');
            videoInputRef.current.value = null;
            return;
        }
        const file = e.target.files[0];
        setVideo(file);
    };

    // const handleMobilePreviewToggle = () => {
    //     setMobilePreview(!mobilePreview);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // this is going straight to the api 
        const article = {
            title: title,
            content: content,
            category: category,
            author: 'Sachin Shah',
            likes: 0,
            views: 0,
            isPublished: true
        }
        console.log(article)
        createNewsArticle(article);
    };

    return (
        <div className='create-news-wrapper'>
            <div className="form-wrapper">

                <h2>Create News</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={title} onChange={handleTitleChange} />

                    <label htmlFor='content'>Content:</label>
                    <textarea id='content' value={content} onChange={handleContentChange} wrap='hard' />

                    <label htmlFor='category'>Category:</label>
                    <input type='text' id='category' value={category} onChange={handleCategoryChange} />

{/* we will allow only one out of image and video */}

                    <label htmlFor='image'>Image:</label>
                    <input type='file' id='image' accept='image/*' onChange={handleImageUpload} ref={imageInputRef} />
                    {image && <button className='btn btn-danger' onClick={() => { setImage(null); imageInputRef.current.value = null; }}><DeleteOutline /></button>}

                    <label htmlFor='video'>Video:</label>
                    <input type='file' id='video' accept='video/*' onChange={handleVideoUpload} ref={videoInputRef} />
                    {video && <button className='btn btn-danger' onClick={() => { setVideo(null); videoInputRef.current.value = null; }}><DeleteOutline /></button>}

                    <button className='default-btn' type='submit'>Publish</button>
                </form>
            </div>

            <div className='mobile-preview-container'>
                <h2>Mobile Preview</h2>
                {/* <button className='default-btn' onClick={handleMobilePreviewToggle}>
                    {mobilePreview ? 'Hide Preview' : 'Show Preview'}
                </button> */}
                <div className='mobile-preview-wrapper'>
                    {/* {mobilePreview && ( */}
                    <div
                        className='mobile-preview'
                        ref={boxRef}
                        onMouseDown={handleMouseDown}
                    >
                        <div className='mobile-preview-screen'>
                            <div className="media-wrapper">
                                {image && <img src={URL.createObjectURL(image)} alt='Preview' />}
                                {video && (
                                    <video controls>
                                        <source src={URL.createObjectURL(video)} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                )}

                                {
                                    category &&
                                    <span className="category-tag">{category}</span>
                                }
                                <div className="logo">News2Day</div>
                            </div>

                            <div className='content-text'>
                                <h2 className='title'>{title}</h2>
                                <p className='para'>{content}</p>
                            </div>
                            <div className="bottom-mobile-nav">
                                Mobile navbar
                            </div>
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default CreateNews;
