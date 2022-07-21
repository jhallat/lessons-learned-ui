import Layout from "../../components/Layout";
import { Button, Stack } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import BeerItem from "../../components/BeerItem";
import axios from "axios";
import { router } from "next/router";

const BeerPage = () => {
  const beerReducer = (state, action) => {
    switch (action.type) {
      case "setBeers": {
        return action.data;
      }
      case "deleteBeer": {
        return state.filter((beer) => beer.key !== action.id);
      }
      default:
        return state;
    }
  };

  const [beers, dispatch] = useReducer(beerReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/beer")
      .then((response) => dispatch({ type: "setBeers", data: response.data }))
      .catch((reason) => {
        console.log(reason);
        dispatch({ type: "setBeers", data: [] });
      });
  }, []);

  const handleAddBeerRoute = (event) => {
    event.preventDefault();
    router.push("/beer/add");
  };

  const handleEdit = (id) => {
    router.push(`/beer/update/${id}`);
  };

  const handleDelete = () => {};

  return (
    <Layout>
      <Stack direction="row" justifyContent="flex-start">
        <Button onClick={handleAddBeerRoute}>Add Beer</Button>
      </Stack>
      <Stack direction="column" spacing={1}>
        {beers.map((beer) => (
          <BeerItem
            key={beer.key}
            id={beer.key}
            brewer={beer.brewer}
            brandName={beer.brandName}
            style={beer.style}
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
