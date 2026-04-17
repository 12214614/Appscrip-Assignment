"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

export default function CatalogSection({ products, initialShowFilter }) {
  const mobileQuery = "(max-width: 900px)";
  const [showFilter, setShowFilter] = useState(() => {
    if (typeof window === "undefined") {
      return initialShowFilter;
    }

    return !window.matchMedia(mobileQuery).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const handleViewportChange = (event) => {
      setShowFilter(!event.matches);
    };

    media.addEventListener("change", handleViewportChange);

    return () => {
      media.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <>
      <TopBar
        count={products.length}
        showFilter={showFilter}
        onToggleFilter={() => setShowFilter((prev) => !prev)}
      />

      <div className="main-layout">
        <Sidebar isVisible={showFilter} />
        <ProductGrid products={products} />
      </div>
    </>
  );
}
