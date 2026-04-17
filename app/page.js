import Header from "../components/Header";
import Hero from "../components/Hero";
import CatalogSection from "../components/CatalogSection";
import Footer from "../components/Footer";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  const products = data.map((item, index) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    priceText: "Sign in or Create an account to see pricing",
    outOfStock: index % 4 === 0,
  }));

  return (
    <main>
      <Header />
      <Hero />
      <CatalogSection products={products} initialShowFilter={true} />
      <Footer />

    </main>
  );
}