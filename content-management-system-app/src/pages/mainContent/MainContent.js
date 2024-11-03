import React, { useState, useContext } from 'react';
import ContentList from '../../components/contentList/ContentList';
import Drafts from '../../components/drafts/Drafts';
import Modal from '../../components/modal/Modal';
import './MainContent.css';
import { ContentContext } from '../../services/ContentContext';

const MainContentPage = ({ view }) => {
    // Section where all the data related to contents are rendered.
    const { contentList } = useContext(ContentContext);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => setShowModal(true);

    const handleConfirmDelete = () => {
        alert("Item deleted");
        setShowModal(false);
    };

    return (
        <div className="main-content-page">
            {
                view === 'content' && <ContentList edit={false} contentList={contentList} onDelete={handleDelete} />
            }
            {
                view === 'edit' && <ContentList edit={true} contentList={contentList} onDelete={handleDelete} />
            }
        </div>
    );
};

export default MainContentPage;
