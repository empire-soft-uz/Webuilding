import React from 'react'
import { LineIcon, LocationIcon, LocationTwoIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Comment from '../Comment/comment'
import RowItem from '../Rowitem/rowItem'
import SimpleBtn from '../SimpleBtn/simpleBtn'
import Text from '../Text/text'
import styles from "./commentBox.module.css"
import DrawerComponent from '../Drawer/DrawerComponent'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../constants/requireAssets'
import { observer } from "mobx-react"

const CommentBox = () => {
    const [open, setOpen] = React.useState(false);
    const [renderDrawer, setRenderDrawer] = React.useState<any>(null);
    const { oneProduct } = useRootStore().oneProductStore
    const handleToggel = () => {
        setOpen(prev => !prev);
    }

    const handleOpenMoreComment = () => {
        setRenderDrawer(renderMoreComment);
        setOpen(true);
    }

    const handleOpenMoreFooterText = () => {
        setRenderDrawer(renderMoreFooterText);
        setOpen(true);
    }

    const renderMoreComment = (
        <div className={styles.moreComment}>
            <Text
                textType={'middle'}
                textSize={'fourteen'}
                textColor={'black'}
                cursor={'none'}
                text={oneProduct.bestUsefulComment.name}
            />
            <Comment
                more
                comment={oneProduct.bestUsefulComment.coment}
                personIcon={oneProduct.bestUsefulComment.personImage}
                personName={oneProduct.bestUsefulComment.person}
            />
        </div>
    )

    const renderMoreFooterText = (
        <div className={styles.moreFooterText}>
            <Text textType={'middle'} textSize={'fourteen'} textColor={'black'} cursor={'none'} text='Joylashuv, transportga kirish imkoniyati' />
            <div className={styles.info}>
                <Text textType={'middle'} textSize={'fourteen'} textColor={'grey'} cursor={'none'} text="'Sohil parki' turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, 9-uyda qurilgan. ' Sohil parki' turar joy majmuasi joylashuv, transportga kirish imkoniyati" />
            </div>
        </div>
    )

    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'twenty'}
                textColor={'black'}
                cursor={'none'}
                text='JK “Yangi choshtepa” ishlab chiqaruvchidan 56 ta xonadon'
            />
            <div className={styles.locationBox}>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'grey'}
                    cursor={'none'}
                    text='3 kvadratgacha qurilish. 2023 yil'
                />
                <LineIcon />
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'grey'}
                    cursor={'none'}
                    text='Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47'
                />
                <RowItem iconUrl={<LocationTwoIcon />} text='Xaritadan ko’rish' />
            </div>
            <div className={styles.btnBox}>
                <SimpleBtn
                    dotColor={COLORS.purple}
                    dot
                    btnType={'outline'}
                    minut='5 min'
                    text='Qizil Baltiya'
                    textColor={COLORS.black}
                />
            </div>
            <div className={styles.comment}>
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'black'}
                    cursor={'none'}
                    text='Eng foydali sharh'
                />
                <Comment
                    personIcon={oneProduct.bestUsefulComment.personImage}
                    personName={oneProduct.bestUsefulComment.person}
                    comment={oneProduct.bestUsefulComment.coment} showMore={handleOpenMoreComment} />
            </div>
            <div className={styles.transport}>
                <Text textType={'middle'} textSize={'fourteen'} textColor={'black'} cursor={'none'} text='Joylashuv, transportga kirish imkoniyati' />
                <div className={styles.info}>
                    <Text textType={'middle'} textSize={'fourteen'} textColor={'grey'} cursor={'none'} text="'Sohil parki' turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, 9-uyda qurilgan. ' Sohil parki' turar joy majmuasi" />
                </div>
                <button onClick={handleOpenMoreFooterText} style={{ border: 0, outline: 'none', background: 'transparent' }}>
                    <Text textType={'middle'} textSize={'fourteen'} textColor={'purple'} cursor={'Cursor'} text="Ko' proq o'qing" />
                </button>
            </div>
            <DrawerComponent open={open} openDrawer={handleToggel}>
                {renderDrawer}
            </DrawerComponent>
        </div>
    )
}

export default observer(CommentBox)
