import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";

function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/listproduk");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("result", data);
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h1 className="text-center">Ini halaman list produk</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nama</td>
              <td>Deskripsi</td>
              <td>Price</td>
              <td>Gambar</td>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr key="">
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
    </div>
  );
}

export default ListProducts;
