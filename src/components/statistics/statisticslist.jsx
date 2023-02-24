import PropTypes from 'prop-types';
// import { StatisticsItem } from './statitem/statistics';
import { StatList, StatItem, Label, Percentage } from './statisticslist.style';

export const Statistics = ({ title, stats }) => {
  return (
    <StatList>
      {title && <h1>{title}</h1>}
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatItem>
      ))}
    </StatList>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
