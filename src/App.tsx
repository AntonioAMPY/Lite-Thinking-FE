import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Lite Thinking Test
        </Typography>
        <Grid item>
          <Link to="/form">
            <Typography variant="subtitle1" gutterBottom>
              Form
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/list-companies">
            <Typography variant="subtitle1" gutterBottom>
              List companies
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
