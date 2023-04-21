import React, { CSSProperties } from 'react'
import Collapsible from 'react-collapsible'
import { ArrowDownIcon, DownloaderIcon, FileIcon } from '../../assets/icons'
import Item from '../Item/item'
import styles from "./documentCollapse.module.css"
interface Props {
    style?: CSSProperties;
}

const mainTrigger = (
    <div className={`${styles.triggerBox} ${styles.triggerBoxTwo}`}>
        <FileIcon />
        <p>
            3 deklaratsiyalar
        </p>
        <ArrowDownIcon />
    </div>
)
const mainTriggerTwo = (
    <div className={styles.triggerBox}>
        <FileIcon />
        <p>
            3 deklaratsiyalar
        </p>
        <ArrowDownIcon />
    </div>
)

const DocumentCollapse: React.FC<Props> = ({
    style
}) => {
    return (
        <div className={styles.container} style={{ ...style }}>
            <Collapsible className={styles.collapseBox} trigger={mainTrigger}>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <span className={styles.line}></span>
            </Collapsible>
            <Collapsible trigger={mainTriggerTwo}>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <div className={styles.collapse}>
                    <Item
                        icon={<DownloaderIcon />}
                        title='Loyiha deklaratsiyasi (5.1 va 5.2-holatlar) '
                        greyText
                        text='27.07.2021 (5.1 va 5.2-binolar)' />
                </div>
                <span className={styles.line}></span>
            </Collapsible>
        </div>
    )
}

export default DocumentCollapse
