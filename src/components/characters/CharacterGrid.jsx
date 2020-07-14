import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map(item => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;

/*
  Here i'm using ternary operator for , if the api data
  is not fetched yet then display the
  component <spinner /> acctually is a loading image.
  otherwise if the api data is available the it will go 
  throught the map method for data display

*/
