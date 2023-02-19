import PropTypes from 'prop-types';
import {
  StringInfoOfTable,
  StyledStringOfTable,
} from './transactioninfo.style';

export const TransactionInfo = ({ item: { type, amount, currency } }) => {
  return (
    <StyledStringOfTable>
      <StringInfoOfTable>{type}</StringInfoOfTable>
      <StringInfoOfTable>{amount}</StringInfoOfTable>
      <StringInfoOfTable>{currency}</StringInfoOfTable>
    </StyledStringOfTable>
  );
};

TransactionInfo.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
