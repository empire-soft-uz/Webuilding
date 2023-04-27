import { Drawer } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Text from '../Text/text'
import styles from "./drawer.module.css"

type Props = {
    open: boolean;
    openDrawer: () => void;
    children?: React.ReactNode;
    title?: string;
}

function DrawerComponent(
    {
        open,
        openDrawer,
        children,
        title
    }: Props
) {

    return (
        <Drawer anchor={'right'} open={open} onClose={openDrawer}>
            <div className={styles.drawer}>
                <div className={styles.drawerHeader}>
                    <div className={styles.btnContainer}>
                        <button className={styles.closeBtn} onClick={openDrawer}>
                            <CloseIcon />
                        </button>
                    </div>
                    <Text textType='semiBold' textSize='sixteen' textColor='black' text={title} />
                </div>
                <div className={styles.drawerBody}>
                    {children}
                </div>
            </div>
        </Drawer>
    )
}

export default DrawerComponent