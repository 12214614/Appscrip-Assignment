import "../styles/product.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      {product.outOfStock && (
        <span className="badge">OUT OF STOCK</span>
      )}

      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p>{product.priceText}</p>

      <span className="wishlist"> <Image src="/icon/heart.svg" alt="heart" width={20} height={20} /></span>

    </div>
  );
}