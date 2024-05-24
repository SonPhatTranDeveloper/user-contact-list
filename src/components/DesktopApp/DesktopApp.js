import PropTypes from 'prop-types';
import CardList from '../CardList/CardList';
import Display from '../Display/Display';
import './DesktopApp.css';
import Banner from '../Banner/Banner';

function DesktopApp({ users, selectedUser, onUserSelected }) {
    // Method to get user
    function getSelectedUser() {
        return selectedUser === null ? users[0] : selectedUser;
    }

    return (
        <div className='desktop-app'>
        {
            users && <>
                <div className="displayHolder">
                {
                    selectedUser !== null ? <Display {...getSelectedUser()}/> : <Banner />
                }
                </div>
    
                <div className="cardHolder">
                    <CardList users={users} 
                        onItemClick={(user) => onUserSelected(user)} 
                        selected={selectedUser && selectedUser.id}/>
                </div>
            </>
        }
        </div>
    )
}

DesktopApp.propTypes = {
    "users": PropTypes.any,
    "selectedUser": PropTypes.any,
    "onUserSelected": PropTypes.func
}

export default DesktopApp;