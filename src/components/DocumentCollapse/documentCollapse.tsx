import React, { CSSProperties } from 'react'
import Collapsible from 'react-collapsible'
import { ArrowDownIcon, DownloaderIcon, FileIcon } from '../../assets/icons'
import useRootStore from '../../Hooks/useRootStore'
import Item from '../Item/item'
import styles from "./documentCollapse.module.css"
import { observer } from 'mobx-react';
interface Props {
    style?: CSSProperties;
}

const data = [
    {
        id: 1,
        title: '3 deklaratsiyalar',
        files: [
            {
                id: 1,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            },
            {
                id: 2,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            },
            {
                id: 3,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            }
        ]
    },
    {
        id: 2,
        title: '3 deklaratsiyalar',
        files: [
            {
                id: 1,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            },
            {
                id: 2,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            },
            {
                id: 3,
                title: 'Loyiha deklaratsiyasi (5.1 va 5.2-holatlar)',
                date: '27.07.2021 (5.1 va 5.2-binolar)'
            }
        ]
    }
]

const DocumentCollapse: React.FC<Props> = ({
    style
}) => {

    const [active, setActive] = React.useState(1)
    const { oneProduct } = useRootStore().oneProductStore
    const mainTrigger = (title: string, id: number) => (
        <div className={`${styles.triggerBox} ${active === id ? styles.triggerBoxTwo : ''}`}>
            <FileIcon />
            <p>
                {title}
            </p>
            <ArrowDownIcon className={active === id ? styles.iconActive : styles.icon} />
        </div>
    )

    return (
        <div className={styles.container} style={{ ...style }}>
            {
                oneProduct.documents.map((item, index) => (
                    <Collapsible key={index} className={styles.collapseBox} trigger={mainTrigger(item.title, item.id)} triggerWhenOpen={mainTrigger(item.title, item.id)} open={active === item.id} onOpening={() => setActive(item.id)} onClosing={() => setActive(0)}>
                        {
                            item.files.map((file, index) => (
                                <div className={styles.collapse} key={index}>
                                    <Item
                                        key={index}
                                        icon={<DownloaderIcon />}
                                        title={file.title}
                                        greyText
                                        text={file.date} />
                                </div>
                            ))
                        }
                        <span className={styles.line}></span>
                    </Collapsible>
                ))
            }
        </div>
    )
}

export default observer(DocumentCollapse)
