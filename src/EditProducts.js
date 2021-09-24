import Header from "./Header";
import { withRouter,useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProducts(props) {
  // console.warn("props",props.match.params.id)
  const [data, setData] = useState([]);

  const [name, setName]= useState("")
  const [description, setDescription]= useState("")
  const [price, setPrice]= useState("")
  const [file, setFile] = useState("")

  const history = useHistory();

  useEffect(async() => {
    let result = await fetch("http://localhost:8000/api/editproduk/"+ props.match.params.id);
    result = await result.json();
    setData(result);
    setName(result.name)
    setDescription(result.description)
    setPrice(result.price);
    setFile(result.file);
  },[])

  const handleUpdate = async(id) => {
    // alert(id)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);

    let result = await fetch(
      "http://localhost:8000/api/updateproduk/"+id+"?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    // history.push("/");
    alert("Produk berhasil diubah");

  }
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Halaman Edit Produk</h1>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={data.name}
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
                defaultValue={data.description}
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
                defaultValue={data.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Ubah gambar
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                defaultValue={data.file_path}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="mb-3">
              <img
                style={{ width: "200px" }}
                src={"http://localhost:8000/" + data.file_path}
                alt="gambar"
              />
            </div>

            <button
              onClick={() => handleUpdate(data.id)}
              type="submit"
              className="btn btn-primary mb-5"
            >
              Ubah Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(EditProducts);
