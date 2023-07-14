import styled from 'styled-components';
import { FONTS, RESPONSIVE } from '../../../../constants/constants';
import { COLORS } from '../../../../constants/color';

export const BlogContainer = styled.div`
	.blog {
		@media (min-width: ${RESPONSIVE.tablet}) {
			padding: 0 1rem;
		}

		@media (min-width: ${RESPONSIVE.tablet}) {
			width: 85%;
		}

		&__link {
			text-decoration: none;
			color: ${COLORS.black};
			&:hover {
				text-decoration: underline;
			}
		}

		&__title {
			font-size: 1.5rem;
			letter-spacing: 0.5px;
			font-weight: 600;
			font-family: ${FONTS.m6};
			line-height: 1.2;
			text-transform: uppercase;
			padding-bottom: 1.5rem;
			border-bottom: 1px solid #dddee6;

			@media (min-width: ${RESPONSIVE.tablet}) {
				padding-bottom: 1rem;
				margin-top: 2rem;
			}
		}

		&__item {
			max-width: none;
			margin-left: -0.9375rem;
			margin-right: -0.9375rem;
			border-bottom: 1px solid #dddee6;
			padding: 2rem 0;

			@media (min-width: ${RESPONSIVE.phone}) {
				display: flex;
				padding-bottom: 3rem;
			}

			&-img {
				border: 1px solid #f5f5fa;
				width: 100%;
				border-radius: 4px;

				@media (min-width: ${RESPONSIVE.phone}) {
					width: 161px;
					margin-right: 1rem;
					margin-top: 0.5rem;
				}

				@media (min-width: ${RESPONSIVE.tablet}) {
					width: 220px;
				}

				@media (min-width: ${RESPONSIVE.tablet}) {
					width: 300px;
				}
			}

			&-title {
				font-weight: 500;
				font-family: ${FONTS.m5};
				font-size: 1.375rem;
				line-height: 1.3;
				opacity: 0.8;
				padding: 0.25rem 0;
			}

			&-description {
				font-size: 1rem;
				line-height: 1.5;
				color: #323239;
				font-weight: 300;
				font-family: ${FONTS.m3};
				margin: 0 0 0.5rem;
				padding: 0.2rem 0;
			}

			&-footer {
				display: flex;
				align-items: center;
				&__owner,
				&__date {
					color: #6e707c;
					font-size: 0.75rem;
					letter-spacing: 0.02rem;
					word-wrap: break-word;
					font-weight: 400;
					font-family: ${FONTS.m4};
				}

				&__dot {
					background: #6e707c;
					width: 0.2rem;
					aspect-ratio: 1;
					border-radius: 0.2rem;
					margin: 3px 5px 0;
					/* margin-top: 5px; */
				}
			}
		}
	}
`;
