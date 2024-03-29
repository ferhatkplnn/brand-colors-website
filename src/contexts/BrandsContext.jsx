import { createContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import BrandsData from "../brands.json";

export const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  const brandsArray = useMemo(() => Object.values(BrandsData), []);

  const [brands, setBrands] = useState(brandsArray);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const data = {
    brands,
    search,
    setSearch,
  };

  return (
    <BrandsContext.Provider value={data}>{children}</BrandsContext.Provider>
  );
};

BrandsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
