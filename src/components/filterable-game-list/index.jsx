import { useState } from "react";
import SearchBar from "../search-bar";
import GameList from "../game-list";

export default function FilterableGameList({ games = [] }) {
  const [filterText, setFilterText] = useState("");
  const [inWhishListOnly, setInWhishListOnly] = useState(false);

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
        onFilterTextChange={setFilterText}
        oninWhishListOnlyChange={setInWhishListOnly}
      />
      <GameList
        games={games}
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
      />
    </div>
  );
}
