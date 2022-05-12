import { useEffect, useReducer, useState } from "react";
import WineItem from "../../components/WineItem";
import Layout from "../../components/Layout";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

const WinePage = () => {
  const router = useRouter();

  const wineReducer = (state, action) => {
    switch (action.type) {
      case "setWines": {
        return action.data;
      }
      case "deleteWine": {
        return state.filter((wine) => wine.key !== action.id);
      }
      default:
        return state;
    }
  };
  const [wines, dispatch] = useReducer(wineReducer, []);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [wineToDelete, setWineToDelete] = useState("");
  const [wineToDeleteId, setWineToDeleteId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/wine")
      .then((response) => dispatch({ type: "setWines", data: response.data }))
      .catch((reason) => {
        console.log(reason);
        dispatch({ type: "setWines", data: [] });
      });
  }, []);

  const handleAddWineRoute = (event) => {
    event.preventDefault();
    router.push("/wine/add");
  };

  const handleEdit = (id) => {
    console.log("edit " + id);
    router.push(`/wine/update/${id}`);
  };

  const handleDelete = (id) => {
    console.log("delete " + id);
    const { brandName, vintage, wineName } = wines.find(
      (wine) => wine.key === id
    );
    setWineToDelete(`${vintage} ${brandName} ${wineName}`);
    setWineToDeleteId(id);
    setOpenConfirmDelete(true);
  };

  const handleDeleteNo = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteYes = () => {
    axios
      .delete(`http://localhost:4000/api/wine/${wineToDeleteId}`)
      .then((resp) => {
        if (resp.status === 204) {
          dispatch({ type: "deleteWine", id: wineToDeleteId });
        }
      });
    setOpenConfirmDelete(false);
  };

  return (
    <Layout>
      <Stack direction="row" justifyContent="flex-start">
        <Button onClick={handleAddWineRoute}>Add Wine</Button>
      </Stack>
      <Stack direction="column" spacing={1}>
        {wines.map((wine) => (
          <WineItem
            key={wine.key}
            id={wine.key}
            brandName={wine.brandName}
            wineName={wine.wineName}
            vintage={wine.vintage}
            description={wine.description}
            rating={wine.rating}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </Stack>
      <Dialog open={openConfirmDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>Delete {wineToDelete}?</DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteYes}>Yes</Button>
          <Button onClick={handleDeleteNo}>No</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default WinePage;
