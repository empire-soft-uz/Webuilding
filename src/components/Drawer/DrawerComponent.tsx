import { Drawer } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Text from '../Text/text'
import styles from "./drawer.module.css"
import styled from 'styled-components';

type Props = {
    open: boolean;
    openDrawer: () => void;
    children?: React.ReactNode;
    title?: string;
    btn?:React.ReactNode;
}

function DrawerComponent(
    {
        open,
        openDrawer,
        children,
        title,
        btn
    }: Props
) {

    return (
        <Drawer anchor={'right'} open={open} onClose={openDrawer}>
            <DrawerConatiner className={styles.drawer}>
                <div className={styles.drawerHeader}>
                    <div className={styles.btnContainer}>
                        <div className="btnBox">
                          {btn}
                        </div>
                        <button className={styles.closeBtn} onClick={openDrawer}>
                            <CloseIcon />
                        </button>
                    </div>
                    <Text className='title' textType='semiBold' textSize='sixteen' textColor='black' text={title} />
                </div>
                <div className={styles.drawerBody}>
                    {children}
                </div>
            </DrawerConatiner>
        </Drawer>
    )
}

export default DrawerComponent

const DrawerConatiner = styled.div`

    @media (max-width: 768px) {
            width: 80vw !important;
    }

    @media (max-width: 576px) {
            width: 100vw !important;
            padding: 30px 15px;
    }

`

