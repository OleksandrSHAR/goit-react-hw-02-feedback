import PropTypes from 'prop-types';
import {
  WrapStat,
  StatTitel,
  StatEl,
  El,
  StatCoefficient,
  ElGood,
  ElNeutral,
  ElBad,
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
        <ElGood>Good:{good}</ElGood>
        <ElNeutral>Neutral:{neutral}</ElNeutral>
        <ElBad>Bad:{bad}</ElBad>
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
