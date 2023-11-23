import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import { RightIcon1 } from "../../icons";
import Car3 from "../../assets/images/car3.png";
import Renault1 from "../../assets/images/renault1.png";
import Volvo from "../../assets/images/volvo.png";
import Volvocar from "../../assets/images/volvocar.png";
const Page3 = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.flexs}>
          <div className={styles.texts}>
            <div className={styles.text1}>
              <h2>Коммерческие Авто</h2>
            </div>
            <div className={styles.text2}>
              <h2>Смотреть все</h2>
              <RightIcon1 />
            </div>
          </div>
          <div className={styles.autos}>
            <div className={styles.autoscontrol}>
              <div className={styles.autotexts}>
                <img src={Car3} alt="" />
                <h2>Renault Premium</h2>
                <h3>36000$</h3>
              </div>
              <div className={styles.renault}>
                <img src={Renault1} alt="" />
              </div>
            </div>
            <div className={styles.autoscontrol}>
              <div className={styles.autotexts}>
                <img src={Volvo} alt="" />
                <h2>Volvo FH</h2>
                <h3>24000$</h3>
              </div>
              <div className={styles.renault}>
                <img src={Volvocar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page3;
