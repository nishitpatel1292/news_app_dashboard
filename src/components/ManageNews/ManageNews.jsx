import React, { useEffect, useState } from 'react';
import './ManageNews.scss'
import { deleteNewsArticle, fetchNewsData, viewNewsArticle } from '../../utils/fetchNewsData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormNews from '../CreateNews/FormNews';
import SpinnerWrapper from '../widgets/SpinnerWrapper';
import { ToastContainer, toast } from 'react-toastify';

function EditModal(props) {
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                    Edit News
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormNews data={props.data} hide={props.onHide} />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
    );
}
function ViewModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    View News
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <p><span className='text-primary'>Category:
                        </span> {props.data.category}</p>
                    <p><span className='text-primary'>
                        Title: </span> {props.data.title}</p>
                    <p><span className='text-primary'>Content: </span> {props.data.content}</p>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const ManageNews = () => {
    const [selectedArticle, setSelectedArticle] = useState({});
    const [data, setData] = useState('')
    const [modalShow, setModalShow] = useState(false);
    
    const renderModal = () => {
        switch (selectedArticle.type) {
            case 'edit':
                return (
                    <EditModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        data={selectedArticle.data}
                    />
                );
            case 'view':
                return (
                    <ViewModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        data={selectedArticle.data}
                    />
                );
            default:
                return null;
        }
    }
    const fetchData = async () => {
        try {

            const newsFeeds = await fetchNewsData();
            setData(newsFeeds)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {    
        fetchData()
    }, []);

    const handleEditClick = (article) => {
        setSelectedArticle({data: article,type:'edit'});
        setModalShow(true);
    };
    const handleViewClick = (article) => {
        setSelectedArticle({data: article,type:'view'});
        setModalShow(true);
    };
    const handleDeleteClick = (id) => {
        deleteNewsArticle(id).then(result => {
            toast.success('Article deleted successfully')
            fetchData(); //fetch the data again after delete operation
        }).catch(err => {
            toast.error('An error occured')
        });
    }

    return (
        <div className='manage-news'>
            <h1>Manage News</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Creation Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((feed) => (
                        <tr key={feed.id}>
                            <td>{feed.title}</td>
                            <td>{feed.category}</td>
                            <td>{feed.createdAt}</td>
                            <td>{feed.isPublished ? 'Published' : 'Draft'}</td>
                            <td>
                                <button onClick={() => handleEditClick(feed)}>Edit</button>
                                <button onClick={() => {handleDeleteClick(feed.id)}}>Delete</button>
                                <button onClick={() => {handleViewClick(feed)}}
                                >View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                !data && <SpinnerWrapper />
            }
            
            {selectedArticle && renderModal()}
            
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ManageNews;