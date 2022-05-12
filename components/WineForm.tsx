import {
  Button,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Wine } from "../models/wine";
import { useEffect, useState } from "react";

interface WineFormProps {
  wine: Wine;
  action: string;
  onAction?: (Wine) => void;
  onCancel?: () => void;
}

const containerStyle = {
  padding: "10px",
  topMargin: "10px",
};

const WineForm = ({ wine, action, onAction, onCancel }: WineFormProps) => {
  const [actionWine, setActionWine] = useState(wine);
  const [vintage, setVintage] = useState(
    wine.vintage > 0 ? "" + wine.vintage : ""
  );
  const [vintageError, setVintageError] = useState(false);

  useEffect(() => {
    setActionWine(wine);
    setVintage(wine.vintage > 0 ? "" + wine.vintage : "");
  }, [wine]);

  const handleBrandNameChange = (event) => {
    setActionWine({ ...actionWine, brandName: event.target.value });
  };

  const handleVintageChange = (event) => {
    setVintage(event.target.value);
    setActionWine({ ...actionWine, vintage: ~~event.target.value });
    setVintageError(vintage.length > 0 && isNaN(event.target.value));
  };

  const handleWineNameChange = (event) => {
    setActionWine({ ...actionWine, wineName: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setActionWine({ ...actionWine, description: event.target.value });
  };

  const handleRatingChange = (event) => {
    setActionWine({ ...actionWine, rating: ~~event.target.value });
  };

  const handleAction = () => {
    if (onAction) {
      onAction(actionWine);
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
            value={actionWine.brandName}
            onChange={handleBrandNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={vintageError}
            label="Vintage"
            value={vintage}
            onChange={handleVintageChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Wine Name"
            value={actionWine.wineName}
            onChange={handleWineNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Description"
            value={actionWine.description}
            onChange={handleDescriptionChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Rating value={actionWine.rating} onChange={handleRatingChange} />
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

export default WineForm;
