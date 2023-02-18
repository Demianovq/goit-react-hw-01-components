import PropTypes from 'prop-types';
import { StatBlock, Label, Percentage } from './statistics.styled';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <StatBlock>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatBlock>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
