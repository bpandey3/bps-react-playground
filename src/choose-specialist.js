import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function SpecialistList(specId) {
  console.log(specId.spec);
  const chemists = people.filter((person) => person.profession === specId.spec);

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
