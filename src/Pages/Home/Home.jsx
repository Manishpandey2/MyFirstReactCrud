import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [count, setcount] = useState([]);
  const fetchproduct = async () => {
    const response = await axios.get(
      "https://678a2ed7dd587da7ac291234.mockapi.io/products"
    );

    setcount(response.data);
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <>
      <Navbar />
      {count.map((product, index) => {
        const validImage = `https://picsum.photos/seed/${index}/300/200`;
        return (
          <div key={product.id} className="card">
            <img src={validImage} alt="Product Image" />
            <div className="card-content">
              <h2>{product.ProductName}</h2>
              <p>{product.ProductDescription}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
