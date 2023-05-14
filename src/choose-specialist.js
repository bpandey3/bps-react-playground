import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
import React from 'react'

export default function SpecialistList(specId) {
  const specs = specId.spec;
  console.log(specs);
  const chemists = specs === 'all'? people  :people.filter((person) => person.profession === specs);

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
