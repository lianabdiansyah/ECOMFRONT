import React, { useState } from "react";
import Header from "./Header";

function SearchProducts() {
  const [data, setData] = useState([]);

  async function searchProduk(key) {
    console.log(key);
    let result = await fetch("http://localhost:8000/api/searchproduk/" + key);
    result = await result.json();
    setData(result);
  }

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Halaman Add Produk</h1>

            <div className="mb-3">
              <label htmlFor="search" className="form-label">
                Cari produk
              </label>
              <input
                type="text"
                className="form-control"
                id="search"
                onChange={(e) => searchProduk(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nama</td>
              <td>Deskripsi</td>
              <td>Price</td>
              <td>Gambar</td>
              <td>Aksi</td>
            </tr>
          </thead>
          {data.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    style={{ width: "200px" }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt="gambar"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
export default SearchProducts;
