import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddPeople from '../AddPeople/AddPeople';
import Footer from '../../Shared/Footer/Footer';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="">
            <Toolbar className="bg-primary" ><span className="text-white fs-5">NLP Lab</span></Toolbar>
            <Divider />
            <a className="text-decoration-none text-dark" href="/home"> <Button color="inherit">Home</Button></a>
            <Divider />
            <a className="text-decoration-none text-dark" href="/peoples"> <Button color="inherit">Peoples</Button></a>
            <Divider />
            <a className="text-decoration-none text-dark" href={`${url}/addPeople`}><Button color="inherit">Add People</Button></a>
            <Divider />
            <button onClick={logOut} className="btn btn-primary my-3">Log Out</button>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div className="">
            <div>
                <Box sx={{ display: 'flex' }}>

                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                            backgroundColor: "#212529"
                        }}
                    >
                        <Toolbar className="bg-primary" >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                        {/* Nested Routes */}
                        <Switch>

                            <Route exact path={path}>
                                <AddPeople></AddPeople>
                            </Route>
                            <Route path={`${url}/addPeople`}>
                                <AddPeople></AddPeople>
                            </Route>

                        </Switch>

                    </Box>
                </Box>

            </div>
            {/* <Footer></Footer> */}
        </div>

    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
