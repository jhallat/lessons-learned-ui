import { AppBar, Box, Button, Container, styled, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

const StyledHeading = styled("h1")({
  fontFamily: "Cantarell",
  fontStyle: "italic",
  whiteSpace: "nowrap",
});

const ButtonBar = styled("div")({
  display: "flex",
  width: "100%",
  margin: "10px",
});

const Offset = styled("div")({
  height: "20px",
});

const Layout = ({ children }) => {
  const router = useRouter();

  const handleWineRoute = (event) => {
    event.preventDefault();
    router.push("/wine");
  };

  const handleBeerRoute = (event) => {
    event.preventDefault();
    router.push("/beer");
  };

  return (
    <Container>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyledHeading>Inner Critic</StyledHeading>
            <ButtonBar>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
                onClick={handleWineRoute}
              >
                Wine
              </Button>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
                onClick={handleBeerRoute}
              >
                Beer
              </Button>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
              >
                Restaurants
              </Button>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
              >
                Hiking
              </Button>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
              >
                Coffee
              </Button>
              <Button
                sx={{
                  my: 2,
                  background: "transparent",
                  color: "white",
                  display: "block",
                }}
              >
                Destinations
              </Button>
            </ButtonBar>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
