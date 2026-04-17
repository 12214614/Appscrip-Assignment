import Header from "../components/Header";
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

// ✅ Server-side data fetching (SSR)
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // ensures SSR
  });

  const data = await res.json();

  // Transform API data to match your UI
  return data.map((item, index) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    priceText: "Sign in or Create an account to see pricing",
    outOfStock: index % 4 === 0, // fake stock logic
  }));
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />
      <Hero />

      <TopBar count={products.length} />

      <div className="main-layout">
        <Sidebar isVisible={true} />
        <ProductGrid products={products} />
      </div>

      <Footer />
    </main>
  );
}
