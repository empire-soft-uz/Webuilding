import { AboutUsContainer } from './AboutUs.styled';
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';
import LabelIcon from '@mui/icons-material/Label';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCallback } from 'react';
import { ProductListOfMain } from '../Main/main';

const AboutUs = () => {
	const renderBgImg = useCallback(
		() => (
			<div className='bg-img'>
				<img
					alt='background imag'
					className='bg-img__img'
					src='https://packagesteelsystem.com/wp-content/uploads/2021/08/office-buildings-city-skyscrapers-ss-1920.jpg'
				/>

				<h3 className='bg-img__title'>О компании</h3>
			</div>
		),
		[]
	);

	const renderTransaction = useCallback(
		() => (
			<div className='transaction'>
				<h3 className='transaction__title'>
					Все операции с недвижимостью в одном месте
				</h3>
				<p className='transaction__description'>
					Обеспечиваем полное сопровождение на всех этапах сделки в
					соответствии с действующим законодательством. За клиентом с
					момента оформления заявки закрепляется персональный
					менеджер, готовый ответить на все вопросы в любое время.
					Предоставляем максимальный набор необходимых услуг
				</p>

				<ul className='transaction__list'>
					<li>
						<MessageIcon className='transaction__list-icon' />
						<p>
							представление ваших интересов в <br />
							переговорах
						</p>
					</li>
					<li>
						<GridViewIcon className='transaction__list-icon' />
						<p>подачу заявок на ипотеку в несколько банков</p>
					</li>
					<li>
						<LabelIcon className='transaction__list-icon' />
						<p>
							подбор наиболее выгодной программы для <br />
							покупателей
						</p>
					</li>
					<li>
						<TextSnippetIcon className='transaction__list-icon' />
						<p>проверку юридической чистоты квартиры</p>
					</li>
					<li>
						<FmdGoodIcon className='transaction__list-icon' />
						<p>
							помощь в выборе жилого комплекса по <br />
							районам и направлениям
						</p>
					</li>
					<li>
						<SaveAsIcon className='transaction__list-icon' />
						<p>
							профессиональную консультацию при <br />
							подписании договоров с банком и <br />
							застройщиком
						</p>
					</li>
					<li>
						<SearchIcon className='transaction__list-icon' />
						<p>
							поиск подходящей квартиры в нем по классу, <br />
							цене, перспективности
						</p>
					</li>
					<li>
						<VisibilityIcon className='transaction__list-icon' />
						<p>
							организацию просмотра объекта в удобное <br />
							время
						</p>
					</li>
				</ul>
			</div>
		),
		[]
	);

	const renderStatistics = useCallback(
		() => (
			<>
				<div className='statistics'>
					<div className='statistics__item'>
						<h3>120+</h3>
						<h5>Застройщиков</h5>
						<p>Тесное сотрудничество с 120+ застройщиками</p>
					</div>
					<div className='statistics__item'>
						<h3>0%</h3>
						<h5>Комиссия</h5>
						<p>
							0% комиссия — все квартиры напрямую от застройщиков
						</p>
					</div>
					<div className='statistics__item'>
						<h3>290+</h3>
						<h5>Проектов</h5>
						<p>Более 290 актуальных проектов на любой вкус</p>
					</div>
				</div>

				<div className='pb-30' />
			</>
		),
		[]
	);

	const renderMarket = useCallback(
		() => (
			<div className='market'>
				<h3 className='market__title'>
					Лучшие предложения рынка недвижимости
				</h3>
				<p className='market__description'>
					Нашим коэксклюзивным партнером является <b>ГК «МонАрх»</b>,
					входящая в <b>топ-10</b> застройщиков Москвы по объемам
					ввода жилья в эксплуатацию. За 2020 год она ввела в строй{' '}
					<b>124 900 м² жилья</b>
				</p>

				<div className='market__card-container'>
					<div className='market__card'>
						<h2 className='market__card-title'>2.87%</h2>
						<p className='market__card-subTitle'>Доля на рынке</p>
						<p className='market__card-description'>
							Доля застройщика на рынке Московских новостроек
							достигла <b>2,87%</b> (по данным рейтинга ЕРЗ от
							января 2021 года). Наше агентство имеет офисы на
							объектах ГК «МонАрх»
						</p>
					</div>

					<ProductListOfMain />
				</div>
			</div>
		),
		[]
	);

	const renderTransactions = useCallback(
		() => (
			<div className='transaction base-padding-h'>
				<h3>Все операции с недвижимостью в одном месте</h3>
				<p>
					АН «Стрижи» основано лучшими специалистами в сфере права и
					продаж, чтобы помогать жителям Москвы разрешать вопросы с
					недвижимостью. Стабильный спрос на юридическое сопровождение
					сделок по купле-продаже квартир позволил нам выработать
					четкую схему работы, но мы продолжаем динамично развиваться
				</p>

				<ul>
					<li>
						<h3>Качество</h3>
						<p>
							Совершенствуем все процессы внутри компании и сервис
							клиентского обслуживания
						</p>
					</li>
					<li>
						<h3>Инновации</h3>
						<p>
							Разрабатываем уникальные IT-решения для застройщиков
							(CRM) и собственников жилья
						</p>
					</li>
					<li>
						<h3>Удобство</h3>
						<p>
							Предоставляем клиентам простой, понятный процесс
							покупки и продажи недвижимости
						</p>
					</li>
					<li>
						<h3>Профессионализм</h3>
						<p>
							Штат сотрудников состоит из опытных специалистов по
							операциям с недвижимостью
						</p>
					</li>
				</ul>
			</div>
		),
		[]
	);

	return (
		<AboutUsContainer>
			{renderBgImg()}
			{renderTransaction()}
			{renderStatistics()}
			{renderMarket()}
			{renderTransactions()}
		</AboutUsContainer>
	);
};

export default AboutUs;
