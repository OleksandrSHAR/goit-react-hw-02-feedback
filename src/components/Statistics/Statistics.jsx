import PropTypes from 'prop-types';
import {
  WrapStat,
  StatTitel,
  StatEl,
  El,
  StatCoefficient,
} from './Statistics.style';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  coefficientPositive,
  total,
}) => {
  return (
    <WrapStat>
      <StatTitel>{title}</StatTitel>
      <StatEl>
        <El>Good:{good}</El>
        <El>Neutral:{neutral}</El>
        <El>Bad:{bad}</El>
      </StatEl>
      <StatCoefficient>
        <El>Total:{total}</El>
        <El>Positive:{coefficientPositive}%</El>
      </StatCoefficient>
    </WrapStat>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  coefficientPositive: PropTypes.number.isRequired,
};
