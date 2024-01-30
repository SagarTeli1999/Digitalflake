import React, { useState } from 'react';

const Product = () => {
  // Sample data
  const productsData = [
    { id: 123, name: 'Amul taaza', packsize: 500, category: 'Milk', mrp: 27, status: 'Active' },
    { id: 124, name: 'Gokul Cow', packsize: 500, category: 'Milk', mrp: 27, status: 'Inactive' },
    { id: 125, name: 'Shimla Apple', packsize: 1, category: 'Fruits', mrp: 150, status: 'Active' },
  ];

  // State for form visibility and new product data
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    packsize: '',
    category: '',
    mrp: '',
    status: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Function to handle "Add Product" button click
  const handleAddProductClick = () => {
    setShowForm(true);
  };

  // Function to handle "Save" button click in the form
  const handleSaveProductClick = () => {
    // TODO: Add logic to save the new product data
    console.log('Saving product:', newProduct);
    // Reset form and hide it
    setNewProduct({
      name: '',
      packsize: '',
      category: '',
      mrp: '',
      status: '',
    });
    setShowForm(false);
  };

  // Function to handle "Cancel" button click in the form
  const handleCancelClick = () => {
    // Reset form and hide it
    setNewProduct({
      name: '',
      packsize: '',
      category: '',
      mrp: '',
      status: '',
    });
    setShowForm(false);
  };

  return (
    <div>
      <h1>Product Table</h1>
      <table className="product-table">
        {/* Create table header */}
        <thead>
          <tr>
            {Object.keys(productsData[0]).map((key) => (
              <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        {/* Create table rows */}
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id}>
              {Object.entries(product).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
              <td>
                <button onClick={() => console.log('Edit clicked for product ID:', product.id)}>
                  Edit
                </button>
                <button onClick={() => console.log('Delete clicked for product ID:', product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* "Add Product" button */}
      <button onClick={handleAddProductClick}>Add Product</button>

      {/* Form for adding a new product */}
      {showForm && (
        <div>
          <h2>Add Product</h2>
          <form>
            {Object.keys(newProduct).map((key) => (
              <div key={key}>
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={newProduct[key]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <button type="button" onClick={handleSaveProductClick}>
              Save
            </button>
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Product;
