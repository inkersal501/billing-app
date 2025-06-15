import React, { useState } from 'react'

function Addproduct() {

  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [measure, setMeasure] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name  && unit && price && measure) {
    //   onAddProduct({ name, unit, price, measure});
      setName('');
      setUnit('');
      setPrice('');
      setMeasure('');
    //   onClose();
    }
  };

//   if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Product</h2>
          <button onClick={""} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="unit">Unit:</label>
              <input
                type="number"
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="measure">Measurement:</label>
              <input
                type="text"
                id="measure"
                value={measure}
                onChange={(e) => setMeasure(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn">
                Add Product
              </button>
              <button onClick={""} className="px-8">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addproduct;