import PropTypes from 'prop-types';
import './Display.css';

function Display(props) {
    return (
        <div className='display__holder'>
            <div className='display'>
                <div className='display__corner'></div>
                <div className='display__name'>
                    <h1 className='display__name__title'>{props.name}</h1>
                    <h2 className='display__name__subtitle'>{props.email} | {props.phone}</h2>
                </div>

                <div className='display__address section'>
                    <h2 className='display__address__title title'>Address:</h2>
                    <h2 className='display__address__content content'>{props.address.suite} {props.address.street}, {props.address.city}</h2>
                </div>

                <div className='display__website section'>
                    <h2 className='display__website__title title'>Website:</h2>
                    <a className='display__website__content content link' href={"https://" + props.website}>{props.website}</a>
                </div>

                <div className='display__company section'>
                    <h2 className='display__company__title title'>Company:</h2>
                    <h2 className='display__company__content content'>{props.company.name}</h2>
                    <div className='display__company__motto bean'>{props.company.catchPhrase}</div><br/>
                    <div className='display__company__bs bean'>{props.company.bs}</div>
                </div>
            </div>
        </div>
    )
};

Display.propTypes = {
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
}

export default Display;