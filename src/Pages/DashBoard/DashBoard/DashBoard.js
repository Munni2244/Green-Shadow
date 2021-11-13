import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter ,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import { Button } from '@mui/material';
import './DashBoard.css'
import ManageAllOrders from '../Orders/MyOrders/ManageAllOrders/ManageAllOrders';
import MyOrders from '../Orders/MyOrders/MyOrders';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import Pay from '../Pay/Pay';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../Addreview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AddminRoute from '../../UserLogin/PrivateRoute/AddminRoute';

const drawerWidth = 196;

function DashBoard(props) {
  const {logOut, admin}=useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="">
      <Toolbar />
      <Divider />
      
   
   <div className="dashBoard"> <Link to={`${url}`}> <Button>DashBoard</Button></Link>
     {admin? <Box>
      <Link to={`${url}/allOrders`}><Button >Manage AllOrders</Button></Link><br />
      <Link to={`${url}/manageProducts`}><Button>Manage Products</Button></Link><br />
      <Link to={`${url}/addProducts`}><Button>Add Products</Button></Link><br />
      <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link><br />
       </Box>:
       <Box>
          <Link to={`${url}/myOrders`}><Button>MyOrders</Button></Link> <br />
      <Link to={`${url}/review`}><Button>Review</Button></Link> <br />
      <Link to={`${url}/pay`}><Button>Pay</Button></Link> <br/>
     
       </Box>
       }
        <Link to="/home"><Button>Go Home</Button></Link>
      <Link to="/home"><Button onClick={logOut}>LogOut</Button></Link>
     
       </div>
   
      <Divider />
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
        <Box>
        <Switch>
        <Route exact path={path}>
         <DashBoardHome></DashBoardHome>
        </Route>
        <Route exact path={`${path}/allOrders`}>
         <ManageAllOrders/>
        </Route>
        <Route exact path={`${path}/myOrders`}>
         <MyOrders></MyOrders>
        </Route>
        <Route exact path={`${path}/pay`}>
         <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
         <AddReview></AddReview>
        </Route>
        <Route exact path={`${path}/addProducts`}>
         <AddProduct></AddProduct>
        </Route>
        <AddminRoute exact path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </AddminRoute>
        <Route exact path={`${path}/manageProducts`}>
         <ManageProducts></ManageProducts>
        </Route>
      </Switch>
        </Box>
      </Box>
     
    </Box>
    
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
