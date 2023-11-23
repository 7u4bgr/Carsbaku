import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI'
import {FbIcon, InstaIcon, LogoIcon, TelegramIcon, WhatsappIcon} from '../../icons'
const Page5 = () => {
  return (
    <div className={styles.background}>
        <Wrapper>
            <div className={styles.flexs}>
                <div className={styles.control1}>
                    <div className={styles.logos}>
                    <LogoIcon/>
                    </div>
                    <div className={styles.icons}>
                            <TelegramIcon/>
                            <WhatsappIcon/>
                            <InstaIcon/>
                           
                    </div>

                </div>
                <div className={styles.control2}>
                <h2>О проекте</h2>
                <h2>FAQs</h2>
                <h2>Обратная связь</h2>
                </div>
                <div className={styles.control3}>
                <h2>Партнерам</h2>
                <h3>Пользовательское соглашение</h3>
                <h2>Реклама</h2>
                </div>
                <div className={styles.control4}>
                <h2>Калькулятор</h2>
                <h2>Статистика цен</h2>
                <h3>Проверка авто по VIN</h3>
                </div>
            </div>
            <div className={styles.hr1}>
                <hr />
                <h2>ALL RIGHTS RESERVED. COPYRIGHT 2023</h2>
            </div>
        </Wrapper>
    </div>
  )
}

export default Page5