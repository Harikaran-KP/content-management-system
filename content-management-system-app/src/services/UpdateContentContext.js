// UpdateContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Initial state for the update operation
const INITIAL_UPDATE_STATE = {
    loading: false,
    error: null,
    success: false
};

// Create the context
export const UpdateContext = createContext(INITIAL_UPDATE_STATE);

// Create a provider component
export const UpdateContextProvider = ({ children }) => {
    const [updateState, setUpdateState] = useState(INITIAL_UPDATE_STATE);

    // Function to update a content item in the API
    const updateContent = async (updatedItem) => {
        setUpdateState({ ...INITIAL_UPDATE_STATE, loading: true });

        try {
            await axios.put(`http://localhost:5000/api/content/update`, updatedItem);
            setUpdateState({ loading: false, error: null, success: true });
            alert('Content updated successfully!')
        } catch (error) {
            setUpdateState({ loading: false, error: error.message, success: false });
        }
    };

    return (
        <UpdateContext.Provider value={{ ...updateState, updateContent }}>
            {children}
        </UpdateContext.Provider>
    );
};
