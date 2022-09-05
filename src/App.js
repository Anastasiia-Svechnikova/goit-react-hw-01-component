import user from './database/user.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';
import data from './database/data.json';

import Container from 'container';
import Profile from './profile';
import Statistics from './statistics/statistics-section';
import StatisticsList from './statistics/statistics-list/statistics-list';
import FriendsList from './friends/friends-list';
import TransactionHistory from './transactions/transactions-list/transactions';

function App() {
	return (
		<div className="App">
			<Container>
				<Profile
					avatar={user.avatar}
					username={user.username}
					tag={user.tag}
					location={user.location}
					stats={user.stats}
				/>
			</Container>

			<Container>
				<FriendsList friends={friends} />
			</Container>
			<Container>
				<Statistics title="Upload stats">
					<StatisticsList stats={data} />
				</Statistics>
				<Statistics>
					<StatisticsList stats={data} />
				</Statistics>
			</Container>

			<Container>
				<TransactionHistory transactions={transactions} />
			</Container>
		</div>
	);
}

export default App;
