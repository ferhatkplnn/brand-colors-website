import "./Search.scss";
import { GoSearch } from "react-icons/go";
import { useBrands } from "../../../contexts/useBrand";

function Search() {
  const { search, setSearch } = useBrands();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <div className="icon">
        <GoSearch />
      </div>
      <input
        type="text"
        placeholder="Search Brands"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
