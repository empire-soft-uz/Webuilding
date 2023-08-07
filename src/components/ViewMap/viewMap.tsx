import { useTranslation } from 'react-i18next';
import { LocationTwoIcon } from '../../assets/icons';
import { ASSETS } from '../../constants/requireAssets';
import RowItem from '../Rowitem/rowItem';
import styles from './viewMap.module.css';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const ViewMap = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onPressNextPage = useCallback(() => {
		navigate('/card');
	}, [navigate]);
	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src={ASSETS.map}
				alt=''
				onClick={onPressNextPage}
			/>
			<div className={styles.text}>
				<RowItem text={t('seeMap')} iconUrl={<LocationTwoIcon />} />
			</div>
		</div>
	);
};

export default ViewMap;
