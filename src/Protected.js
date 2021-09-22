import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Protected(props) {
    let Cmp = props.Cmp;
    let history = useHistory();
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem("user-info"))
    console.log(local.error);
    if (local.error) {
      history.push("/login");
    }
      //  if (!localStorage.getItem("user-info")) {
      //    history.push("/login");
      //  }
     }, []);
    return (
    <div>
        <Cmp/>
    </div>
  );
}
export default Protected;
