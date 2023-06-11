import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { FaTrash } from 'react-icons/fa';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contact}>
            <p className={css.contactName}>
              {name}: {number}
            </p>
            <button
              className={css.deleteButton}
              type="button"
              onClick={() => deleteContact(id)}
            >
              <FaTrash className={css.deleteIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
