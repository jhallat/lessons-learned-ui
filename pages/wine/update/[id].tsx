import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { Wine } from "../../../models/wine";
import axios from "axios";
import { useRouter } from "next/router";
import WineForm from "../../../components/WineForm";

const UpdateWinePage = () => {
  const router = useRouter();

  const [wine, setWine] = useState(new Wine());

  useEffect(() => {
    const { id } = router.query;
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/api/wine/${id}`);
      setWine(response.data);
    };
    fetchData();
  }, []);

  const handleUpdate = (wine) => {
    console.log(wine);
    axios
      .put(`http://localhost:4000/api/wine/${wine.key}`, wine)
      .then(() => router.push("/wine"))
      .catch((reason) => console.log(reason));
  };

  const handleCancel = () => {
    router.push("/wine");
  };

  return (
    <Layout>
      <WineForm
        wine={wine}
        action="Update"
        onAction={handleUpdate}
        onCancel={handleCancel}
      />
    </Layout>
  );
};

export default UpdateWinePage;
