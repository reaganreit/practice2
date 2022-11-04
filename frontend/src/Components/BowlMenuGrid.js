import { Button, TextField } from "@mui/material"
import { Grid } from '@mui/material';

const BowlMenuGrid = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ height: "100%" }}>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>Butter Chicken Bowl</Button>
            </Grid>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>Lemon Chicken Bowl</Button>
            </Grid>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>Veggie Bowl</Button>
            </Grid>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
            </Grid>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
            </Grid>
            <Grid item xs = {3}>
                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
            </Grid>
        </Grid>
    )
}

export default BowlMenuGrid;