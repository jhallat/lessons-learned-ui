import {
  Button,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Beer } from "../models/beer";
import { useEffect, useState } from "react";

interface BeerFormProps {
  beer: Beer;
  action: string;
  onAction?: (Beer) => void;
  onCancel?: () => void;
}

const containerStyle = {
  padding: "10px",
  topMargin: "10px",
};

const BeerForm = ({ beer, action, onAction, onCancel }: BeerFormProps) => {
  const [actionBeer, setActionBeer] = useState(beer);

  useEffect(() => {
    setActionBeer(beer);
  }, [beer]);

  const handleBrandNameChange = (event) => {
    setActionBeer({ ...actionBeer, brandName: event.target.value });
  };

  const handleStyleChange = (event) => {
    setActionBeer({ ...actionBeer, style: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setActionBeer({ ...actionBeer, description: event.target.value });
  };

  const handleRatingChange = (event) => {
    setActionBeer({ ...actionBeer, rating: ~~event.target.value });
  };

  const handleAction = () => {
    if (onAction) {
      onAction(actionBeer);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Paper sx={containerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ bottomPadding: "15px" }} variant="h5">
            {`${action} Wine`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Brand Name"
            value={actionBeer.brandName}
            onChange={handleBrandNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Style"
            value={actionBeer.style}
            onChange={handleStyleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Description"
            value={actionBeer.description}
            onChange={handleDescriptionChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Rating value={actionBeer.rating} onChange={handleRatingChange} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item xs={1}>
              <Button onClick={handleAction}>{action}</Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={handleCancel}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BeerForm;
