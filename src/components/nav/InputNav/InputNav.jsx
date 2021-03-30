import React, { useState } from "react";
//css
import styles from "./InputNav.module.css";
//svg
import SearchSvg from "../../../svg/nav/SearchSvg";
import LoadingSvg from "../../../svg/Loading/LoadingSvg";
import ModalSearch from "./modal/ModalSearch";


//api
const apiKey = "key=2f93b9a7bffb481a9ab214dcdb9530f0";

//functions
const fetchBasic = async (term) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?search=${term}&${apiKey}`
  );
  const dados = await response.json();
  return dados;
};





const InputNav = (props) => {
  const [isValue, setIsValue] = useState("");
  const [isload, setIsLoad] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  const [games, setGame] = useState([])
  const [modal, setModal] = useState(false)
  async function fetchData(term) {
    if (term==='') {
      return
    }
    setIsLoad(true)
    const response = await fetchBasic(term);
    console.log(response);
    setGame(response.results)
    setIsLoad(false)
    setIsReceived(true)
    setModal(true)
  }


  const handlerChanger = (e) => {
    setIsValue(e.target.value);
  };
  const handlerBlur = (e) => {
      fetchData(isValue)
      
      if (isValue==='') {
        setModal(false)
      }
  };

  return (
    <div className={styles.nav__input}>
      <input type="text"
      placeholder="Search game..."
      onChange={handlerChanger}
      value={isValue}
      onKeyUp={handlerBlur}
      />
      
      {isload?<LoadingSvg />:''}
      <span className={styles.inputIcon}>
        <SearchSvg />
      </span>
      <div className={styles.modal}>
        {modal && <ModalSearch games={isReceived?games:[]} />}
        
      </div>
    </div>
  );
};

export default InputNav;
