import React from 'react';
import SymbolItem from '../SymbolItem/symbolItem';
import Text from '../Text/text';
import styles from './productItem.module.css';
interface Props {
	image?: string;
	time?: string;
	company?: string;
	name?: string;
	near?: string;
	nearTime?: string;
	price?: string | number;
	homeCount?: string | number;
	symbolDotColor: string;
	symbolDotIcon?: any;
	onPress?: () => void;
	minexpense?: string | number;
	studios?: string;
	oneRoom?: string;
	twoRooms?: string;
	threeRooms?: string;
	fourRooms?: string;
	fiveRooms?: string;
	className?: string;
}

const ProductItem: React.FC<Props> = ({
	company,
	homeCount,
	image,
	name,
	near,
	nearTime,
	price,
	time,
	symbolDotColor,
	symbolDotIcon,
	onPress,
	oneRoom,
	twoRooms,
	threeRooms,
	fourRooms,
	studios,
	minexpense,
	fiveRooms,
	className,
}) => {
	return (
		<div className={`${styles.container} ${className}`} onClick={onPress}>
			<div className={styles.imageBox}>
				<img className={styles.image} src={image} alt='' />
			</div>
			<div className={styles.infoBox}>
				<div className={styles.header}>
					<Text
						textType={'middle'}
						textSize={'twelve'}
						textColor={'black'}
						cursor={'none'}
						text={time}
					/>
					<Text
						textType={'middle'}
						textSize={'twelve'}
						textColor={'purple'}
						cursor={'none'}
						text={company}
					/>
				</div>
				<div className={styles.priceBox}>
					<Text
						textType={'middle'}
						textSize={'twenty'}
						textColor={'black'}
						cursor={'none'}
						text={name}
					/>
					<div className={styles.near}>
						<SymbolItem dotColor={symbolDotColor} dot text={near} />
						<SymbolItem
							dotColor={symbolDotColor}
							icon={symbolDotIcon}
							text={nearTime}
						/>
					</div>
					<div className={styles.price}>
						<Text
							textType={'middle'}
							textSize={'sixteen'}
							textColor={'black'}
							cursor={'none'}
							text={price}
						/>
						<Text
							textType={'middle'}
							textSize={'twelve'}
							textColor={'darkGrey'}
							cursor={'none'}
							text={homeCount}
						/>
					</div>
				</div>
				<div className={styles.secondBox}>
					<div className={styles.title}>
						<Text
							textType={'middle'}
							textSize={'twelve'}
							textColor={'black'}
							cursor={'none'}
							text={minexpense}
						/>
					</div>
					<div className={styles.times}>
						<div className={styles.time}>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='Studiyalar'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={studios}
								/>
							</div>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='1 xonali'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={oneRoom}
								/>
							</div>
						</div>
						<div className={styles.time}>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='2-xonali'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={twoRooms}
								/>
							</div>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='3-xonali'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={twoRooms}
								/>
							</div>
						</div>
						<div className={styles.time}>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='4-xonali'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={fourRooms}
								/>
							</div>
							<div className={styles.item}>
								<Text
									style={{ marginRight: '3px' }}
									textType={'middle'}
									textSize={'twelve'}
									textColor={'grey'}
									cursor={'none'}
									text='5-xonali'
								/>
								<Text
									textType={'middle'}
									textSize={'twelve'}
									textColor={'black'}
									cursor={'none'}
									text={fiveRooms}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
