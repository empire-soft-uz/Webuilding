import { Face } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { GreenDownIcon } from "../../assets/icons";
import Chart from "../Chart/chart";
import Item from "../Item/item";
import Text from "../Text/text";
import styles from "./invest.module.css";

const Invest = () => {
  const [value, setValue] = React.useState("all");

  return (
    <Container className={styles.container}>
      <div className={`${styles.topBox} topBox`}>
        <div className={styles.text}>
          <Text
            textType={"middle"}
            textSize={"sixteen"}
            textColor={"black"}
            cursor={"Cursor"}
            text="ModalsProviderTypeitsion jozibadorlik"
          />
        </div>
        <div className="filterBtnBox">
          <div className="btnsBox">
            <button className="filterBtn firstBtn">Barcha kvartiralar</button>
            <button className="filterBtn">1 xonali</button>
            <button className="filterBtn">2 xonali</button>
            <button className="filterBtn">3 xonali</button>
            <button className="filterBtn endBtn">4 xonali</button>
          </div>
          <div className="selectBox">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: "#515050",
                fontSize: "14px",
                "& fieldset": {
                  border: "none",
                },
                ".MuiSvgIcon-root ": {
                  fill: "#515050 !important",
                },
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="select"
            >
              <MenuItem value={"all"}>Barcha kvartiralar</MenuItem>
              <MenuItem value={"one"}>1 xonali</MenuItem>
              <MenuItem value={"two"}>2 xonali</MenuItem>
              <MenuItem value={"three"}>3 xonali</MenuItem>
              <MenuItem value={"four"}>4 xonali</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className={`content`}>
        <div className={`${styles.infoBox} infoBox`}>
          <div className={styles.info}>
            <Item
              icon={<Face />}
              title="Shoshilishni maslahat beramiz"
              text="O'rtacha narx 2% ga tushdi"
              greyText
            />
          </div>
          <div className={`${styles.AllPrices} AllPrices`}>
            <div className={styles.item}>
              <Text
                textType={"middle"}
                textSize={"twelve"}
                textColor={"grey"}
                cursor={"Cursor"}
                text="Kvartira uchun o'rtacha narx"
              />
              <div className={styles.pricesBox}>
                <p className={styles.price}>6.9 mln $</p>
                <p className={styles.fell}>
                  <span className={styles.downIcon}>
                    <GreenDownIcon />
                  </span>
                  134 940 $
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <Text
                textType={"middle"}
                textSize={"twelve"}
                textColor={"grey"}
                cursor={"Cursor"}
                text="Kvadrat metr uchun o'rtacha narx. metr"
              />
              <div className={styles.pricesBox}>
                <p className={styles.price}>6.9 mln $</p>
                <p className={styles.fell}>
                  <span className={styles.downIcon}>
                    <GreenDownIcon />
                  </span>
                  134 940 $
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <Text
                textType={"middle"}
                textSize={"twelve"}
                textColor={"grey"}
                cursor={"Cursor"}
                text="Kvadrat metr uchun o'rtacha narx. metr"
              />
              <div className={styles.pricesBox}>
                <p className={styles.price}>6.9 mln $</p>
                <p className={styles.count}>1884 tasi</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.chartBox} chartBox`}>
          <Chart />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`

	position: relative;
	padding-top: 30px;
	padding-bottom: 30px;

	.content {
		width: 100%;
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 15px;

		.infoBox {
			margin-top: 0;

			.AllPrices {
				display: flex;
				flex-direction: column;
				gap: 20px;
			}
		}

		.chartBox {
			/* max-width: 60vw; */
			/* flex: 1; */
		}
	}

	.topBox {
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
	}

	.filterBtnBox {
		display: flex;

		.filterBtn {
			padding: 10px 20px;
			border: 1px solid #e5e5e5;
			border-left: none;
			background-color: #fff;
			color: #000;
			font-size: 12px;
			font-weight: 500;

			&:hover {
				background-color: '#fff';
				border: 1px solid #8a3ffc;
			}
		}

		.firstBtn {
			border-left: 1px solid #e5e5e5;
			border-radius: 7px 0 0 7px;
		}

		.endBtn {
			border-radius: 0 7px 7px 0;
		}

		.filterBtn.active {
			background-color: #8a3ffc;
			color: #fff;
			border: 1px solid #8a3ffc;
		}

		.selectBox {
			display: none;
		}
	}

	@media (max-width: 1300px) {
		.topBox {
			margin-bottom: 0;
		}

		.content {
			display: flex !important;
			flex-direction: column !important;

			.infoBox {
				width: 100%;
				height: auto !important;
				margin-bottom: 20px;
				box-shadow: none !important;
				flex-wrap: wrap !important;

				.AllPrices {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					flex-direction: row !important;
					gap: 20px;
				}
			}

			.chartBox {
				overflow: hidden;
				max-width: none;
			}
		}
	}

	@media (max-width: 992px) {
		.filterBtnBox {
			.filterBtn {
				padding: 10px 15px;
			}
		}
	}

	@media (max-width: 768px) {
		.topBox {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 10px;
		}
	}

	@media (max-width: 576px) {
		.topBox {
			flex-direction: column;
			justify-content: start;
			align-items: start;
			gap: 10px;
			margin-bottom: 0;

			.filterBtnBox {
				flex-direction: column;
				.btnsBox {
					display: none;
				}

				.selectBox {
					display: flex;
					#demo-simple-select {
						width: 115px;
						padding: 0 !important;
						padding-right: 32px !important;
					}
				}
			}
		}

		.content {
			.infoBox {
				div {
					padding-left: 0;
				}
			}
		}
	}
>>>>>>> a1cbc14a677dcf467d77c085fdc417ced20f6e78
`;
