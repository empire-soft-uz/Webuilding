import React from 'react'
import Dashboard from '../../../../components/Dashboard/dashboard'
import FooterCard from '../../../../components/FooterCard/FooterCard'
import Text from '../../../../components/Text/text'
import styles from "./Advertising.module.css"

const Advertising = () => {
  return (
    <>
        <Dashboard onScroll />
        <div className={styles.container}>
            <div className={styles.textBox}>
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Почему размещение рекламы у нас имеет преимущества:" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Целевая аудитория: Наш сайт привлекает активных и заинтересованных пользователей, ищущих недвижимость в Ташкенте. Ваша реклама будет достигать именно тех, кто ищет жилье от застройщиков." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Онлайн платформы: Мы активно используем различные онлайн платформы, такие как Telegramm, You-Tube, Instagram и другие, чтобы расширить охват вашей рекламы и привлечь больше потенциальных клиентов." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Гибкие форматы рекламы: Мы предоставляем различные форматы рекламы, включая баннеры, контекстную рекламу, видеорекламу и специальные партнерские программы, чтобы удовлетворить ваши потребности." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Результаты: Мы стремимся обеспечить нашим рекламодателям максимальную отдачу от размещения рекламы на нашем сайте. Мы предоставляем регулярные отчеты о производительности вашей рекламы и постоянно оптимизируем кампании для достижения наилучших результатов." />
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Как начать размещать рекламу у нас:" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Свяжитесь с нами: Если вы заинтересованы в размещении рекламы на нашем сайте, свяжитесь с нами по указанным контактным данным. Наши менеджеры с удовольствием предоставят вам всю необходимую информацию о форматах, стоимости и доступных опциях." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Подбор рекламных решений: Мы сотрудничаем с вами для выбора оптимальных рекламных решений, которые будут соответствовать вашим целям и бюджету." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Результаты и оптимизация: Мы предоставляем отчеты о производительности вашей рекламы, чтобы вы всегда были в курсе результатов. Кроме того, мы готовы провести оптимизацию рекламных кампаний, чтобы обеспечить максимальную эффективность." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы ценим каждого нашего рекламодателя и готовы предоставить вам высококачественные рекламные решения для успешного продвижения вашей недвижимости. Свяжитесь с нами уже сегодня, и давайте сделаем вашу рекламу наиболее успешной и привлекательной для нашей аудитории!" />
        </div>
         <FooterCard />
        </div>
    </>
  )
}

export default Advertising
