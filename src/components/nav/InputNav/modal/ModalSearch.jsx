import React from 'react'
import CardGameModal from './CardGameModal'
import style from './ModalSearch.module.css'
const ModalSearch = (props) => {
    const {games} = props;
    console.log(games);
    return (
        <div className={style.modal}>
            <CardGameModal name={games[0].name} img={games[0].background_image }  />
            <CardGameModal name={games[1].name} img={games[1].background_image } />
            <CardGameModal name={games[2].name} img={games[2].background_image } />
            <CardGameModal name={games[3].name} img={games[3].background_image } />
        </div>
    )
}

export default ModalSearch
