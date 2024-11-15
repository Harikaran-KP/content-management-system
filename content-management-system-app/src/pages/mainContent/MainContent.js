import React, { useState, useContext } from 'react';
import ContentList from '../../components/contentList/ContentList';
import './MainContent.css';
import { ContentContext } from '../../services/ContentContext';

const MainContentPage = ({ view }) => {
    // Section where all the data related to contents are rendered.
    const { contentList } = useContext(ContentContext);
    const [, setShowModal] = useState(false);

    const handleDelete = () => setShowModal(true);

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