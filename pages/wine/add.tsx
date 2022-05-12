import Layout from "../../components/Layout";
import { useState } from "react";
import { Wine } from "../../models/wine";
import axios from "axios";
import { useRouter } from "next/router";
import WineForm from "../../components/WineForm";

const AddWinePage = () => {
  const router = useRouter();

  const handleAdd = (wine) => {
    axios
      .post("http://localhost:4000/api/wine", wine)
      .then(() => {
        router.push("/wine");
      })
      .catch((reason) => console.log(reason));
  };

  const handleCancel = () => {
    router.push("/wine");
  };

  return (
    <Layout>
      <WineForm
        wine={new Wine()}
        action="Add"
        onAction={handleAdd}
        onCancel={handleCancel}
      />
    </Layout>
  );
};

export default AddWinePage;
