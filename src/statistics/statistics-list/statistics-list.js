import PropTypes from 'prop-types';
import StatisticsItem from '../statistics-item';
import s from './statistics-list.module.css';
export default function StatisticsList({ stats }) {
	return (
		<ul className={s.box}>
			{stats.map(({ id, label, percentage }) => (
				<StatisticsItem key={id} label={label} percentage={percentage} />
			))}
		</ul>
	);
}

StatisticsList.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};
