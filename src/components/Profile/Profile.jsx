import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { UserImg, CartInfo, CartInfoItem, UserText } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="white"
      width="200px"
      mx="auto"
      mb="20px"
      borderRadius="3px"
      pt="10px"
    >
      <UserImg src={avatar} alt="User avatar" />
      <UserText>{username}</UserText>
      <UserText>@{tag}</UserText>
      <UserText>{location}</UserText>
      <CartInfo>
        <CartInfoItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </CartInfoItem>
        <CartInfoItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </CartInfoItem>
        <CartInfoItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </CartInfoItem>
      </CartInfo>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
