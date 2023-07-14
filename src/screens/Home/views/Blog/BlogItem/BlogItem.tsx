import { find } from 'lodash';
import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useRootStore from '../../../../../Hooks/useRootStore';
import Button from '../../../../../components/Button/button';
import Footer from '../../../../../components/Footer/footer';
import { mocData } from '../Blog';
import styles from '../main.module.css';

export default observer(() => {
	const { toggle } = useRootStore().visibleStore;
	const id = useParams<{ id: string }>().id;

	const data = useMemo(() => find(mocData, { id }), [id]);

	return (
		<div className={styles.container}>
			<AdsContainerForProducts>
				<p>{JSON.stringify(data, null, 2)}</p>
				<div className='rightAdsBox'>
					<img
						src='https://domtut.uz/resources/uploads/property/ipak-yoli/main_1.jpg?r=1682593805'
						alt=''
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</AdsContainerForProducts>
			<div className={styles.aboveBox}>
				<Button
					textSize={'fourteen'}
					btnSize={'filter'}
					btnColor={'purple'}
					textColor={'textWhite'}
					borderRadius={'ten'}
					onPress={() => toggle('filterModal')}
					title={"306 ta yangi binolarni ko'rish"}
					style={{
						width: '100vw',
						borderRadius: '0',
						height: '100%',
					}}
				/>
			</div>
			<Footer />
		</div>
	);
});

const AdsContainerForProducts = styled.div`
	justify-content: space-around;
	gap: 30px;
	position: relative;
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-template-areas: 'productList rightAdsBox';

	.productList {
		grid-area: productList;
	}

	.rightAdsBox {
		grid-area: rightAdsBox;
		width: 250px;
		height: 500px;
		background-color: red;
		position: sticky;
		top: 50px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
		grid-template-areas: 'rightAdsBox' 'productList';

		.rightAdsBox {
			width: 100%;
			height: 250px;
			position: relative;
			top: 0;
			margin-top: 0;
			margin-bottom: 0;
		}
	}
`;
