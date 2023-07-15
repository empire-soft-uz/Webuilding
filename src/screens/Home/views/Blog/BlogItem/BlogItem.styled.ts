import styled from 'styled-components';
import { FONTS, RESPONSIVE } from '../../../../../constants/constants';
import { COLORS } from '../../../../../constants/color';

export const BlogItemContainer = styled.div`
	@media (min-width: ${RESPONSIVE.largeDevice}) {
		width: 75%;
	}

	padding-top: 3rem;
	.topTitle {
		font-size: 1.5rem;
		line-height: 1.1;
		font-weight: 400;
		font-family: ${FONTS.m4};
		color: ${COLORS.black};
		padding-bottom: 1rem;
		letter-spacing: 0.7px;

		@media (min-width: ${RESPONSIVE.tablet}) {
			font-size: 2rem;
		}
	}

	.topDescription {
		font-size: 1.1rem;
		line-height: 1.3;
		font-weight: 400;
		font-family: ${FONTS.m4};
		padding: 0.5rem 0;
		letter-spacing: 0.5px;
	}

	.own {
		font-size: 0.875rem;
		color: #6e707c;
		font-weight: 300;
		font-family: ${FONTS.m3};
		padding: 1rem 0;
		border-bottom: 1px solid #dddee6;
	}

	.userContainer {
		padding-top: 2rem;

		@media (min-width: ${RESPONSIVE.tablet}) {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.user {
			display: flex;
			align-items: center;
			.userImg {
				width: 45px;
				height: 45px;
				object-fit: cover;
				border-radius: 45px;

				@media (min-width: ${RESPONSIVE.tablet}) {
					width: 50px;
					height: 50px;
				}
			}

			.userInfo {
				padding-left: 0.6rem;
			}
			.userInfoTitle {
				color: #0a0a0a;
				cursor: pointer;
				font-size: 0.8rem;
				border-bottom: 1px solid #0a0a0a;
				display: inline-block;

				@media (min-width: ${RESPONSIVE.tablet}) {
					font-size: 1rem;
				}
			}

			.userInfoAuthor {
				color: #6e707c;
				font-size: 0.825rem;
				font-weight: 300;
				font-family: ${FONTS.m3};
				padding-top: 0.2rem;
				@media (min-width: ${RESPONSIVE.tablet}) {
					font-size: 1rem;
				}
			}
		}

		.socailContainer {
			.icon {
				color: #0a0a0a;
				font-size: 1.2rem;
			}
		}
	}

	.mainContainer {
		padding-top: 2.5rem;
		.mainImgContainer {
			.mainImg {
				width: 100%;
				border-radius: 0.3rem;

				@media (min-width: ${RESPONSIVE.laptop}) {
					width: 650px;
				}
			}

			.mainImgDescription {
				font-size: 0.8rem;
				font-weight: 400;
				font-family: ${FONTS.m4};
				padding-top: 0.4rem;

				i {
					font-weight: 200;
					color: #6e707c;
					font-family: ${FONTS.m2};
				}
			}
		}

		.mainDescriptionContainer {
			.mainDescriptionTitle {
				font-size: 1.3rem;
				font-weight: 500;
				font-family: ${FONTS.m5};
				padding-top: 2rem;
				padding-bottom: 1rem;
			}

			.mainDescriptionText {
				font-weight: 300;
				font-family: ${FONTS.m3};
				font-size: 1rem;
				color: #0a0a0a;
				letter-spacing: 0.5px;
				line-height: 1.7;
				padding-bottom: 0.5rem;
			}
		}
	}
`;
