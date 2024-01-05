import "./Copied.scss";
import { getContrastYIQ } from "../../helpers";
import { useBrands } from "../../contexts/useBrand";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Copied({ color }) {
  const { copied, setCopied } = useBrands();

  useEffect(() => {
    let timeoutId = null;
    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [copied, setCopied]);
  return (
    <div
      className="copied"
      style={{ "--bgColor": `#${color}`, "--textColor": getContrastYIQ(color) }}
    >
      Copied #{color} to Clipboard
    </div>
  );
}

Copied.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Copied;
