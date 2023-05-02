import styled from 'styled-components'
import BuildingBody from '../BuildingBody/buildingBody'
import Button from '../Button/button'
import ProductSizesCarusel from '../ProductSizesCarusel/productSizesCarusel'
import Text from '../Text/text'
import styles from "./procedure.module.css"

const Procedure = () => {
    return (
        <Container className={styles.container}>
            <div className={styles.header}>
                <Text
                    className='title'
                    textType={'middle'}
                    textSize={'twenty'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Tartiblar"
                />
                <Button
                    className='btnTitle'
                    textSize={'fourteen'}
                    btnSize={'small'}
                    btnColor={'lightPurple'}
                    textColor={'textPurple'}
                    borderRadius={'ten'}
                    title="56"
                />
            </div>
            <div className={styles.body}>
                <BuildingBody />
                <ProductSizesCarusel />
            </div>
        </Container>
    )
}

export default Procedure;


const Container = styled.div`

    border-radius: 10px;

    @media (max-width: 992px) {
        
    }

    @media (max-width: 768px) {
        .title {
            font-size: 18px;
        }
        
        .btnTitle {
            p {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 576px) {
        .title {
            font-size: 16px;
        }

        .btnTitle {
            P {
                font-size: 12px !important;
            }
        }
    }

`
