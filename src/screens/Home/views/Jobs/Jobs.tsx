import React from 'react'
import Dashboard from '../../../../components/Dashboard/dashboard'
import FooterCard from '../../../../components/FooterCard/FooterCard'
import Text from '../../../../components/Text/text'
import styles from "./Jobs.module.css"

const Jobs = () => {
  return (
    <>
      <Dashboard onScroll />
      <div className={styles.container}>
          <div className={styles.textBox}>
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'}  text="Присоединяйтесь к нашей команде: Вакансии для профессионалов в сфере недвижимости" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы рады приветствовать вас на странице 'Вакансии' нашего сайта! Наша компания, занимающаяся продажей новостроек от всех застройщиков в городе, стремится создать команду опытных профессионалов, готовых делиться нашими ценностями и помогать клиентам обрести свой идеальный дом." />
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="О нашей компании" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы являемся лидерами на рынке недвижимости и предоставляем широкий выбор жилых комплексов от лучших застройщиков. Мы гордимся своей репутацией надежного партнера, предлагающего только качественные объекты и обеспечивающего высокий уровень сервиса для наших клиентов." />
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Наши ценности" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Профессионализм: Мы ценим опыт и знания наших сотрудников и стремимся создать команду, которая всегда находится в передовых рядах в сфере недвижимости." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Клиентоориентированность: Наша главная цель - удовлетворение потребностей наших клиентов. Мы стараемся предоставить им наилучшие решения и помощь на каждом этапе покупки жилья." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Инновации: Мы всегда стремимся быть на шаг впереди, используя современные технологии и инновационные методы работы." />
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Вакансии для вас" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы ищем талантливых и амбициозных профессионалов, которые готовы присоединиться к нашей команде и помочь нам добиваться новых высот. Мы предлагаем разнообразные вакансии в сфере недвижимости, включая:" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Менеджеры по продажам: Если у вас есть опыт работы в продажах, вы коммуникабельны, умеете находить общий язык с клиентами и целеустремлены, то эта вакансия для вас." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Эксперты по недвижимости: Мы ищем специалистов, которые обладают глубокими знаниями в сфере недвижимости и могут предоставить клиентам профессиональные консультации." />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Маркетинговые специалисты: Мы нуждаемся в креативных и талантливых маркетологах, которые помогут нам продвигать нашу компанию и привлекать новых клиентов." />
            <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Присоединяйтесь к нам" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы готовы предоставить вам возможность развиваться и расти вместе с нами. Если вы готовы принять вызов и стать частью нашей команды, отправьте свое резюме и сопроводительное письмо на адрес [адрес электронной почты]" />
            <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="Мы верим, что собирая лучших профессионалов в сфере недвижимости, мы сможем достигать новых вершин и делать жизнь наших клиентов ярче и счастливее. Присоединяйтесь к нам, и вместе мы создадим успешное будущее!" />
        </div>
        <FooterCard />
    </div>
    </>
  )
}

export default Jobs
