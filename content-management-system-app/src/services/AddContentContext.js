import React, { createContext, useState } from 'react';
import axios from 'axios';

// Initial state for the add operation
const INITIAL_ADD_STATE = {
    loading: false,
    error: null,
    success: false
};

// Context
export const AddContext = createContext(INITIAL_ADD_STATE);

// Provider component
export const AddContextProvider = ({ children }) => {
    const [addState, setAddState] = useState(INITIAL_ADD_STATE);

    // Function to add a new content item to the API
    const addContent = async (newItem, status) => {
        setAddState({ ...INITIAL_ADD_STATE, loading: true });

        try {
            const response = await axios.post('http://localhost:5000/api/content', newItem);
            setAddState({ loading: false, error: null, success: true });
            if (status === 'Published'){
                alert('Content published successfully!')
            }
            else if (status === 'Draft') {
                alert('Content saved to draft!')
            }
            window.location.reload()
            return response.data;
        } catch (error) {
            setAddState({ loading: false, error: error.message, success: false });
            alert('Error occured!')
        }
    };

    return (
        <AddContext.Provider value={{ ...addState, addContent }}>
            {children}
        </AddContext.Provider>
    );
};
