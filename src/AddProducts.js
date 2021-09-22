import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function AddProducts() {
  const [name, setName]= useState("")
  const [description, setDescription]= useState("")
  const [price, setPrice]= useState("")
  const [file, setFile] = useState("")

  const history = useHistory();

  const handleAddProduct = async() => {
    console.log(name, description, price, file);
    const formData = new FormData;
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', file);

    let result = await fetch("http://localhost:8000/api/addproduk", {
      method: "POST",
      body: formData,
    });
    history.push('/');
     alert("Porduk berhasil ditambahkan");
    
  }
  
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Halaman Add Produk</h1>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                cols="50"
                rows="5"
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Gambar
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button
              onClick={handleAddProduct}
              type="submit"
              className="btn btn-primary"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProducts;
