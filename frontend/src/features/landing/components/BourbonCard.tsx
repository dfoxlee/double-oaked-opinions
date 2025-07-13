import { useMemo, type ReactElement } from "react";
import type { BourbonType } from "../../../types/types";
import styles from "./BourbonCard.module.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function BourbonCard({
   key,
   bourbon,
}: {
   key: string;
   bourbon: BourbonType;
}) {
   const starRating = useMemo(() => {
      const stars: ReactElement[] = [];
      const rating = bourbon.averageStars;

      for (let i = 1; i <= 5; i++) {
         if (rating >= i) {
            stars.push(
               <FaStar
                  className={styles.starIcon}
                  key={`star-${bourbon.name}-${i}`}
               />
            );
         } else if (rating >= i - 0.5) {
            stars.push(
               <FaStarHalfAlt
                  className={styles.starIcon}
                  key={`star-${bourbon.name}-${i}`}
               />
            );
         } else {
            stars.push(
               <FaRegStar
                  className={styles.starIcon}
                  key={`star-${bourbon.name}-${i}`}
               />
            );
         }
      }

      return stars;
   }, [bourbon.averageStars, bourbon.name]);

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <img
               className={styles.bourbonImg}
               src={bourbon.thumbnailImg}
               alt={bourbon.name}
            />
            <h3 className={styles.bourbonName}>{bourbon.name}</h3>
            <h5>{`Distillery: ${bourbon.distillery}`}</h5>
            <h5>{`Average Price: $${bourbon.averagePurchasePrice}`}</h5>
            <div className={styles.starsWrapper}>{starRating}</div>
            <p>{bourbon.description}</p>
         </div>
      </div>
   );
}
