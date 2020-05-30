import React from 'react';

import classes from './Layout.module.css';
import Navigation from '../Navigation/Navigation';
/*import MainHeading from '../MainHeading/MainHeading';
import ScrollDown from '../ScrollDown/ScrollDown';*/

const layout = ( props) => (
    <React.Fragment>
    <div className={classes.Home}>
        <Navigation />
       {/* <MainHeading />
        <ScrollDown />*/}
    </div>
    <main>
        {props.children}
    </main>
    </React.Fragment>
); 

export default layout;