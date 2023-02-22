import user from '../info/user.json';
import data from '../info/data.json';
import friends from '../info/friends.json';
import transactions from '../info/transactions.json';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/statisticslist';
import { FriendsList } from './friendlist/friendList';
import { TransactionHistory } from './transactionhistory/transactions';
import { Container } from './app.style';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={'upload stats'} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
