import { useMemo } from "react";
import "./Content.scss";
import { useBrands } from "../../contexts/useBrand";
import Search from "./search/Search";
import Brand from "./brand/Brand";
import Download from "./download/Download";
import { useSelected } from "../../contexts/useSelectedContext";

function Content() {
  const { brands } = useBrands();
  const { selectedBrands } = useSelected();

  const memoizedBrands = useMemo(() => {
    return brands.map((brand) => <Brand key={brand.slug} brand={brand} />);
  }, [brands]);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className="brands">{memoizedBrands}</section>
    </main>
  );
}

export default Content;
