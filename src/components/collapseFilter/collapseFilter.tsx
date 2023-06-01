import DropdownMenu from '../DropdownMenu/dropdownMenu'
import styles from "./collapseFilter.module.css"

const CollapseFilter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <DropdownMenu option='Tugash muddati' />
                <DropdownMenu option='Tugatish' />
                <DropdownMenu option='Qavat' />
            </div>
            <div className={styles.box}>
                <DropdownMenu option='Narx bo’yicha' />
                <DropdownMenu option="Hudud bo'yicha" />
            </div>
        </div>
    )
}

export default CollapseFilter
