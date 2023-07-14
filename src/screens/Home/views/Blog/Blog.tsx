import { format } from 'date-fns';
import { map } from 'lodash';
import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useRootStore from '../../../../Hooks/useRootStore';
import Button from '../../../../components/Button/button';
import Footer from '../../../../components/Footer/footer';
import { APP_ROUTES } from '../../../../routes/app-router';
import { BlogContainer } from './Blog.styled';
import styles from './main.module.css';

export const mocData = [
	{
		id: '1',
		title: 'Технологическое венчурное подразделение Саффолка закрывает первый фонд на 110 миллионов долларов',
		description:
			'Инвестиционный бизнес бостонского подрядчика рассматривает искусственный интеллект, автоматизацию и устойчивое развитие как ключевые темы инноваций в строительстве.',
		owner: 'Мэтью Тибо',
		img: 'https://www.constructiondive.com/imgproxy/o_Eei0TyVOEeh5gaPp7hhP3rott1bFcjPiSwFslGOP4/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL0hvbWVfTG9jYXRpb25fQm9zdG9uLmpwZw.jpg',
		createAt: new Date('July 12, 2023').toString(),
	},
	{
		id: '2',
		title: 'Полони из AECOM: «Мы не можем позволить себе игнорировать разнообразие»',
		description:
			'Президент одного из крупнейших подрядчиков страны призывает других женщин-строителей согласиться на новые возможности.',
		owner: 'Дженнифер Гудман',
		img: 'https://www.constructiondive.com/imgproxy/GsZ5_D4Zjz41IwlDub3mrKpvMHBFr1ROG8T3kEsFsY8/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL3BvbG9uaV9oZWFkZXIucG5n.jpg',
		createAt: new Date('July 12, 2023').toString(),
	},
	{
		id: '3',
		title: 'Компании теряют миллионы в погоне за данными и информацией',
		description:
			'Новый отчет о напрасных усилиях в офисе рисует суровую картину для строительных и других предприятий, которые отстают в гонке за внедрением технологий.',
		owner: 'Дженнифер Гудман',
		img: 'https://www.constructiondive.com/imgproxy/BwTc0Nuqtzu86IW1tz-UQrBsbXQjvt0zM25X5bmgMNo/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL0dldHR5SW1hZ2VzLTE3MDk2MTg4Mi5qcGc.jpg',
		createAt: new Date('July 11, 2023').toString(),
	},
	{
		id: '4',
		title: 'Bechtel открывает новый офис в Аризоне на фоне полупроводникового бума',
		description:
			'Расположение поможет подрядчику воспользоваться волной производства компьютерных микросхем в этом районе.',
		owner: 'Мэтью Тибо',
		img: 'https://www.constructiondive.com/imgproxy/YxROujSskSZb145ZQ9c_pBlQDBCrmoVs2ImSQopQcOM/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL0JlY2h0ZWwuanBlZw.jpg',
		createAt: new Date('July 10, 2023').toString(),
	},
];

export default observer(() => {
	const { toggle } = useRootStore().visibleStore;

	const renderItem = useCallback(
		(_item: (typeof mocData)[0]) => (
			<div key={_item.id} className='blog__item'>
				<Link to={`${APP_ROUTES.BLOG}/${_item.id}`}>
					<img
						alt={_item.title}
						src={_item.img}
						className='blog__item-img'
					/>
				</Link>

				<div className='blog__item-content'>
					<Link
						className='blog__link'
						to={`${APP_ROUTES.BLOG}/${_item.id}`}>
						<h3 className='blog__item-title'>{_item.title}</h3>
					</Link>
					<p className='blog__item-description'>
						{_item.description}
					</p>

					<div className='blog__item-footer'>
						<p className='blog__item-footer__owner'>
							{_item.owner}
						</p>
						<div className='blog__item-footer__dot' />
						<p className='blog__item-footer__date'>
							{format(new Date(_item.createAt), 'MMM dd. yyyy')}
						</p>
					</div>
				</div>
			</div>
		),
		[]
	);
	return (
		<div className={styles.container}>
			<AdsContainerForProducts>
				<BlogContainer>
					<div className='blog'>
						<h3 className='blog__title'>КОРПОРАТИВНЫЕ НОВОСТИ</h3>

						{map(mocData, renderItem)}
					</div>
				</BlogContainer>
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
