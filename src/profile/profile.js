import PropTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({ username, avatar, location, stats: { followers, views, likes }, tag }) => {
	return (
		<div className={s.profile}>
			<div className={s.description}>
				<img src={avatar} alt="User avatar" className={s.avatar} />
				<p className={s.name}>{username}</p>
				<p className={s.text}>@{tag}</p>
				<p className={s.text}>{location}</p>
			</div>

			<ul className={s.stats}>
				<li>
					<span className={s.label}>Followers</span>
					<span className={s.quantity}>{followers}</span>
				</li>
				<li>
					<span className={s.label}>Views</span>
					<span className={s.quantity}>{views}</span>
				</li>
				<li>
					<span className={s.label}>Likes</span>
					<span className={s.quantity}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};
Profile.propTypes = {
	username: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}).isRequired,
};
export default Profile;
