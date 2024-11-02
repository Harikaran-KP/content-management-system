import React, { useState } from 'react';
import Button from '../button/Button';
import TextArea from '../textArea/TextArea';
import TextInput from '../textInput/TextInput';
import './Card.css';

const Card = ({ title, description, thumbnail, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleSave = () => {
    onSave(editTitle, editDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(title);       // Reset to original title
    setEditDescription(description); // Reset to original description
    setIsEditing(false);
  };

  return (
    <div className="card">
      {/* <img src={thumbnail} alt={title} className="card-thumbnail" /> */}
      <div className="card-content">
        {isEditing ? (
          // Edit Mode
          <>
            <TextInput
              label="Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <TextArea
              label="Description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <div className="card-actions">
              <Button label="Save" onClick={handleSave} />
              <Button label="Cancel" onClick={handleCancel} style={{ backgroundColor: '#f44336' }} />
            </div>
          </>
        ) : (
          // Display Mode
          <>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <Button label={`+  Edit`} onClick={() => setIsEditing(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
