import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddProduct from "@hooks/useAddProduct";
import Header from "@components/Headers/Header";

function AddProductHeader(props) {
  let [save, setSave] = useState(false);
  let [done, setDone] = useState(false);
  let navigate = useNavigate();

  useAddProduct(props, save, setSave, done, setDone);
  if (done) {
    setDone(!done);
    navigate("/");
  }
  function blueFunc() {
    setSave(!save);
  }
  function redFunc() {
    navigate("/");
  }
  let redBtn = "Cancel";
  let blueBtn = "Save";
  let headerTitle = "Product Add";

  let data = { redBtn, blueBtn, headerTitle, redFunc, blueFunc };

  return <Header {...data} />;
}
export default AddProductHeader;
