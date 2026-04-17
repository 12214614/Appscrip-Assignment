import "../styles/sidebar.css";

export default function Sidebar({ isVisible }) {
  return (
    <aside className={`sidebar ${isVisible ? "show" : "hide"}`}>

      <div className="filter-section">
        <label>
          <input type="checkbox" />
          Customizable
        </label>
      </div>

      <div className="filter-section">
        <h2>IDEAL FOR</h2>
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Baby & Kids</label>
      </div>

      <div className="filter-section">
        <h4>OCCASION</h4>
        <label><input type="checkbox" /> All</label>
      </div>

      <div className="filter-section">
        <h4>WORK</h4>
        <label><input type="checkbox" /> All</label>
      </div>

      <div className="filter-section">
        <h4>FABRIC</h4>
        <label><input type="checkbox" /> All</label>
      </div>

      <div className="filter-section">
        <h4>SEGMENT</h4>
        <label><input type="checkbox" /> All</label>
      </div>

      <div className="filter-section">
        <h4>PATTERN</h4>
        <label><input type="checkbox" /> All</label>
      </div>

    </aside>
  );
}