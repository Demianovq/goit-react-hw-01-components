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
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
