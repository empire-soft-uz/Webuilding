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
import { BlogItemContainer } from './BlogItem.styled';
import { format } from 'date-fns';
import { BiLogoLinkedin, BiSolidPrinter, BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import FooterCard from '../../../../../components/FooterCard/FooterCard';

export default observer(() => {
	const { toggle } = useRootStore().visibleStore;
	const id = useParams<{ id: string }>().id;

	const data = useMemo(
		() => (find(mocData, { id }) || {}) as (typeof mocData)[0],
		[id]
	);

	return (
		<div className={styles.container}>
			<AdsContainerForProducts>
				<BlogItemContainer>
					<h2 className='topTitle'>{data.title}</h2>
					<p className='topDescription'>{data.description}</p>
					<p className='own'>
						Опубликовано{' '}
						{format(new Date(data?.createAt), 'MMM dd. yyyy')}
					</p>

					<div className='userContainer'>
						<div className='user'>
							<div className='userImgContainer'>
								<img
									src={data.userImg}
									className='userImg'
									alt={data.title}
								/>
							</div>
							<div className='userInfo'>
								<p className='userInfoTitle'>{data.owner}</p>
								<p className='userInfoAuthor'>
									Ассоциированный редактор
								</p>
							</div>
						</div>
						<div className='socailContainer'>
							<IconButton className='icon'>
								<BiLogoLinkedin />
							</IconButton>
							<IconButton className='icon'>
								<FaFacebookSquare />
							</IconButton>
							<IconButton className='icon'>
								<BsTwitter />
							</IconButton>
							<IconButton className='icon'>
								<BiSolidPrinter />
							</IconButton>
							<IconButton className='icon'>
								<BiLogoGmail />
							</IconButton>
						</div>
					</div>

					<div className='mainContainer'>
						<div className='mainImgContainer'>
							<img
								src={data.img}
								alt={data.img}
								className='mainImg'
							/>
							<p className='mainImgDescription'>
								Штаб-квартира Саффолка в Бостоне.{' '}
								<i>Разрешение предоставлено Саффолком</i>
							</p>
						</div>

						<div className='mainDescriptionContainer'>
							<p className='mainDescriptionTitle'>
								Краткое описание погружения:
							</p>

							<ul>
								<li className='mainDescriptionText'>
									Бостонский подрядчик Suffolk закрыл первый
									фонд своего венчурного подразделения Suffolk
									Technologies с обязательствами в размере 110
									миллионов долларов, о чем компания объявила
									11 июля. Фонд действует с 2019 года.
								</li>

								<li className='mainDescriptionText'>
									Стратегия Suffolk заключается в
									предоставлении финансирования в размере от
									500 000 до 5 миллионов долларов на начальном
									уровне и на уровне серии A, сообщил Дэниел
									Антонеллис, старший вице-президент по
									коммуникациям, Construction Dive в
									электронном письме. Согласно сообщению, он
									будет инвестировать как в строительные
									технологии, так и в стартапы в сфере
									недвижимости.
								</li>

								<li className='mainDescriptionText'>
									Company leaders are focused on technologies
									that address the fragmented nature of
									construction, artificial intelligence and
									automation, and sustainability, Antonellis
									said. Artificial intelligence in particular
									has commanded headlines across industries
									because of products like OpenAI’s ChatGPT,
									and contractors are wondering how to
									leverage the technology.
								</li>
							</ul>

							<p className='mainDescriptionTitle'>Погружение:</p>
							<ul>
								<li className='mainDescriptionText'>
									Помимо основных направлений деятельности
									венчурной фирмы, она также будет
									инвестировать в предприятия, призванные
									решать проблемы строительного мира, включая
									доступное жилье, неэффективность
									строительства и устойчивость.
								</li>
								<li className='mainDescriptionText'>
									«Категория строительства и недвижимости —
									это отрасль стоимостью 6,4 триллиона
									долларов, которая составляет 5% ВВП США.
									Несмотря на важность нашей отрасли для
									американской экономики, строительство и
									недвижимость по-прежнему отстают от других
									отраслей, когда речь идет об инновациях и
									использовании технологий и данных», — заявил
									Джон Фиш, генеральный директор Suffolk, в
									пресс-релизе.
								</li>
								<li className='mainDescriptionText'>
									В дополнение к финансированию Саффолк также
									готовится к запуску в 2023 году итерации
									своего акселератора Boost, который отбирает
									стартапы для тестирования на рабочих местах
									и создания сетей.
								</li>
								<li className='mainDescriptionText'>
									Suffolk Technologies has made 30 investments
									to date in companies such as:
								</li>
							</ul>
						</div>
					</div>
				</BlogItemContainer>
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
			<FooterCard />
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
