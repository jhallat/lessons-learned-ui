import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { Beer } from "../../../models/beer";
import axios from "axios";
import { useRouter } from "next/router";
import BeerForm from "../../../components/BeerForm";

const UpdateBeerPage = () => {
  const router = useRouter();

  const [beer, setBeer] = useState(new Beer());

  useEffect(() => {
    const { id } = router.query;
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/api/beer/${id}`);
      setBeer(response.data);
    };
    fetchData();
  }, []);

  const handleUpdate = (beer) => {
    console.log(beer);
    axios
      .put(`http://localhost:4000/api/beer/${beer.key}`, beer)
      .then(() => router.push("/beer"))
      .catch((reason) => console.log(reason));
  };

  const handleCancel = () => {
    router.push("/beer");
  };

  return (
    <Layout>
      <BeerForm
        beer={beer}
        action="Update"
        onAction={handleUpdate}
        onCancel={handleCancel}
      />
    </Layout>
  );
};

export default UpdateBeerPage;
