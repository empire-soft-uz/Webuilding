import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductItem from '../../../../components/ProductItem/productItem';
import ViewMap from '../../../../components/ViewMap/viewMap';
import { COLORS } from '../../../../constants/color';
import { ProductData } from '../../../../constants/productData';
import { APP_ROUTES } from '../../../../routes/app-router';
import styles from './main.module.css';

import { Box, MenuItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Theme, useTheme } from '@mui/material/styles';
import { map, take } from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import FooterCard from '../../../../components/FooterCard/FooterCard';
import PerfectCarusel from '../../../../components/PerfectCarusel/PerfectCarusel';
import SocialCard from '../../../../components/SocialCard/SocialCard';
import { SocialData } from '../../../../constants/socialData';
import { selectOptions } from './Main.data';
import {
	ContainerOfSelect,
	IInput,
	MostPopularContainer,
	ISelect as Select,
} from './Main.styled';

const Main = () => {
	const [option1, setOption1] = useState(selectOptions.first[0]);
	const [option2, setOption2] = useState(selectOptions.second[0]);
	const [option3, setOption3] = useState(selectOptions.third[0]);

	return (
		<>
			<PerfectCarusel />

			<div className={styles.container}>
				<ContainerOfSelect>
					<div className='selectContainer'>
						<Select
							className='main__select'
							value={option1}
							name='first'
							onChange={(event: any) =>
								setOption1(event.target.value)
							}>
							{map(selectOptions.first, (item) => (
								<MenuItem
									key={item}
									value={item}
									sx={{ color: COLORS.purple }}>
									{item}
								</MenuItem>
							))}
						</Select>
						<Select
							value={option2}
							name='second'
							onChange={(event: any) =>
								setOption2(event.target.value)
							}>
							{map(selectOptions.second, (item) => (
								<MenuItem
									key={item}
									value={item}
									sx={{ color: COLORS.purple }}>
									{item}
								</MenuItem>
							))}
						</Select>
						<Select
							value={option3}
							name='third'
							onChange={(event: any) =>
								setOption3(event.target.value)
							}>
							{map(selectOptions.third, (item) => (
								<MenuItem
									key={item}
									value={item}
									sx={{ color: COLORS.purple }}>
									{item}
								</MenuItem>
							))}
						</Select>
						<MultipleSelectChip />
					</div>
					<div className='inputContainer'>
						<IInput color='primary' placeholder='Цена от' />
						<IInput color='primary' placeholder='до' />
					</div>
					<ViewMap />
				</ContainerOfSelect>
				<MostPopularContainer>
					<h2 className='title'>
						Самые популярные новостройки в Ташкенте
					</h2>
					<ProductListOfMain classname='productList' length={6} />

					<Advertising />

					<h2 className='title'>Рекомендовано вам</h2>
					<ProductListOfMain classname='productList' length={6} />
				</MostPopularContainer>
				<AdsContainerForProducts>
					<ProductListOfMain classname='productList' />
					<div className='rightAdsBox'>
						<img
							src='https://domtut.uz/resources/uploads/property/ipak-yoli/main_1.jpg?r=1682593805'
							alt=''
							style={{ width: '100%', height: '100%' }}
						/>
					</div>
				</AdsContainerForProducts>

				<div className={styles.socialBox}>
					{SocialData.map((e, index) => {
						return (
							<SocialCard
								key={index}
								title={e.title}
								icon={e.icon}
							/>
						);
					})}
				</div>

				<FooterCard />
			</div>
		</>
	);
};

export const ProductListOfMain = ({
	classname,
	itemClass = '',
	length = ProductData.length,
}: {
	classname?: string;
	itemClass?: string;
	length?: number;
}) => {
	const navigation = useNavigate();
	return (
		<>
			<div className={`${styles.productBox} ${classname}`}>
				{take(ProductData, length).map((e, index) => {
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
							className={itemClass}
						/>
					);
				})}
			</div>
		</>
	);
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = [
	'1 этаже',
	'2 этаже',
	'3 этаже',
	'4 этаже',
	'5 этаже',
	'6 этаже',
	'7 этаже',
	'8 этаже',
	'9 этаже',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export function MultipleSelectChip() {
	const theme = useTheme();
	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: any) => {
		const {
			target: { value },
		} = event;
		setPersonName(typeof value === 'string' ? value.split(',') : value);
	};

	return (
		<div>
			<FormControl
				sx={() => ({
					[theme.breakpoints.up('xs')]: {
						width: '100%',
					},
					[theme.breakpoints.up('lg')]: {
						width: 300,
					},
					'& *': {
						borderColor: `${COLORS.purple} !important`,
						color: `${COLORS.purple} !important`,
					},
				})}>
				<InputLabel id='demo-multiple-chip-label'>комната</InputLabel>
				<Select
					labelId='demo-multiple-chip-label'
					id='demo-multiple-chip'
					multiple
					value={personName}
					onChange={handleChange}
					input={
						<OutlinedInput
							id='select-multiple-chip'
							label='комната'
							sx={{
								...(personName.length < 2 && {
									height: '56px',
								}),
								color: `${COLORS.purple} !important`,
							}}
						/>
					}
					renderValue={(selected: any) => (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 0.5,
							}}>
							{selected.map((value: any) => (
								<Chip
									key={value}
									label={value}
									sx={{
										color: `${COLORS.purple} !important`,
									}}
								/>
							))}
						</Box>
					)}
					MenuProps={MenuProps}>
					{names.map((name) => (
						<MenuItem
							key={name}
							value={name}
							sx={{
								color: `${COLORS.purple} !important`,
							}}
							style={getStyles(name, personName, theme)}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

const Advertising = () => (
	<Link to={'/'} reloadDocument>
		<img
			src='https://domtut.uz/banner/1?v=0.2214'
			alt='reklama'
			className='advertisingImg'
		/>
	</Link>
);

export default observer(Main);

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
