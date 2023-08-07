import styled from 'styled-components';
import { COLORS } from '../../../../constants/color';

export const MainInputContainer = styled.div`
	display: flex;
	align-items: start;

	position: relative;
	.curreny {
		position: absolute;
		right: 10px;
		top: 18px;
		color: ${COLORS.purple};
	}
`;

export const MainSelectContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const MainCalcContianer = styled.div`
	width: 200px;
	position: 'relative';
	display: flex;
	flex-direction: column;
	* {
		display: flex;
	}

	.calc__menu {
		height: auto;
		min-height: 40px;
	}

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		list-style-type: none;
		li {
			button {
				flex: 1;
				height: 35px;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;

export const MostPopularContainer = styled.div`
	position: relative;
	.title {
		font-weight: 600;
		line-height: 1.2;
		font-size: 25px;
		padding-top: 30px;
	}

	.popularItem {
		width: 45%;
	}

	.recommendedItem {
		width: 30%;
	}

	.advertisingImg {
		width: calc(100% - 56px);
		object-fit: cover;
		display: flex;
	}
`;
