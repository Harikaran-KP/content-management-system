import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContentPage from '../mainContent/MainContent';
import TopNavbar from '../../components/topNavbar/TopNavbar';
import './Container.css';

const Container = () => {
    const [view, setView] = useState('content'); // Track selected view ("content" or "drafts")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle sidebar visibility on mobile

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="container">
            {/* <div className={`top-navbar-container ${isSidebarOpen ? '' : 'active'}`}>
                <TopNavbar onToggleSidebar={toggleSidebar} />
            </div> */}
            {/* <TopNavbar onToggleSidebar={toggleSidebar} /> */}
            <div className={`sidebar-container ${isSidebarOpen ? 'active' : ''}`}>
                <Sidebar onSelect={setView} onClose={closeSidebar} />
            </div>
            <div className="main-content">
                <MainContentPage view={view} />
            </div>
        </div>
    );
};

export default Container;
