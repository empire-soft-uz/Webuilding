import styled from 'styled-components';
import { RESPONSIVE } from '../../../../constants/sizes';

export const AboutUsContainer = styled.div`
	padding-top: 20px;
	background: #ffffff;
	min-height: 100%;
	height: 100%;

	* {
		font-family: sans-serif;
		list-style: none;
	}

	.base-padding-h {
		padding: 0 20px;
	}

	/* bg-img style */
	.bg-img {
		position: relative;

		&__img {
			width: 100%;
			max-height: 200px;
			object-fit: cover;

			@media (min-width: 768px) {
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

			@media (min-width: 768px) {
				top: 80%;
			}
		}
	}

	/* transaction style */
	.transaction {
		padding: 0 20px;

		&__title {
			font-size: 20px;
			font-weight: 500;
			line-height: 32px;
			color: #151d33;
			font-family: 'Montserrat5';
			padding: 20px 0;

			@media (min-width: 768px) {
				padding-top: 35px;
			}
		}

		&__description {
			font-size: 12px;
			line-height: 22px;
			font-weight: 500;
			font-family: 'Montserrat4';
			color: #151d33;
			margin-bottom: 40px;
		}

		&__list {
			@media (min-width: 768px) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}

			@media (min-width: 1200px) {
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
				font-family: 'Montserrat4', sans-serif;
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

		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
		&__item {
			padding: 20px;
			h3 {
				font-weight: 700;
				font-family: 'Montserrat7';
				font-size: 48px;
				line-height: 56px;
				color: #ff502f;
				text-align: center;
			}

			h5 {
				font-weight: 600;
				font-family: 'Montserrat6';
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
		padding: 0 20px;
		&__title {
			font-size: 20px;
			line-height: 32px;
			font-weight: 600;
			color: #151d33;
			font-family: 'Montserrat5', sans-serif;
			padding-bottom: 20px;
		}

		&__description {
			font-size: 12px;
			line-height: 22px;
			font-weight: 400;
			color: #151d33;
			font-family: 'Montserrat4', sans-serif;
			margin-bottom: 20px;

			@media (min-width: 768px) {
				font-size: 14px;
				line-height: 24px;
			}
		}

		&__card {
			max-width: 288px;
			padding-bottom: 40px;

			@media (min-width: 1200px) {
				display: none;
			}
			&-title {
				font-size: 48px;
				line-height: 56px;
				font-weight: 700;
				color: #151d33;
				font-family: 'Montserrat7', sans-serif;
			}
			&-subTitle {
				font-size: 16px;
				line-height: 16px;
				font-weight: 600;
				color: #151d33;
				font-family: 'Montserrat6', sans-serif;
			}
			&-description {
				font-size: 10px;
				line-height: 20px;
				font-weight: 400;
				color: #151d33;
				font-family: 'Montserrat4', sans-serif;
				margin-top: 20px;

				@media (min-width: 768px) {
					font-size: 14px;
					line-height: 24px;
				}
			}
		}

		&__card-container {
			display: flex;
			flex-direction: column;

			@media (min-width: 768px) {
				flex-direction: column-reverse;
			}
		}
	}

	/* transaction style */
	.transaction {
		background: #f5f5f5;
	}
`;
