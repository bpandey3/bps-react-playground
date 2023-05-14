import { specalist } from "./data.js";
import { useState } from "react";
import SpecialistList from "./choose-specialist";

export default function List() {
  const [specId, setSpecId] = useState("all");

  const specialistList = (
    <div>
      <h1>
        Select Speicalist{" "}
        {specId.slice(0, 1).toUpperCase() + specId.slice(1, specId.length)}
      </h1>
      <select value={specId} onChange={(e) => setSpecId(e.target.value)}>
        {specalist.map((sp) => (
          <option key={sp.id} value={sp.value}>
            {sp.value.slice(0, 1).toUpperCase() +
              sp.value.slice(1, sp.value.length)}
          </option>
        ))}
      </select>
      <SpecialistList spec={specId} />
    </div>
  );

  return specialistList;
}
