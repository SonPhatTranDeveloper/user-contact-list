import PropTypes from 'prop-types';
import './MobileModal.css';

function MobileModal({ isOpen, user, onCloseModal }) {
    // Close modal
    function closeModal() {
        onCloseModal();
    }

    return (
        isOpen && 
        <div className='modal__holder'>
            <div className='modal'>
                <button className='close-btn' onClick={closeModal}>❌ Close</button>
                <div className='modal__corner'></div>
                <div className='modal__name'>
                    <h1 className='modal__name__title'>{user.name}</h1>
                    <h2 className='modal__name__subtitle'>{user.email}</h2>
                    <h2 className='modal__name__subtitle'>{user.phone}</h2>
                </div>

                <div className='modal__address section'>
                    <h2 className='modal__address__title title'>Address.</h2>
                    <h2 className='modal__address__content content'>{user.address.suite} {user.address.street}, {user.address.city}</h2>
                </div>

                <div className='modal__website section'>
                    <h2 className='modal__website__title title'>Website.</h2>
                    <a className='modal__website__content content link' href={"https://" + user.website}>{user.website}</a>
                </div>

                <div className='modal__company section'>
                    <h2 className='modal__company__title title'>Company.</h2>
                    <h2 className='modal__company__content content'>{user.company.name}</h2>
                    <div className='modal__company__motto bean'>{user.company.catchPhrase}</div><br/>
                    <div className='modal__company__bs bean'>{user.company.bs}</div>
                </div>
            </div>
        </div>
    )
}

MobileModal.propTypes = {
    'isOpen': PropTypes.bool,
    'onCloseModal': PropTypes.func,
    'user': PropTypes.shape({
        "id": PropTypes.number,
        "name": PropTypes.string,
        "email": PropTypes.string,
        "address": PropTypes.shape({
            "street": PropTypes.string,
            "suite": PropTypes.string,
            "zipcode": PropTypes.string,
            "geo": PropTypes.shape({
                "lat": PropTypes.string,
                "lang": PropTypes.string
            })
        }),
        "phone": PropTypes.string,
        "website": PropTypes.string,
        "company": PropTypes.shape({
            "name": PropTypes.string,
            "catchPhrase": PropTypes.string,
            "bs": PropTypes.string
        })
    })
}

export default MobileModal;