import React, { useState } from 'react';
import Card from '../card/Card';
import TextInput from '../textInput/TextInput';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';
import AddContentModal from '../addContentModal/AddContentModal';
import './ContentList.css';

const ContentList = ({ contentList, onDelete, edit }) => {
    // State for filters
    const [nameFilter, setNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);

    // Open and close modal functions
    const handleOpenModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    // Options for the status dropdown
    const statusOptions = [
        { value: 'All', label: 'All' },
        { value: 'Published', label: 'Published' },
        { value: 'Draft', label: 'Draft' }
    ];

    // Filtering logic
    const filteredContent = contentList?.filter((item) => {
        // Filter by name/title
        const matchesName = item.title.toLowerCase().includes(nameFilter.toLowerCase());

        // Filter by status
        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

        // Filter by date
        const matchesDate = dateFilter === '' || item.upload_date === dateFilter;

        // Return true if all filters match
        return matchesName && matchesStatus && matchesDate;
    });

    return (
        <div className="content-list-page">
            {!edit ? <h1>Dashboard</h1> : <h1>Edit Content</h1>}

            {/* Filter Section */}
            <div className="filter-section">
                {/* Name Filter */}
                <div className="filter-item">
                    <TextInput
                        label="Name"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        placeholder="Search by name"
                    />
                </div>

                {/* Status Filter */}
                <div className="filter-item">
                    <Dropdown
                        label="Status"
                        options={statusOptions}
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    />
                </div>

                {/* Date Filter */}
                <div className="filter-item">
                    <TextInput
                        label="Date"
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <Button label="+ Add Content" onClick={handleOpenModal} />
            </div>

            <AddContentModal show={showAddModal} onClose={handleCloseModal} />

            {/* Content List */}
            <div className="content-list">
                {filteredContent?.length > 0 ? (
                    filteredContent.map((item) => (
                        <Card
                            editMode={edit}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            genre={item.genre}
                            updatedBy={item.updatedBy}
                            addedBy={item.addedBy}
                            status={item.status}
                            thumbnail={item.thumbnail}
                            upload_date={item.upload_date}
                            onEdit={() => alert('Edit clicked')}
                            onDelete={onDelete}
                        />
                    ))
                ) : (
                    <p>No content matches your filters.</p>
                )}
            </div>
        </div>
    );
};

export default ContentList;
