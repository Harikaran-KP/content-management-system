import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import TextInput from '../textInput/TextInput';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';
import { AddContext } from '../../services/AddContentContext';
import './AddContentModal.css';

const AddContentModal = ({ show, onClose }) => {
    const { addContent } = useContext(AddContext);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        genre: 'Drama',
        uploadDate: '',
        status: 'Draft',
        thumbnail: '',
        addedBy: 'John Doe'
    });

    const [errors, setErrors] = useState({ title: false, description: false }); // Error state for required fields

    const statusOptions = [
        { value: 'Published', label: 'Published' },
        { value: 'Draft', label: 'Draft' }
    ];

    const genreOptions = [
        { value: 'Drama', label: 'Drama' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Action', label: 'Action' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'Documentary', label: 'Documentary' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false }); // Clear error for the field when user starts typing
    };

    const handleSave = async () => {
        if (validateFields()) {
            const updatedNewData = { ...formData, status: 'Published' };
            await addContent(updatedNewData);
            onClose();
        }
    };

    const handleDraft = async () => {
        if (validateFields()) {
            const updatedNewData = { ...formData, status: 'Draft' };
            await addContent(updatedNewData);
            onClose();
        }
    };

    // Validation function
    const validateFields = () => {
        const newErrors = {
            title: !formData.title.trim(),
            description: !formData.description.trim()
        };

        setErrors(newErrors);
        return !newErrors.title && !newErrors.description;
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New Content</h2>

                <div className="form-field">
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        style={{ borderColor: errors.title ? 'red' : '' }}
                    />
                    {errors.title && <p className="error-text">Title is required.</p>}
                </div>

                <div className="form-field">
                    <TextInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={{ borderColor: errors.description ? 'red' : '' }}
                    />
                    {errors.description && <p className="error-text">Description is required.</p>}
                </div>

                <div className="form-field">
                    <Dropdown
                        label="Genre"
                        options={genreOptions}
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    />
                </div>

                <div className="form-field">
                    <TextInput
                        label="Upload Date"
                        name="uploadDate"
                        type="date"
                        value={formData.uploadDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <TextInput
                        label="Thumbnail URL"
                        name="thumbnail"
                        value={formData.thumbnail}
                        onChange={handleChange}
                    />
                </div>

                <div className="modal-actions">
                    <div>
                        <Button label="Cancel" onClick={onClose} style={{ backgroundColor: '#f44336' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button label="Save to draft" onClick={handleDraft} />
                        <Button label="Publish" style={{ backgroundColor: 'green' }} onClick={handleSave} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContentModal;
