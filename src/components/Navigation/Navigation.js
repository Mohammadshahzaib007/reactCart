import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const navigation = () => (
    <nav>
        <div className={classes.NavContianer}>
            <div className={classes.Mania}>
                <Link to="/" className={classes.Logo}
                    style={{textTransform: 'none'}}        
                className={classes.Link}>LaptopMania</Link>
            </div>

            <div className={classes.cartDiv}>
                <Link to="/-cart" className={classes.Link}><ShoppingCartOutlinedIcon style={{ fontSize: 30, marginRight: '40px', transform: 'rotate(-10deg)'}}/></Link>
                <Link to="" className={classes.Link}>Log in</Link>
            </div>
        </div>
    </nav>
    
    
);

export default navigation;