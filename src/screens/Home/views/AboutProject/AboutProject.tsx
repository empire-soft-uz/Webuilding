import React from 'react'
import Dashboard from '../../../../components/Dashboard/dashboard'
import FooterCard from '../../../../components/FooterCard/FooterCard'
import Text from '../../../../components/Text/text'
import styles from "./AboutProject.module.css"

const AboutProject = () => {
  return (
    <>
    <Dashboard onScroll />
    <div className={styles.container}>
    <div className={styles.textBox}>
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Добро пожаловать на наш сайт: Ваш идеальный партнер по новостройкам" />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы рады приветствовать вас на нашем сайте, вашем надежном источнике информации о новостройках. Наш проект предназначен для всех, кто ищет свой уголок счастья в новом жилище. Мы с гордостью представляем широкий выбор качественных жилых комплексов от надежных застройщиков, чтобы удовлетворить все ваши потребности и желания." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Наша миссия" />         
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Наша команда работает с одной общей миссией - помочь вам сделать мудрый выбор при покупке новостройки. Мы понимаем, что покупка жилья - это одно из самых важных решений в жизни. Поэтому мы стремимся предоставить вам самую полную и объективную информацию о доступных жилых комплексах, чтобы вы могли принять информированное решение." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Почему выбирают нас?" />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Широкий выбор новостроек: Мы предлагаем разнообразные новостройки от лучших застройщиков, позволяя вам выбрать именно то жилье, которое отвечает вашим потребностям, предпочтениям и бюджету." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Качество и надежность: Мы тщательно отбираем застройщиков, сотрудничая только с теми компаниями, которые заслуживают доверия и имеют прочную репутацию на рынке недвижимости." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text=" Проверенная информация: Вся информация о новостройках на нашем сайте тщательно проверяется и обновляется, чтобы вы получили только актуальную и достоверную информацию." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text=" Персональное сопровождение: Наша команда экспертов готова помочь вам на каждом этапе выбора и покупки новостройки. Мы ценим каждого клиента и гарантируем индивидуальный подход к вашим потребностям." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Простой и удобный поиск: Наш сайт оборудован удобной системой поиска, которая позволяет быстро находить новостройки по интересующим вас критериям, таким как цена, местоположение, площадь и другие." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Мы всегда рядом" />  
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы понимаем, что процесс покупки новостройки может быть сложным и непривычным, особенно для тех, кто делает это впервые. Поэтому мы всегда готовы ответить на ваши вопросы, предоставить консультации и помочь вам сделать правильный выбор." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы ценим доверие, которое вы оказываете нам, и обязуемся продолжать радовать вас качественными услугами и актуальной информацией о новостройках." />              
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Завершая этот этот диалог хотим сказать вам  Спасибо, что выбрали нас в качестве вашего партнера по поиску нового жилья. Мы с гордостью представляем только лучшие новостройки и всегда стремимся сделать процесс выбора жилья максимально приятным и комфортным для вас." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы надеемся, что наш сайт поможет вам найти свой идеальный дом, где вы сможете создать счастливые моменты и воплотить свои мечты. Добро пожаловать в мир новостроек с нашим сайтом!" />
    </div>
    <FooterCard />
    </div>
    </>
  )
}

export default AboutProject