import React from 'react';
import Card from '../card/Card';
import './Drafts.css';

const Drafts = ({ contentList, onDelete }) => {
    const draftContent = contentList.filter(item => item.status === 'Draft');

    return (
        <div className="drafts-page">
            <h1 className="drafts-title">Drafts</h1>
            <div className="drafts-list">
                {draftContent.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        thumbnail={item.thumbnail}
                        onEdit={() => alert("Edit clicked")}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default Drafts;
