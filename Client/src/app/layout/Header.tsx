import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    setDarkMode : (value: boolean) => void;
    darkMode : boolean;
}
export default function Header({setDarkMode, darkMode}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch 
                    onChange={() => setDarkMode(!darkMode)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>
        </AppBar>
    )
}