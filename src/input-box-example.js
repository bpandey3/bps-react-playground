import React, {useState} from 'react'


export default function Names() {
    const [firstName, setFirstName] = useState("Ben");
    const [lastName, setLastName] = useState("King");
    const fullName = firstName + ' ' + lastName;

  return (
    <form>
    <label>Enter your First name:
      <input
        type="text" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </label>
    <label>Enter your Last name:
      <input
        type="text" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </label>

    Hello {fullName}
    <input type="submit" />
  </form>
  );
}

