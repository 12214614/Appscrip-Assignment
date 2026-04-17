import "../styles/topbar.css";

export default function TopBar({ count, showFilter, onToggleFilter }) {
  return (
    <div className="topbar">

      {/* Left side */}
      <div className="topbar-left">
        <span className="count">{count} ITEMS</span>
        <button className="filter-btn" type="button" onClick={onToggleFilter}>
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      {/* Right side */}
      <div className="topbar-right">
        <select>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>

    </div>
  );
}