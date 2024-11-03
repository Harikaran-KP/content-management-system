import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Define initial structure for each content item
const CONTENT_TYPE = {
    id: 0,
    title: '',
    description: '',
    genre: '',
    upload_date: '',
    status: '',
    thumbnail: '',
    updatedBy: '',
    addedBy: ''
};

// Define initial state for the content list
const INITIAL_STATE = {
    contentList: [],        // Array of content items with defined structure
    loading: true,
    error: null
};

// Create the context
export const ContentContext = createContext(INITIAL_STATE);

// Create a provider component
export const ContentContextProvider = ({ children }) => {
    const [contentState, setContentState] = useState(INITIAL_STATE);

    useEffect(() => {
        const fetchContent = async () => {
            setContentState({ ...INITIAL_STATE, loading: true });

            try {
                const response = await axios.get('http://localhost:5000/api/content');
                // Map each item to ensure it matches the defined structure
                const contentList = response.data.map(item => ({
                    ...CONTENT_TYPE, // Start with the defined structure
                    ...item                   // Overwrite with actual item data
                }));

                setContentState({
                    contentList,
                    loading: false,
                    error: null
                });
            } catch (error) {
                setContentState({
                    contentList: [],
                    loading: false,
                    error: error.message
                });
            }
        };

        fetchContent();
    }, []);

    return (
        <ContentContext.Provider value={contentState}>
            {children}
        </ContentContext.Provider>
    );
};
