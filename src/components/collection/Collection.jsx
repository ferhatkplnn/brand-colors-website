import "./Collection.scss";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Download from "../content/download/Download";
import Brand from "../content/brand/Brand";
import { useBrands } from "../../contexts/useBrand";
import { useEffect } from "react";
import { useSelected } from "../../contexts/useSelectedContext";

function Collection() {
  const { slugs } = useParams();
  const { brands } = useBrands();
  const { setSelectedBrands, selectedBrands } = useSelected();

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <IoMdArrowRoundBack /> All Brands
          </a>
        </Link>

        {selectedBrands.length > 0 ? <Download /> : ""}
      </header>
      <section className="brands">
        {selectedBrands.map((slug, index) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return <Brand key={index} brand={brand} />;
        })}
      </section>
    </main>
  );
}

export default Collection;
