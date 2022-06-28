import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { Box } from './Box';

export const App = () => {
  return (
    <Box width="1024px" mx="auto" bg="grey" p="20px">
      <Box>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Box width="400px" mx="auto">
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </Box>
        <FriendList friends={friends} />
      </Box>
      <TransactionHistory transactions={transactions} />
    </Box>
  );
};
