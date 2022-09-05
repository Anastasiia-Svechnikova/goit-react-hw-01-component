import PropTypes from 'prop-types';
import s from './friends-list-item.module.css';
export default function FriendsListItem({ avatar, name, isOnline }) {
	return (
		<li className={s.box}>
			<img className={s.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={s.name}>{name}</p>
			{isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
		</li>
	);
}
FriendsListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
