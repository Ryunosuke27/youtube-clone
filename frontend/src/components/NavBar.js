import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FaYoutube } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import {withCookies} from 'react-cookie';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }));


const NavBar = (props) => {
    const classes = useStyles();

    const Logout = () => {
        props.cookies.remove('jwt-token');
        window.location.href = '/';
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <button className = "logo">
                    <FaYoutube/>
                </button>
                <Typography variant="h5" className={classes.title}>
                youtube app
                </Typography>
                <button className = "logout" onClick={()=>Logout()}>
                    <FiLogOut/>
                </button>
            </Toolbar>
        </AppBar>
    )
}

export default withCookies(NavBar)
