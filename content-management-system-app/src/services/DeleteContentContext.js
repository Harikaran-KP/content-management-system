// DeleteContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Initial state for the delete operation
const INITIAL_DELETE_STATE = {
    loading: false,
    error: null,
    success: false
};

// Create the context
export const DeleteContext = createContext(INITIAL_DELETE_STATE);

// Create a provider component
export const DeleteContextProvider = ({ children }) => {
    const [deleteState, setDeleteState] = useState(INITIAL_DELETE_STATE);

    // Function to delete a content item from the API
    const deleteContent = async (id) => {
        setDeleteState({ ...INITIAL_DELETE_STATE, loading: true });
        console.log('id', id)
        try {
            await axios.delete(`http://localhost:5000/api/content/delete`, {
                data: { id }
            });
            setDeleteState({ loading: false, error: null, success: true });
            alert('Content deleted!')
        } catch (error) {
            setDeleteState({ loading: false, error: error.message, success: false });
        }
    };

    return (
        <DeleteContext.Provider value={{ ...deleteState, deleteContent }}>
            {children}
        </DeleteContext.Provider>
    );
};
