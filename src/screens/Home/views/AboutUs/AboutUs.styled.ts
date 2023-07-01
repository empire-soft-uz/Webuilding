import styled from 'styled-components';
import { FONTS, RESPONSIVE } from '../../../../constants/constants';

export const AboutUsContainer = styled.div`
	padding-top: 20px;
	background: #ffffff;
	min-height: 100%;
	height: 100%;

	* {
		font-family: ${FONTS.default};
		list-style: none;
	}

	.base-padding-h {
		padding: 0 20px;

		@media (min-width: ${RESPONSIVE.largeDevice}) {
			padding: 0 65px;
		}
	}

	/* bg-img style */
	.bg-img {
		position: relative;

		&__img {
			width: 100%;
			max-height: 200px;
			object-fit: cover;

			@media (min-width: ${RESPONSIVE.tablet}) {
				max-height: 500px;
			}
		}

		&__title {
			position: absolute;
			top: 65%;
			z-index: 1;
			color: #ffffff;
			font-size: 32px;
			line-height: 40px;
			font-weight: 600;
			left: 20px;

			@media (min-width: ${RESPONSIVE.tablet}) {
				top: 80%;
			}

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				left: 65px;
			}
		}
	}

	/* transaction style */
	.transaction {
		/* padding: 0 20px; */

		&__title {
			font-size: 20px;
			font-weight: 500;
			line-height: 32px;
			color: #151d33;
			font-family: ${FONTS.m5};
			padding: 20px 0;

			@media (min-width: ${RESPONSIVE.tablet}) {
				padding-top: 35px;
			}
		}

		&__description {
			font-size: 12px;
			line-height: 22px;
			font-weight: 500;
			font-family: ${FONTS.m5};
			color: #151d33;
			margin-bottom: 40px;
		}

		&__list {
			@media (min-width: ${RESPONSIVE.tablet}) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}

			@media (min-width: ${RESPONSIVE.laptop}) {
				grid-template-columns: repeat(3, 1fr);
			}

			@media (min-width: 1285px) {
				grid-template-columns: repeat(4, 1fr);
			}

			&-icon {
				width: 24px;
				color: red;
				opacity: 0.7;
			}

			p {
				font-size: 12px;
				line-height: 22px;
				color: #151d33;
				font-weight: 400;
				font-family: ${FONTS.m4};
				opacity: 0.8;
			}

			li {
				height: 100px;
			}
		}
	}

	/* statistics style */
	.statistics {
		background: #f5f5f5;

		@media (min-width: ${RESPONSIVE.tablet}) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
		&__item {
			padding: 20px;
			h3 {
				font-weight: 700;
				font-family: ${FONTS.m7};
				font-size: 48px;
				line-height: 56px;
				color: #ff502f;
				text-align: center;
			}

			h5 {
				font-weight: 600;
				font-family: ${FONTS.m6};
				font-size: 16px;
				line-height: 16px;
				color: #ff502f;
				text-align: center;
			}

			p {
				font-weight: 500;
				font-size: 14px;
				line-height: 24px;
				color: #151d33;
				text-align: center;
				padding-top: 20px;
			}
		}

		& + .pb-30 {
			padding-bottom: 30px;
		}
	}

	/* market style */
	.market {
		/* padding: 0 20px; */
		&__title {
			font-size: 20px;
			line-height: 32px;
			font-weight: 600;
			color: #151d33;
			font-family: ${FONTS.m5};
			padding-bottom: 20px;
		}

		&__description {
			font-size: 12px;
			line-height: 22px;
			font-weight: 400;
			color: #151d33;
			font-family: ${FONTS.m4};
			margin-bottom: 20px;

			@media (min-width: ${RESPONSIVE.tablet}) {
				font-size: 14px;
				line-height: 24px;
			}
		}

		&__card {
			max-width: 288px;
			padding-bottom: 40px;

			@media (min-width: ${RESPONSIVE.laptop}) {
				display: none;
			}
			&-title {
				font-size: 48px;
				line-height: 56px;
				font-weight: 700;
				color: #151d33;
				font-family: ${FONTS.m7};
			}
			&-subTitle {
				font-size: 16px;
				line-height: 16px;
				font-weight: 600;
				color: #151d33;
				font-family: ${FONTS.m6};
			}
			&-description {
				font-size: 10px;
				line-height: 20px;
				font-weight: 400;
				color: #151d33;
				font-family: ${FONTS.m4};
				margin-top: 20px;

				@media (min-width: ${RESPONSIVE.tablet}) {
					font-size: 14px;
					line-height: 24px;
				}
			}
		}

		&__card-container {
			display: flex;
			flex-direction: column;

			@media (min-width: ${RESPONSIVE.tablet}) {
				flex-direction: column-reverse;
			}
		}
	}

	/* transaction style */
	.transaction {
		/* background: #f5f5f5; */
		padding-top: 50px;

		li {
			margin-bottom: 20px;
		}

		ul {
			padding-bottom: 10px;
			@media (min-width: ${RESPONSIVE.tablet}) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: 20px;
			}

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				grid-template-columns: repeat(4, 1fr);
				grid-column-gap: 40px;
			}
		}

		&__title {
			font-weight: 600;
			font-family: ${FONTS.m5};
			font-size: 20px;
			line-height: 32px;
		}

		&__description {
			font-weight: 400;
			font-family: ${FONTS.m4};
			font-size: 12px;
			line-height: 22px;
			padding-top: 10px;
		}

		&__liTitle {
			font-size: 14px;
			line-height: 24px;
			font-weight: 600;
			font-family: ${FONTS.m6};
			color: #151d33;
		}

		&__liDescription {
			font-weight: 400;
			font-family: ${FONTS.m4};
			font-size: 12px;
			line-height: 22px;
			@media (min-width: ${RESPONSIVE.laptop}) {
				padding-top: 10px;
			}
		}
	}

	/* developer style */
	.developer {
		ul {
			@media (min-width: ${RESPONSIVE.tablet}) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: 20px;
			}

			@media (min-width: ${RESPONSIVE.laptop}) {
				width: 85%;
			}

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				grid-template-columns: repeat(3, 1fr);
			}
		}
		li {
			margin: 12px 0;

			@media (min-width: ${RESPONSIVE.tablet}) {
				margin: 15px 0;
			}
		}

		&__title {
			font-size: 14px;
			line-height: 24px;
			font-weight: 600;
			font-family: ${FONTS.m6};
			padding: 20px 0;

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				font-size: 16px;
				line-height: 32px;
			}
		}

		&__description {
			font-size: 12px;
			line-height: 22px;
			font-weight: 400;
			font-family: ${FONTS.m4};
			padding-bottom: 30px;
			opacity: 0.9;

			@media (min-width: ${RESPONSIVE.tablet}) {
				max-width: calc(768px * 0.8);
				font-size: 14px;
			}
		}

		&__subTitle {
			font-size: 12px;
			line-height: 22px;
			font-weight: 400;
			font-family: ${FONTS.m4};
			opacity: 0.8;
		}

		&__icon {
			color: #ff502f;
			font-size: 20px;
		}
	}

	/* question style */
	.question {
		background: #ff502f;
		padding: 20px;

		@media (min-width: ${RESPONSIVE.tablet}) {
			padding: 35px 65px;
		}

		@media (min-width: ${RESPONSIVE.largeDevice}) {
			background: #f5f5f5;
		}
		&__title {
			font-size: 14px;
			line-height: 24px;
			font-weight: 600;
			font-family: ${FONTS.m6};
			color: #ffffff;
			padding-top: 15px;
			padding-bottom: 10px;

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				color: #151d33;
				font-size: 16px;
			}
		}

		&__description {
			font-size: 14px;
			line-height: 24px;
			font-weight: 400;
			font-family: ${FONTS.m4};
			color: #ffffff;

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				color: #151d33;
			}
		}

		&__btn {
			border: 2px solid #ffffff;
			width: 100%;
			font-size: 10px;
			font-weight: 700;
			font-family: ${FONTS.m7};
			line-height: 20px;
			padding: 14px 24px;
			border-radius: 7px;
			background-color: transparent;
			color: #ffffff;
			cursor: pointer;
			transition: all 0.4s;
			margin-top: 30px;

			@media (min-width: ${RESPONSIVE.largeDevice}) {
				background: #e6482a;
				width: auto;
				border: 2px solid #e6482a;
			}

			&:hover {
				background: #e6482a;
			}

			&:focus {
				box-shadow: rgba(255, 255, 255, 0.2) 0px 0.2rem 0.2rem 0.2rem,
					rgba(255, 255, 255, 0.2) 0px -0.2rem 0.2rem 0.2rem;
				font-size: 10.5px;

				@media (min-width: ${RESPONSIVE.largeDevice}) {
					font-size: 10px;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 0.2rem 0.2rem 0.2rem,
						rgba(0, 0, 0, 0.1) 0px -0.2rem 0.2rem 0.2rem;
					font-size: 10px;
				}
			}
		}
	}

	/* swiper */
	.iSwiper {
		padding: 30px 0;
		&__item {
			background-color: #e6482a;
			margin: auto 20px;
			max-height: 250px;
			display: flex;
		}
	}
`;
