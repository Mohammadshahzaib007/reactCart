import React from  'react';

import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
        <h1>&copy; developed by <span> <div className={classes.Rotate}> mohammad shahzaib</div> </span> </h1>
    </div>
);

export default footer;