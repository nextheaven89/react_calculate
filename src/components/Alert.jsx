import './Alert.css';
import PropTypes from 'prop-types';

function Alert({type, text}){
    return (
        <div className={`alert alert-${type}`}> {text} </div>
    );
}
Alert.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Alert;
