import React from 'react'
import Dashboard from '../../../../components/Dashboard/dashboard'
import FooterCard from '../../../../components/FooterCard/FooterCard'
import Text from '../../../../components/Text/text'
import styles from "./Informations.module.css"

const Informations = () => {
  return (
    <>
    <Dashboard onScroll />
    <div className={styles.container}>
    <div className={styles.textBox}>
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Правовая информация" />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Добро пожаловать на наш сайт, специализирующийся на продаже квартир от застройщиков по всему Ташкенту. Ниже представлена правовая информация, которая поможет вам лучше понять условия использования нашего сайта и защиту ваших прав в процессе пользования предоставляемыми нами услугами." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Пользовательское соглашение:" />         
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Вся информация на данном сайте представлена в соответствии с Пользовательским соглашением. Пожалуйста, перед использованием сайта ознакомьтесь с условиями соглашения, так как ваше взаимодействие с сайтом означает ваше безоговорочное согласие с представленными в нем условиями." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Согласие на обработку персональных данных:" />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы осознаем важность защиты персональных данных пользователей нашего сайта. Ваше согласие на обработку персональных данных необходимо для предоставления вам качественных услуг и поддержания связи. Пожалуйста, ознакомьтесь с текстом Согласия на обработку персональных данных, чтобы узнать, как мы обрабатываем и защищаем вашу информацию." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Информация о компании:" />  
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Наша компания действует в соответствии с законодательством Республики Узбекистан и зарегистрирована согласно установленным правилам. В разделе 'О нас' вы можете найти полную информацию о компании, ее регистрационных данных и контактной информации." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Конфиденциальность:" />      
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы придаем большое значение защите конфиденциальности наших клиентов. Все предоставленные нам персональные данные обрабатываются строго в соответствии с применимым законодательством. Мы не передаем вашу информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для предоставления вам требуемых услуг." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Авторские права и ограничения:" />         
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Весь контент, размещенный на нашем сайте, защищен авторскими правами. Копирование, распространение или использование информации без разрешения правообладателя запрещено." />
      <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Отказ от ответственности:" />               
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы прилагаем все усилия для обеспечения точности и актуальности представленной на сайте информации. Однако мы не несем ответственности за возможные ошибки или неточности, а также за действия третьих лиц, которые могут быть связаны с использованием данного сайта." />
      <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы надеемся, что представленная правовая информация поможет вам быть уверенным в безопасности и удобстве использования нашего сайта. Если у вас возникли вопросы или замечания по поводу нашей правовой информации, пожалуйста, свяжитесь с нами по указанным контактным данным. Благодарим вас за интерес к нашим услугам, и мы всегда готовы помочь вам приобрести идеальную квартиру в Ташкенте от застройщиков." />
    </div>
    <FooterCard />
    </div>
    </>
  )
}

export default Informations
