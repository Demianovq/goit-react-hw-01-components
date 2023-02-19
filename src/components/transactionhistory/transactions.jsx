import PropTypes from 'prop-types';
import { TransactionInfo } from './transactioninfo/transactioninfo';
import { StringOfTable } from './transactions.style';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <StringOfTable>Type</StringOfTable>
          <StringOfTable>Amount</StringOfTable>
          <StringOfTable>Currency</StringOfTable>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionInfo key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
