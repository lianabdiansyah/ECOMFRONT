import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";

function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    getData();
  }, []);
  console.warn("result", data);

  const handleHapus = async(id) => {
    let result = await fetch("http://localhost:8000/api/deleteproduk/"+id, {
      method: 'DELETE',
    });
    result = await result.json();
    getData();
    alert("berhasil menghapus produk");
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/listproduk");
    result = await result.json();
    setData(result);
  }

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
              <td>Aksi</td>
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
                <td><button className="btn btn-danger" onClick={()=>handleHapus(item.id)}>Hapus</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
