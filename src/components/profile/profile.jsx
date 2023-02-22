import PropTypes from 'prop-types';
import { Userblock, ListOfstats, UserInfo, ItemOfstats } from './profile.style';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Userblock>
      <div>
        <img src={avatar} alt="avatar" width="300px" />
        <UserInfo>
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </UserInfo>
      </div>

      <ListOfstats>
        <ItemOfstats>
          <span>Followers:</span>
          <span>{followers}</span>
        </ItemOfstats>
        <ItemOfstats>
          <span>Views:</span>
          <span>{views}</span>
        </ItemOfstats>
        <ItemOfstats>
          <span>Likes:</span>
          <span>{likes}</span>
        </ItemOfstats>
      </ListOfstats>
    </Userblock>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
