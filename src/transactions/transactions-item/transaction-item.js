import PropTypes from 'prop-types';
import s from './transactions-item.module.css';

export default function TransactionsItem({ type, currency, amount }) {
	return (
		<tr>
			<td className={s.item}>{type}</td>
			<td className={s.item}>{amount}</td>
			<td className={s.item}>{currency}</td>
		</tr>
	);
}

TransactionsItem.propTypes = {
	type: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
};
