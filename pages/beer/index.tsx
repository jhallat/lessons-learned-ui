import Layout from "../../components/Layout";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import BeerItem from "../../components/BeerItem";

const BeerPage = () => {
  const [beers, setBeers] = useState([
    {
      key: "aaaaaaa",
      brandName: "Yuengling",
      type: "Lager",
      description: "Pretty good beer!",
      rating: 5,
    },
  ]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Layout>
      <Stack direction="row" justifyContent="flex-start">
        <Button>Add Beer</Button>
      </Stack>
      <Stack direction="column" spacing={1}>
        {beers.map((beer) => (
          <BeerItem
            key={beer.key}
            id={beer.key}
            brandName={beer.brandName}
            type={beer.type}
            description={beer.description}
            rating={beer.rating}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </Stack>
    </Layout>
  );
};

export default BeerPage;
