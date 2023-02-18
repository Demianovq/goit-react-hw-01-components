import PropTypes from 'prop-types';
import { StatisticsItem } from './statitem/statistics';
import { StatList, StatItem } from './statisticslist.style';

export const Statistics = ({ stats }) => {
  return (
    <StatList>
      {stats.map(item => (
        <StatItem key={item.id}>
          <StatisticsItem item={item} />
        </StatItem>
      ))}
    </StatList>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
