import { Drawer } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Text from '../Text/text'
import styles from "./drawer.module.css"
import { observer } from "mobx-react"

type Props = {
    open: boolean;
    openDrawer: () => void;
    children?: React.ReactNode;
    title?: string;
    btnBottom?: React.ReactNode
}

function DrawerComponent(
    {
        open,
        openDrawer,
        children,
        title,
        btnBottom
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
            {btnBottom}
        </Drawer>
    )
}

export default observer(DrawerComponent)