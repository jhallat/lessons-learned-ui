import { Grid, IconButton, Paper, Rating, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface BeerItemProps {
  id: string;
  brewer: string;
  brandName: string;
  style: string;
  description: string;
  rating: number;
  onEdit?: (string) => void;
  onDelete?: (string) => void;
}

const containerStyle = {
  padding: "10px",
};

const BeerItem = ({
  id,
  brewer,
  brandName,
  style,
  description,
  rating,
  onEdit,
  onDelete,
}: BeerItemProps) => {
  const onHandleEdit = () => {
    if (onEdit) {
      onEdit(id);
    }
  };

  const onHandleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <Paper sx={containerStyle}>
      <Grid container spacing={0.5}>
        <Grid item xs={11}>
          <Typography variant="h5">{`${brewer} ${brandName}`}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Grid container>
            <Grid item xs={6}>
              <IconButton color="primary" onClick={onHandleEdit}>
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <IconButton color="primary" onClick={onHandleDelete}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Rating value={rating} readOnly />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{style}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BeerItem;
