import css from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return (
    <div className={css.nameSearchForm}>
      <p>Find contacts by name</p>
      <input
        className={css.nameSearchInput}
        type="text"
        onChange={evt => onChange(evt.currentTarget.value)}
      />
    </div>
  );
};
