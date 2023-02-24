import PropTypes from 'prop-types';
import { FriendInfo } from './friend/friendinfo';
import { ListOfFriends } from './friendList.style';

export const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendInfo key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ListOfFriends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
