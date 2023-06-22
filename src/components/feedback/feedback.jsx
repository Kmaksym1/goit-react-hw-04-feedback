import css from './feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
      {options.map(el => (
        <button
          key={el}
          className={css.Bntfeeedback}
          onClick={() => onLeaveFeedback(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
