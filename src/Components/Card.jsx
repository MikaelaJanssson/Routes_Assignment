import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ title, subtitle, linkTo, image }) {
  return (
    <Link to={linkTo} className="card-wrapper">
      <div className="card-content">
        {image && <img src={image} alt={title} className="card-avatar" />}
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
}
