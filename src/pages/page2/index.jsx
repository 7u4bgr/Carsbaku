import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import { RightIcon } from "../../icons";
import { getCars } from "../../api/getcars";
import Cars1 from '../../assets/images/zeekr1.png'
const Page2 = () => {
  const [query,setQuery]=useState("records?=100")
  const [data,setData]=useState(null)
  useEffect(()=>{
    getCars(query).then((res)=>setData(res.data.results))
  },[query])
  return (
    <div className={styles.wrapdiv}>

        <Wrapper>
      <div className={styles.background}>
        <div className={styles.texts}>
          <div className={styles.text1}>
            <h2>Легковые Авто</h2>
          </div>
          <div className={styles.text2}>
                <h2>Смотреть все</h2>
                <RightIcon/>
          </div>
        </div>
        <div className={styles.maps}>
          {data?.map((item)=>(

          <div className={styles.flexscontrol}>

          <div className={styles.flexs}>
          <img src={Cars1} alt="" />

          </div>
          <div className={styles.control1}>
              <div className={styles.texts1}>
                    <h2>{item.make}</h2>
              </div>
              <div className={styles.texts2}>
                    <h2>{item.model}</h2>
                    <p>25000$</p>
              </div>
          </div>
          </div>
          ))}
       
        
        </div>
    </div>
      </Wrapper>
    </div>
  );
};

export default Page2;
