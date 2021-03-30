import React from 'react'
import style from './ModalSearch.module.css'
const CardGameModal = (props) => {
    const {name} = props;
    const {img} = props;
    return (
        <div className={style.modalGame}>
           <img className={style.modalImg} src={img} alt={name} />
           <h3> {name} </h3> 
        </div>
    )
}

export default CardGameModal
