import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Zeekr from "../../assets/images/zeekr1.png";
import Wrapper from "../../components/UI";
import { SearchIcon } from "../../icons";
import { getCars } from "../../api/getcars";
const Page1 = () => {
  const [query, setQuery] = useState("records?=100");
  const [data, setData] = useState(null);
  useEffect(() => {
    getCars(query).then((res) => setData(res.data.results));
  }, [query]);
  return (
    <div className={styles.wrapdiv}>
      <Wrapper>
        <div className={styles.background}>
          <div className={styles.flex1}>
            <div className={styles.texts}>
              <h2>
                Площадка №1 в<h1>Кыргызстане</h1>по купле-продаже авто
              </h2>
            </div>
            <div className={styles.images}>
              <img src={Zeekr} alt="" />
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.selections}>
              <div className={styles.marks}>
                <div className={styles.control1}>
                  <h2>Марка </h2>
                  <select className={styles.select1} name="cars1">
                    {data?.map((item) => (
                      <option>{item.make}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.models}>
                <div className={styles.control2}>
                  <h2>Модель</h2>
                  <select className={styles.select2} name="cars2">
                    {data?.map((item) => (
                      <option>{item.model}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.dateinput}>
                <select className={styles.selects1} name="" id="">

                {data?.map((item) => (
                 
                <option value="">{item.year}</option>
                ))}
                </select>
              </div>

              <div className={styles.inputs}>
                <input placeholder="To" type="number" />
                <input placeholder="From" type="number" />
              </div>
            </div>
            <div className={styles.searchbutton}>
              <button>
                <SearchIcon />
                Найти
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page1;
