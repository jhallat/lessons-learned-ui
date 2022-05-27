import Layout from "../../components/Layout";
import { useState } from "react";
import { Beer } from "../../models/beer";
import axios from "axios";
import { useRouter } from "next/router";
import BeerForm from "../../components/BeerForm";

const AddBeerPage = () => {
  const router = useRouter();

  const handleAdd = (beer) => {
    axios
      .post("http://localhost:4000/api/beer", beer)
      .then(() => {
        router.push("/beer");
      })
      .catch((reason) => console.log(reason));
  };

  const handleCancel = () => {
    router.push("/beer");
  };

  return (
    <Layout>
      <BeerForm
        beer={new Beer()}
        action="Add"
        onAction={handleAdd}
        onCancel={handleCancel}
      />
    </Layout>
  );
};

export default AddBeerPage;
