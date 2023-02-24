import PropTypes from 'prop-types';
import {
  StringOfTable,
  StringInfoOfTable,
  StyledStringOfTable,
} from './transactions.style';

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
        {items.map(({ id, type, amount, currency }) => (
          <StyledStringOfTable key={id}>
            <StringInfoOfTable>{type}</StringInfoOfTable>
            <StringInfoOfTable>{amount}</StringInfoOfTable>
            <StringInfoOfTable>{currency}</StringInfoOfTable>
          </StyledStringOfTable>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
