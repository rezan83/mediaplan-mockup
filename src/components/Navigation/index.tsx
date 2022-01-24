import { Link } from "react-router-dom";
import "./navigation.scss";
const index = () => {
  return (
    <nav>
      <button>
        <Link to="/form">form</Link>
      </button>
      <button>
        <Link to="/chart">chart</Link>
      </button>
    </nav>
  );
};

export default index;
