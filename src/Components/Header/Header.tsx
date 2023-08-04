import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'

function Header() {
    return (
        <AppBar position="fixed" color="secondary" elevation={0}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    DAOMatcher
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
