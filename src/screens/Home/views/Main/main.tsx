import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import useRootStore from '../../../../Hooks/useRootStore';
import Button from '../../../../components/Button/button';
import FinishTimeFilter from '../../../../components/FinishTimeFilter/finishTimeFilter';
import FloorFilter from '../../../../components/FloorFilter/floorFilter';
import PriceFilter from '../../../../components/PriceFilter/priceFilter';
import ProductItem from '../../../../components/ProductItem/productItem';
import RoomsSelect from '../../../../components/RoomsSelect/roomsSelect';
import SizeFilter from '../../../../components/SizeFilter/sizeFilter';
import SwiperComp from '../../../../components/Swiper/swiper';
import ViewMap from '../../../../components/ViewMap/viewMap';
import { COLORS } from '../../../../constants/color';
import { ProductData } from '../../../../constants/productData';
import { APP_ROUTES } from '../../../../routes/app-router';
import styles from './main.module.css';

const Main = () => {
	const { toggle } = useRootStore().visibleStore;

	const filterHanler = () => {
		for (let i = 0; i < ProductData.length; i++) {
			if (ProductData[i].price === '35 000 $ dan') {
				console.log('newArr');
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<SwiperComp />
				<div className={styles.infoBox}>
					<div className={styles.infoCard}>
						<RoomsSelect />
						<PriceFilter label='Narxi, ming $' />
						<SizeFilter label='Maydoni, m²' />
						<FinishTimeFilter
							from={new Date()}
							to={new Date('Thu Dec 27 2025')}
							label='Topshirish muddati'
						/>
						<FloorFilter label='Qavat' />
						<Button
							textSize={'fourteen'}
							btnSize={'filter'}
							btnColor={'purple'}
							textColor={'textWhite'}
							borderRadius={'ten'}
							title={"306 ta yangi binolarni ko'rish"}
							onPress={filterHanler}
						/>
					</div>
					<ViewMap />
				</div>
			</div>
			<ProductListOfMain />
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
		</div>
	);
};

export const ProductListOfMain = () => {
	const navigation = useNavigate();
	return (
		<div className={styles.productBox}>
			{ProductData.map((e, index) => {
				return (
					<ProductItem
						key={index}
						symbolDotColor={COLORS.orange}
						image={e.images[0].image}
						company={e.company}
						name={e.name}
						homeCount={e.homeCount}
						near={e.near}
						nearTime={e.nearTime}
						price={e.price}
						time={e.process}
						symbolDotIcon={e.symbolDotIcon}
						onPress={() => navigation(APP_ROUTES.PRODUCT)}
						minexpense={e.minExpense}
						studios={e.studios}
						oneRoom={e.oneRoom}
						twoRooms={e.twoRooms}
						threeRooms={e.threeRooms}
						fourRooms={e.fourRooms}
						fiveRooms={e.fiveRooms}
					/>
				);
			})}
		</div>
	);
};

export default observer(Main);
