import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { /* connect, */ useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions/contacts';

import { FcSearch } from 'react-icons/fc';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.findContactTitle}>
        Find contacts by name <FcSearch className={styles.findContactIcon} />
      </h3>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      />
    </div>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
