import { ListItem } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionList = ({ type, amount, currency }) => {
  return (
    <ListItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </ListItem>
  );
};

TransactionList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
