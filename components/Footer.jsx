import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Newsletter */}
      <div className="newsletter">
        <h3>Be the first to know</h3>
        <p>Sign up for updates from mettā muse.</p>

        <div className="newsletter-input">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">

        {/* Contact */}
        <div>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        {/* Links */}
        <div>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
        </div>

        {/* Currency */}
        <div>
          <h4>Currency</h4>
          <p>USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>

    </footer>
  );
}