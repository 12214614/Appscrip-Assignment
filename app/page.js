import Header from "../components/Header";
import Hero from "../components/Hero";
import CatalogSection from "../components/CatalogSection";
import Footer from "../components/Footer";

export const revalidate = 3600;

export default async function Home() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Products request failed with status ${res.status}`);
    }

    const data = await res.json();
    const items = Array.isArray(data) ? data : [];

    products = items.map((item, index) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      priceText: "Sign in or Create an account to see pricing",
      outOfStock: index % 4 === 0,
    }));
  } catch (error) {
    console.error("Failed to load products", error);
  }

  return (
    <main>
      <Header />
      <Hero />
      <CatalogSection products={products} initialShowFilter={true} />
      <Footer />
    </main>
  );
}
