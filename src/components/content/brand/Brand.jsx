import React from "react";
import "./Brand.scss";
import PropTypes from "prop-types";
import Clipboard from "react-clipboard.js";
import classnames from "classnames";
import { getContrastYIQ } from "../../../helpers";
import { useSelected } from "../../../contexts/useSelectedContext";

const Brand = React.memo(({ brand }) => {
  const { setSelectedBrands, selectedBrands, setCopied } = useSelected();

  const toggleSelected = () => {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brand.slug)) {
        return prevSelected.filter((slug) => slug !== brand.slug);
      } else {
        return [...prevSelected, brand.slug];
      }
    });
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <>
      <div
        className={classnames("brand", {
          selected: selectedBrands.includes(brand.slug),
        })}
      >
        <h5 onClick={toggleSelected}>{brand.title}</h5>
        <div className="brand-colors">
          {brand.colors.map((color, index) => (
            <Clipboard
              component="span"
              key={index}
              data-clipboard-text={color}
              onSuccess={() => setColor(color)}
              style={{
                "--bgColor": `#${color}`,
                "--textColor": `${getContrastYIQ(color)}`,
              }}
            >
              {color}
            </Clipboard>
          ))}
        </div>
      </div>
    </>
  );
});

Brand.displayName = "Brand";

Brand.propTypes = {
  brand: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
  }),
  setSelectedBrands: PropTypes.func.isRequired,
  selectedBrands: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCopied: PropTypes.func.isRequired,
};

export default Brand;
