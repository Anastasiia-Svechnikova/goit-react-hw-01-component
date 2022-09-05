import PropTypes from 'prop-types';
import TransactionsItem from '../transactions-item';
import s from './transactions.module.css';

export default function TransactionHistory({ transactions }) {
	return (
		<table className={s.table}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map(({ id, type, amount, currency }) => (
					<TransactionsItem key={id} amount={amount} currency={currency} type={type} />
				))}
			</tbody>
		</table>
	);
}
TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};
