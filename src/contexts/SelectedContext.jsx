import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const data2 = useMemo(() => {
    return {
      selectedBrands,
      setSelectedBrands,
      copied,
      setCopied,
    };
  }, [copied, selectedBrands]);

  return (
    <SelectedContext.Provider value={data2}>
      {children}
    </SelectedContext.Provider>
  );
};

SelectedProvider.propTypes = {
  children: PropTypes.node,
};
