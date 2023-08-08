import styled from 'styled-components';
import { Box, Select, TextField, styled as muiStyled } from '@mui/material';
import { COLORS } from '../../../../constants/color';

export const MainInputContainer = styled.div`
	display: flex;
	align-items: start;

	position: relative;

	.leftContainer,
	.rightContainer {
		display: flex;
	}

	.rightContainer {
	}
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

export const ISelect = muiStyled(Select)(({ theme }) => ({
	width: 200,
	borderRadius: 0,
	minHeight: 30,
	color: COLORS.purple,
	'& *': {
		borderColor: `${COLORS.purple} !important`,
		color: `${COLORS.purple} !important`,
	},
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		marginBottom: 10,
	},
	[theme.breakpoints.up('lg')]: {
		display: 'flex',
		flex: 1,
	},
}));

export const IInput = muiStyled(TextField)(({ theme }) => ({
	height: '50px',
	boxSizing: 'border-box',
	color: COLORS.purple,
	'& *': {
		borderColor: `${COLORS.purple} !important`,
		color: `${COLORS.purple} !important`,
	},
	[theme.breakpoints.up('xs')]: {
		width: '50%',
	},
}));
export const ContainerOfSelect = muiStyled(Box)(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 10,
		'.leftContainer, .rightContainer': {
			display: 'flex',
			flexDirection: 'column',
		},

		'.inputContainer': {
			display: 'flex',
			marginBottom: 20,
		},
	},

	[theme.breakpoints.up('lg')]: {
		'.selectContainer': {
			display: 'flex',
		},
	},

	[theme.breakpoints.up('xl')]: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	//
}));
