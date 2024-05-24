import PropTypes from 'prop-types';
import MobileCardList from '../MobileCardList/MobileCardList';
import MobileBanner from '../MobileBanner/MobileBanner';
import MobileModal from '../MobileModal/MobileModal';
import { useEffect, useState } from 'react';
import './MobileApp.css';

function MobileApp({ users, selectedUser, onUserSelected }) {
    // Method to get user
    function getSelectedUser() {
        return selectedUser === null ? users[0] : selectedUser;
    }

    // Modal state
    const [isModalOpen, setModalOpen] = useState(false);

    // Control modal through selected user
    useEffect(() => {
        setModalOpen(selectedUser !== null);
    }, [selectedUser])

    // Close modal
    function closeModal() {
        setModalOpen(false);
    }

    // Function to open model
    function onSelected(user) {
        setModalOpen(true);
        onUserSelected(user);
    }

    return (
        <div className='mobile-app'>
        {
            users && 
            <div className='wrapper'>
                <MobileBanner />
                <MobileCardList 
                    users={users} 
                    selected={selectedUser} 
                    onItemClick={(user) => onSelected(user)}/>
                <MobileModal 
                    isOpen={isModalOpen} 
                    user={getSelectedUser()}
                    onCloseModal={closeModal}/>
            </div>
        }
        </div>
    )
}

MobileApp.propTypes = {
    "users": PropTypes.any,
    "selectedUser": PropTypes.any,
    "onUserSelected": PropTypes.func
}

export default MobileApp;