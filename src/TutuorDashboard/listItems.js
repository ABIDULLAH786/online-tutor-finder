import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/t/home">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/t/edit-profile">
        <ListItemText primary="My Profile" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/t/account-info">
        <ListItemText primary="Account" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/t/my-subjects">
        <ListItemText primary="My Subjects" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="LogOut" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Our Social Sites</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <a href="https://www.facebook.com/TEKMentor/">
        <ListItemText primary="Facebook" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <a href="https://github.com/ABIDULLAH786">
        <ListItemText primary="GitHub" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <YouTubeIcon />
      </ListItemIcon>
      <a href="https://www.youtube.com/channel/UCnexCMwVHYgBFzPqyyDuZkg">
        <ListItemText primary="Youtube" />
      </a>
    </ListItem>
  </div>
);
