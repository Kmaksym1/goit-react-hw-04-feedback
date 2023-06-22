import css from '../feedback/feedback.module.css';

// import { Statistics } from '../statistics/statistics.jsx';

export const Section = ({ title }) => {
  return (
    <div className={css.mainContainer}>
    <h4>{title}</h4>
    </div>
  );
};
