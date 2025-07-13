import type { BourbonType } from "../../../types/types";
import BourbonCard from "./BourbonCard";

import styles from "./SearchResults.module.css";

export default function SearchResults({
   bourbons,
}: {
   bourbons: BourbonType[] | [];
}) {
   return (
      <div>
         {bourbons.map((bourbon) => (
            <BourbonCard key={bourbon.name} bourbon={bourbon} />
         ))}
      </div>
   );
}
