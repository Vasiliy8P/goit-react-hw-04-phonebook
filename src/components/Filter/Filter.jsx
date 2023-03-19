import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter, value }) => {
    return (
        <label>
            Find contacts by name
            <br />
            <input type="text" value={value} onChange={onChangeFilter} />
        </label>
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default Filter;
