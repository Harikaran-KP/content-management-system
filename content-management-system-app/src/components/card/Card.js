import React, { useContext, useState } from 'react';
import Button from '../button/Button';
import TextArea from '../textArea/TextArea';
import TextInput from '../textInput/TextInput';
import Dropdown from '../dropdown/Dropdown';
import './Card.css';
import { EditIcon } from '../../svgIcons/EditIcon';
import { DeleteIcon } from '../../svgIcons/DeleteIcon';
import { DeleteContext } from '../../services/DeleteContentContext';
import Modal from '../modal/Modal';
import { UpdateContext } from '../../services/UpdateContentContext';

const Card = ({ editMode, title, description, thumbnail, genre, status, updatedBy, addedBy, upload_date, onSave, edit, id }) => {
  const [editScreen, setEditScreen] = useState(editMode)
  const [isEditing, setIsEditing] = useState(edit);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editGenre, setEditGenre] = useState(genre);
  const [editUploadDate, setEditUploadDate] = useState(upload_date);
  const [show, setShow] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false)
  const { deleteContent } = useContext(DeleteContext)
  const { updateContent } = useContext(UpdateContext)

  const payload = {
    id,
    title: editTitle,
    description: editDescription,
    genre: editGenre,
    uploadDate: editUploadDate,
    status: status,
    thumbnail: thumbnail,
    updatedBy: 'John Doe',
    addedBy: addedBy,
  };

  const genreOptions = [
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Action', label: 'Action' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
    { value: 'Documentary', label: 'Documentary' }
  ];

  // Handler for saving updates
  const handleSave = () => {
    updateContent(payload); // Pass the payload with updated data to the parent
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteContent(id)
    setDeleteModal(false)
  }

  const handleCancel = () => {
    // Reset to the original values
    setEditTitle(title);
    setEditDescription(description);
    setEditGenre(genre);
    setEditUploadDate(upload_date);
    setIsEditing(false);
  };

  return (
    <div className="card">
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
            <Dropdown
              label="Genre"
              options={genreOptions}
              value={editGenre}
              onChange={(e) => setEditGenre(e.target.value)}
            />
            <TextInput
              label="Upload Date"
              value={editUploadDate}
              type="date"
              onChange={(e) => setEditUploadDate(e.target.value)}
            />
            <div className="card-actions">
              <Button label="Save" onClick={handleSave} />
              <Button label="Cancel" onClick={handleCancel} style={{ backgroundColor: '#f44336' }} />
            </div>
          </>
        ) : (
          // Display Mode
          <>
            <div className="card-thumbnail-container">
              <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail" />
            </div>
            <div className="card-title-row">
              <p className="card-title">{title}</p>
              {editScreen && <div className="edit-box" onClick={() => setIsEditing(true)}>
                <EditIcon />
              </div>}
            </div>
            <p className="card-description">{genre}</p>
            <p className="card-description">{`Date of Upload: ${upload_date }`}</p>
            {editScreen && <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className={status === 'Published' ? `published` : `draft`}>
                {status}
              </div>
              <div style={{ cursor: 'pointer' }} onClick={() => setDeleteModal(true)}>
                <DeleteIcon />
              </div>
            </div>}
            <Modal
              show={deleteModal}
              title="Confirm Delete"
              onClose={() => setDeleteModal(false)}
              onConfirm={() => handleDelete()}
            >
              Are you sure you want to delete this content?
            </Modal>
            {!editScreen && <div className={status === 'Published' ? `published` : `draft`}>
              {status}
            </div>}
            {show && <p className="card-description">{description}</p>}
            <div className="card-button-container">
              {!show && (
                <Button
                  style={{
                    backgroundColor: '#e0e0e0',
                    color: '#007bff',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    transition: 'background-color 0.3s'
                  }}
                  label="Show more"
                  onClick={() => setShow(true)}
                />
              )}
              {show && (
                <Button
                  style={{
                    backgroundColor: '#e0e0e0',
                    color: '#007bff',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    transition: 'background-color 0.3s'
                  }}
                  label="Show less"
                  onClick={() => setShow(false)}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
