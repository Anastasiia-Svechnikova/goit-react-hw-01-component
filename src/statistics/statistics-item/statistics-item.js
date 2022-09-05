import PropTypes from 'prop-types';
import s from './statistics-item.module.css';
export default function StatisticsItem({ label, percentage }) {
	return (
		<li className={s.box} style={{ backgroundColor: getRandomHexColor() }}>
			<span className={s.label}>{label}</span>
			<span className={s.percentage}>{percentage}</span>
		</li>
	);
}
StatisticsItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
