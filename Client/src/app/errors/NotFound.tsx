import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <Container component={Paper} >
            <Typography gutterBottom variant="h3">Oops - we could not find what you are looking for</Typography>
            <Button component={Link} to='/catalog' fullWidth>Go back to shop</Button>

        </Container>
    )
}