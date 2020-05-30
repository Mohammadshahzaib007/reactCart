import React from 'react';

import classes from './ScrollDown.module.css';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const scrollDown = () => (
    <div className={classes.Downdiv}>
        <h4>Sroll Down to see our products</h4>
       <ArrowDropDownCircleOutlinedIcon className={classes.Svg} />
    </div>
);

export default scrollDown;