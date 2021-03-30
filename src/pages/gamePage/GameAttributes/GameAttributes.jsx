import React from "react";
import Skeleton from "../../../components/utilities/skeleton/Skeleton";
import styles from "./GameAttributes.module.css";

const GameAttributes = (props) => {
  const { platforms } = props;
  const { genres } = props;
  const { developers } = props;
  const { publishers } = props;
  const { website } = props;
  const { released } = props;

  const { load } = props;
  
  return (
    <div className={styles.attributesGrid}>
      <div className={styles.attributes}>
        <h2>Platforms</h2>
         {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p>{platforms.map(item=>item.platform.name).join(', ')}</p>
         }
         
      </div>
      <div className={styles.attributes}>
        <h2>Genre</h2>
        {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p>{genres.map(item=>item.name).join(', ')}</p>
         }
      </div>
      <div className={styles.attributes}>
        <h2> Developer </h2>
        {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p>{developers.map(item=>item.name).join(', ')}</p>
         }
      </div>
      <div className={styles.attributes}>
        <h2>Website</h2>
        {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p><a href={website}>{website}</a></p>
         }
      </div>
      <div className={styles.attributes}>
        <h2>Release date</h2>
        {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p>{released}</p>
         }
      </div>
      <div className={styles.attributes}>
        <h2>Publisher</h2>
        {load ?
         <Skeleton width={50} mw={"px"} height={24} mh={"px"} /> :
         <p>{publishers.map(item=>item.name).join(', ')}</p>
         }
      </div>
    </div>
  );
};

export default GameAttributes;
