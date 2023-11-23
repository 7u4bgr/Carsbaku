import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import Sec1 from '../../assets/images/sec1.png'
import Sec2 from '../../assets/images/sec2.png'
import Sec3 from '../../assets/images/sec3.png'
const Page4 = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.flexs}>
          <div className={styles.texts}>
            <h2>Почему Мы?</h2>
          </div>
          <div className={styles.borders}>
                <div className={styles.sec1}>
                        <img src={Sec1} alt="" />
                        <h2>Надежность</h2>
                        <p>Гарантия оплаты, все сделки проходят проверку</p>
                </div>
                <div className={styles.sec1}>
                        <img src={Sec2} alt="" />
                        <h2>Без посредников</h2>
                        <p>Совершайте все сделки напрямую с продавцом</p>
                </div>
                <div className={styles.sec1}>
                        <img src={Sec3} alt="" />
                        <h2>Договор</h2>
                        <p>Все сделки заключаются юридически с договором</p>
                </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page4;
