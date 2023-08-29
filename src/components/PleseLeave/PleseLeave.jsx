import PropTypes, { arrayOf } from 'prop-types';
import {
  BtFetbeck,
  FetbeckItem,
  FetbeckEl,
  WrapFetbeck,
  FitbackTitel,
} from './PleseLeave.style';

export const PleseLeave = ({ title, onResponse, options }) => {
  return (
    <WrapFetbeck>
      <FitbackTitel>{title}</FitbackTitel>
      <FetbeckEl>
        {options.map(option => {
          return (
            <FetbeckItem option={option} key={option}>
              <BtFetbeck
                key={option}
                type="button"
                onClick={() => onResponse(option)}
              >
                {option}
              </BtFetbeck>
            </FetbeckItem>
          );
        })}
      </FetbeckEl>
    </WrapFetbeck>
  );
};

PleseLeave.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onResponse: PropTypes.func.isRequired,
};
