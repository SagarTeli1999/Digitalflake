import React, { useState } from 'react';

const Category = () => {
  // Sample data
  const categories = [
    { id: 123, name: 'Milk', description: 'Lorem Ipsum is simply dummy text', status: 'Active', image: 'milk.jpg' },
    { id: 124, name: 'Fruits', description: 'Lorem Ipsum is simply dummy text', status: 'Active', image: 'fruits.jpg' },
    { id: 125, name: 'Vegetables', description: 'Lorem Ipsum is simply dummy text', status: 'Inactive', image: 'vegetables.jpg' },
  ];

  // State to track whether "Add Category" button is clicked
  const [isAddCategoryClicked, setIsAddCategoryClicked] = useState(false);

  // Function to generate the form with all column names
  const generateForm = () => {
    return (
      <form>
        {Object.keys(categories[0]).map((key) => (
          <div key={key}>
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input type="text" placeholder={key} />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  };

  // Function to handle the "Add Category" button click
  const handleAddCategory = () => {
    // Set the state to indicate that the button is clicked
    setIsAddCategoryClicked(true);
  };

  // Return the component with either the table or the form
  return (
    <div>
      <button onClick={handleAddCategory} style={{ fontWeight: 'bold' }}>
        Add Category
      </button>
      {isAddCategoryClicked ? (
        <div>
          {/* Render the form with all column names */}
          {generateForm()}
        </div>
      ) : (
        <table className="category-table">
          {/* Create table header */}
          <thead>
            <tr>
              {Object.keys(categories[0]).map((key) => (
                <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
              <th>Image</th> {/* Add an additional column for images */}
            </tr>
          </thead>

          {/* Create table rows */}
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                {Object.entries(category).map(([key, value]) => (
                  <td key={key}>
                    {key === 'image' ? (
                      <img src={value} alt={category.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Category;
