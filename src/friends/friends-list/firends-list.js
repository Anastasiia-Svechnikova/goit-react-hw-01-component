import PropTypes from 'prop-types';
import FriendsListItem from '../friends-list-item';
import s from './friends-list.module.css';

export default function FriendsList({ friends }) {
	return (
		<ul className={s.list}>
			{friends.map(({ avatar, id, isOnline, name }) => (
				<FriendsListItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
			))}
		</ul>
	);
}
FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};
