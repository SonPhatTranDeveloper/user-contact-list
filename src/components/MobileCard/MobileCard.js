import PropTypes from 'prop-types';
import './MobileCard.css';

function MobileCard(props) {
    return (
        <div className={!props.isInverted ? 'card__holder' : ' card__holder card__holder-inverted'}>
            <div className={!props.isInverted ? 'card' : ' card card-inverted'} onClick={() => props.onClick()}>
                <h3 className={!props.isInverted ? 'card__title' : 'card__title card__title-inverted'}>{props.name}</h3>
                <h4 className={!props.isInverted ? 'card__subtitle' : 'card__subtitle card__subtitle-inverted'}>📞 {props.phone}</h4>
            </div>
        </div>
    )
}

MobileCard.propTypes = {
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
    }),
    "onClick": PropTypes.func,
    "isInverted": PropTypes.bool,
}

export default MobileCard;