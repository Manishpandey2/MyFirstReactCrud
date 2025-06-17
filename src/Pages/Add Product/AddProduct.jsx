import "./AddProduct.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  //method 1 to handle the user data
  const [ProductName, setProductName] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductMaterial, setProductMaterial] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    await axios.post("https://678a2ed7dd587da7ac291234.mockapi.io/products", {
      ProductImage: ProductImage,
      ProductName: ProductName,
      ProductDescription: ProductDescription,
      ProductMaterial: ProductMaterial,
    });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>📦 Add New Product</h1>
          <p>Fill in the details to create a new product entry</p>
        </div>
        <div className="form-container">
          <div className="success-message" id="successMessage">
            <strong>Success!</strong> Product has been added successfully.
            <div className="json-output" id="jsonOutput" />
          </div>
          <div className="loading" id="loading">
            <div className="spinner" />
            <p>Adding product...</p>
          </div>
          <form id="productForm" onSubmit={addProduct}>
            <div className="form-group">
              <label htmlFor="productName">🏷️ Product Name</label>
              <input
                type="text"
                id="productName"
                name="ProductName"
                placeholder="Enter product name"
                onChange={(e) => setProductName(e.target.value)}
              />
              <div className="error-message">Product name is required</div>
            </div>
            <div className="form-group">
              <label htmlFor="productImage">🖼️ Product Image URL</label>
              <input
                type="url"
                id="productImage"
                name="ProductImage"
                placeholder="https://example.com/image.jpg"
                onChange={(e) => setProductImage(e.target.value)}
              />
              <div className="error-message">
                Please enter a valid image URL
              </div>
              <div className="image-preview" id="imagePreview">
                <img id="previewImg" src alt="Preview" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">📝 Product Description</label>
              <textarea
                id="productDescription"
                name="ProductDescription"
                placeholder="Describe your product in detail..."
                rows={4}
                defaultValue={""}
                onChange={(e) => setProductDescription(e.target.value)}
              />
              <div className="error-message">
                Description must be at least 10 characters long
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="productMaterial">🧱 Product Material</label>
              <select
                id="productMaterial"
                name="ProductMaterial"
                onChange={(e) => setProductMaterial(e.target.value)}
              >
                <option value>Select material</option>
                <option value="Ceramic">Ceramic</option>
                <option value="Metal">Metal</option>
                <option value="Plastic">Plastic</option>
                <option value="Wood">Wood</option>
                <option value="Glass">Glass</option>
                <option value="Fabric">Fabric</option>
                <option value="Leather">Leather</option>
                <option value="Stone">Stone</option>
                <option value="Rubber">Rubber</option>
                <option value="Composite">Composite</option>
                <option value="Other">Other</option>
              </select>
              <div className="error-message">Please select a material</div>
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary" id="submitBtn">
                💾 Add Product
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onclick="resetForm()"
              >
                🔄 Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
