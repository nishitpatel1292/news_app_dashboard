import React, { useEffect, useState } from 'react';
import './ManageNews.scss'
import { deleteNewsArticle, fetchNewsData, viewNewsArticle } from '../../utils/fetchNewsData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormNews from '../CreateNews/FormNews';
import SpinnerWrapper from '../widgets/SpinnerWrapper';
import { ToastContainer, toast } from 'react-toastify';

function EditModal(props) {
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

const ManageNews = () => {
    const [selectedArticle, setSelectedArticle] = useState();
    const [data, setData] = useState('')
    const [modalShow, setModalShow] = useState(false);

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
        setSelectedArticle(article);
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
                                <button onClick={() => { }}
                                >View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                !data && <SpinnerWrapper />
            }
            {
                selectedArticle &&
                <EditModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={selectedArticle}
                />
            }
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