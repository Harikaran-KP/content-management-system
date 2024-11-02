import React from 'react';
import Card from '../card/Card';
import './ContentList.css';

const ContentList = ({ contentList, onDelete }) => {
    const publishedContent = contentList.filter(item => item.status === 'Published');

    return (
        <div className="content-list-page">
            <div className="content-list">
                {publishedContent.map(item => (
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

export default ContentList;
