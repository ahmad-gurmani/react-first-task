import React from "react";
import Heading from "./Header";
import Cards from "./Cards";
import contacts from "../contacts";

function createCard(contact) {
  return (
  <Cards
  key= {contact.id}
  name= {contact.name}
  img= {contact.imgURL}
  tel= {contact.phone}
  email= {contact.email}
  />
  )
}

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
