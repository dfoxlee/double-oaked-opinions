import {
   FaArrowDown,
   FaArrowUp,
   FaFilter,
   FaTimesCircle,
} from "react-icons/fa";
import styles from "./Filter.module.css";
import { useState, type ChangeEvent } from "react";
import type { FilterType } from "../types/landingTypes";

export default function Filter({
   updateFilter,
   filter,
}: {
   updateFilter: (filter: Partial<FilterType>) => void;
   filter: FilterType;
}) {
   const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

   const handleToggleFilterModal = () => {
      setIsFilterModalOpen((prev) => !prev);
   };

   const handleSortFieldUpdate = (event: ChangeEvent<HTMLSelectElement>) => {
      updateFilter({
         sort: {
            ...filter.sort,
            field: event.target.value,
         },
      });
   };

   const handleToggleSortDirection = () => {
      const currentDiretion = filter.sort.dir;
      const newDirection = currentDiretion === "asc" ? "desc" : "asc";

      updateFilter({
         sort: {
            ...filter.sort,
            dir: newDirection,
         },
      });
   };

   const handleMinPriceChange = (event) => {
      if (parseFloat(event.target.value)) {
         updateFilter({
            minPrice: parseFloat(event.target.value),
         });
      }

      alert("You must enter a valid price.");
   };

   const handleMaxPriceChange = (event) => {
      if (parseFloat(event.target.value)) {
         updateFilter({
            maxPrice: parseFloat(event.target.value),
         });
      }

      alert("You must enter a valid price.");
   };

   const handleResetClick = () => {
      updateFilter({
         searchValue: "",
         sort: {
            field: "",
            dir: "asc",
         },
         minPrice: null,
         maxPrice: null,
      });
   };

   return (
      <div className={styles.container}>
         <button onClick={handleToggleFilterModal}>
            <FaFilter />
         </button>
         <div
            className={
               isFilterModalOpen
                  ? `${styles.modalWrapper} ${styles.modalWrapperOpen}`
                  : styles.modalWrapper
            }
         >
            <button onClick={handleToggleFilterModal}>
               <FaTimesCircle />
            </button>
            <select
               name=""
               id=""
               onChange={handleSortFieldUpdate}
               value={filter.sort.field}
            >
               <option value="">Sort By...</option>
               <option value="name">Name</option>
               <option value="distillery">Distillery</option>
               <option value="price">Price</option>
               <option value="rating">Rating</option>
            </select>
            <button onClick={handleToggleSortDirection}>
               {filter.sort.dir === "asc" ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <div>
               <input
                  type="number"
                  inputMode="decimal"
                  placeholder="min"
                  onChange={handleMinPriceChange}
                  value={filter.minPrice}
               />
               <input
                  type="number"
                  inputMode="decimal"
                  placeholder="max"
                  onChange={handleMaxPriceChange}
                  value={filter.maxPrice}
               />
            </div>
            <button onClick={handleResetClick}>Reset</button>
         </div>
      </div>
   );
}
