import { TransactionList } from "./TransactionList"
import { Table, TableList, ListItem } from "./TransactionHistory.styled"
import { Box } from "components/Box"
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
      <Box width="50%" mx="auto">
    <Table>
  <thead>
    <ListItem>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </ListItem>
  </thead>

  <TableList>
        {transactions.map(item => (
            <TransactionList key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />
            )  
        )}
  </TableList>
      </Table>
      </Box>
    )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}