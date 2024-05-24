import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {
    return (
        <div className='cardlist__holder'>
        {
            props.users.map(
                user => <Card {...user} isInverted={props.selected === user.id} key={user.id} onClick={() => {props.onItemClick(user)}}/>
            )
        }
        </div>  
    )
}

CardList.propTypes = {
    "users": PropTypes.arrayOf(PropTypes.shape({
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
    })),
    "onItemClick": PropTypes.func,
    "selected": PropTypes.any
}

export default CardList;