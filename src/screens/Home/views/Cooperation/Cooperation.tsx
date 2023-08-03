import React from 'react'
import Dashboard from '../../../../components/Dashboard/dashboard'
import FooterCard from '../../../../components/FooterCard/FooterCard'
import Text from '../../../../components/Text/text'
import styles from "./Cooperation.module.css"

const Cooperation = () => {
    return (
        <>
            <Dashboard onScroll />
      <div className={styles.container}>
          <div className={styles.textBox}>
              <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Сотрудничество: Партнерство для успешного будущего" />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Дорогие партнеры и застройщики! Мы рады приветствовать вас на странице 'Сотрудничество' нашего сайта. Наша компания, занимающаяся продажей новостроек от всех застройщиков в городе, стремится к взаимовыгодному партнерству, которое поможет нам достичь общих целей и создать успешное будущее для наших клиентов и бизнеса." />
              <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="О нашей компании" />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы являемся лидерами на рынке недвижимости и имеем богатый опыт работы с различными застройщиками. Наша команда состоит из опытных профессионалов, которые уделяют большое внимание качеству обслуживания и удовлетворению потребностей наших клиентов." />
              <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Почему сотрудничать с нами?" />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="  Широкая аудитория клиентов: Мы имеем обширную базу клиентов, которые активно интересуются покупкой новостроек. Работая с нами, вы получаете доступ к множеству потенциальных покупателей." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Профессиональная поддержка: Наша команда экспертов всегда готова предоставить вам профессиональную поддержку и консультации. Мы стремимся обеспечить наилучший сервис для наших партнеров." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Прозрачность и честность: Мы придерживаемся высоких стандартов прозрачности и честности во всех наших деловых отношениях. Мы ценим доверие наших партнеров и гарантируем честное и открытое сотрудничество." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text=" Инновации и современные технологии: Мы всегда стремимся быть на переднем крае технологических инноваций и использовать современные методы продвижения и продажи недвижимости." />
              <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Типы сотрудничества" />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Предоставление объектов недвижимости: Если вы являетесь застройщиком и предлагаете качественные новостройки, мы будем рады рассмотреть возможность предоставления ваших объектов нашим клиентам." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Партнерские программы: Мы готовы рассмотреть различные партнерские программы и предложения с целью взаимовыгодного сотрудничества." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text=" Рекламные и маркетинговые сотрудничества: Мы готовы рассмотреть предложения о совместных рекламных акциях, маркетинговых и PR-мероприятиях." />
              <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Присоединяйтесь к нам" />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы убеждены, что сотрудничество — это ключ к успеху. Присоединяйтесь к нам и станьте частью нашей успешной команды, которая помогает людям обрести свой идеальный дом." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Если вы заинтересованы в сотрудничестве или имеете иные предложения, пожалуйста, свяжитесь с нами по адресу [адрес электронной почты] или заполните форму обратной связи на нашем сайте." />
              <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы с нетерпением ждем возможности сотрудничества с вами !" />
          </div>
          <FooterCard />
      </div>
      </>
  )
}

export default Cooperation
