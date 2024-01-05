import "./Download.scss";
import { useBrands } from "../../../contexts/useBrand";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelected } from "../../../contexts/useSelectedContext";

function Download() {
  const { brands } = useBrands();
  const { selectedBrands, setSelectedBrands } = useSelected();
  const [downloadUrl, setDownloadUrl] = useState();
  const [CSSMethod, setCSSMethod] = useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      switch (CSSMethod) {
        case "css":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`;
            });
          });
          break;
        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `$${slug}-${key}: #${color};\n`;
            });
          });
          break;

        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          break;

        default:
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, CSSMethod, brands]);

  return (
    <div className="download">
      <div className="actions">
        <select onChange={(e) => setCSSMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>

        <a download={`brands.${CSSMethod}`} href={downloadUrl}>
          <GrDownload />
        </a>

        <Link to={`/collection/${selectedBrands.join(",")}`}>
          <GrLink />
        </Link>
      </div>
      <div className="selected" onClick={() => setSelectedBrands([])}>
        <button>
          <GrClose />
        </button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Download;
