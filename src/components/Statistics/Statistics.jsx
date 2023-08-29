import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  coefficientPositive,
  total,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
        <li>{total}</li>
        <li>{coefficientPositive}%</li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  coefficientPositive: PropTypes.number.isRequired,
};
