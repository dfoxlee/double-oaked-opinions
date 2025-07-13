import Filter from "./Filter";
import type { FilterType } from "../types/landingTypes";

import styles from "./Search.module.css";

export default function Search({
   updateFilter,
   filter
}: {
   updateFilter: (filter: Partial<FilterType>) => void;
   filter: FilterType;
}) {
   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateFilter({ searchValue: event.target.value });
   };

   return (
      <div className={styles.container}>
         <input
            className={styles.searchInput}
            type="text"
            placeholder="search for a bourbon..."
            onChange={handleSearchChange}
         />
         <Filter updateFilter={updateFilter} filter={filter} />
      </div>
   );
}
