import PropTypes, { arrayOf } from 'prop-types';
import { BtFetbeck, FetbeckItem } from './PleseLeave.style';

export const PleseLeave = ({ title, onResponse, options }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
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
      </ul>
    </div>
  );
};

PleseLeave.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onResponse: PropTypes.func.isRequired,
};
