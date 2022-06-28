import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box p={3} width="100%" textAlign="center" mb="30px">
      <List>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </List>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
