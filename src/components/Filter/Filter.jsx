import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.filterLabel}>
        <span className={css.filterText}>Find contact by name</span>
        <input
          className={css.filterInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  values: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
