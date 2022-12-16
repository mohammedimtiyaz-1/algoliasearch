import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
  Menu,
  ClearRefinements,
  SortBy,
  PoweredBy,
} from "react-instantsearch-dom";
import type { InstantSearchProps } from "react-instantsearch-dom";

const HitComponent = ({ hit }: any) => {
  return (
    <div className="hit">
      <div>
        <h2>{hit.title}</h2>

        <div className="rank">
          <span>Students - {hit["number students"]}</span>
          <em>{hit.location}</em>
        </div>
      </div>
      <div className="students">
        <h2>Ranked - {hit.ranking}</h2>
      </div>

      <div className="ratio">
        <span>Gender Ratio : {hit["gender ratio"]}</span>
        <span>Staff-Student Ratio : {hit["students staff ratio"]}</span>
        <span>Foreign Student : {hit["perc intl students"]}</span>
      </div>
    </div>
  );
};

export function Search(props: InstantSearchProps) {
  return (
    <InstantSearch {...props}>
      <Configure hitsPerPage={12} />
      <header>
        <h1>Universities in the world</h1>
        <SearchBox />

        <PoweredBy />
      </header>
      <main>
        <div className="menu">
          <h2>By Location </h2>
          <RefinementList attribute="location" />

          <ClearRefinements />
        </div>

        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </InstantSearch>
  );
}
