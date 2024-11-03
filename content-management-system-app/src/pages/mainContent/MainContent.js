import React, { useState, useContext } from 'react';
import ContentList from '../../components/contentList/ContentList';
import Drafts from '../../components/drafts/Drafts';
import Modal from '../../components/modal/Modal';
import './MainContent.css';
import { ContentContext } from '../../services/ContentContext';

const MainContentPage = ({ view }) => {
    const { contentList } = useContext(ContentContext);
    const [showModal, setShowModal] = useState(false);
    // const [contentList] = useState([
    //     { id: 1, title: "Published Content", description: "This is a published item.", status: "Published", thumbnail: "/images/sample-thumbnail.jpg" },
    //     { id: 2, title: "Draft Content", description: "This is a draft item.", status: "Draft", thumbnail: "/images/sample-thumbnail.jpg" }
    // ]);

    const handleDelete = () => setShowModal(true);

    const handleConfirmDelete = () => {
        alert("Item deleted");
        setShowModal(false);
    };

    return (
        <div className="main-content-page">
            {/* {view === 'content' ? (
                <ContentList edit={false} contentList={contentList} onDelete={handleDelete} />
            ) : (
                <ContentList edit={true} contentList={contentList} onDelete={handleDelete} />
            )} */}

            {
                view === 'content' && <ContentList edit={false} contentList={contentList} onDelete={handleDelete} />
            }
            {
                view === 'edit' && <ContentList edit={true} contentList={contentList} onDelete={handleDelete} />
            }

            <Modal
                show={showModal}
                title="Confirm Delete"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmDelete}
            >
                Are you sure you want to delete this item?
            </Modal>
        </div>
    );
};

export default MainContentPage;
