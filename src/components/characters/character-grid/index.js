import React from "react";
import CharacterItem from "../character-item";
import Spinner from "../../spinner";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items &&
        items.map((el) => <CharacterItem h1 key={el.char_id} item={el} />)}
    </section>
  );
};

export default CharacterGrid;
