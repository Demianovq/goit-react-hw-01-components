import PropTypes from 'prop-types';
import { FriendInfo } from './friend/friendinfo';
import { ListOfFriends } from './friendList.style';

export const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <FriendInfo
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
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
