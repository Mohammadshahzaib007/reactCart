import React from 'react';

import classes from './Card.module.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return (
        <div className={classes.Card}>
            <div >
                <img className={classes.Img} src={props.img} alt={props.alt}/>
            </div>
            <div>
                <h3 className={classes.Name}>{props.productName}</h3>
                <p className={classes.Name}>{props.spacifications}</p>
                <h3 className={classes.Name}>Price: '&#8377;' {props.price}</h3>
            </div>
            <div className={classes.Linkdiv}>
                <Link to='' className={classes.Link}>Buy Now</Link>
                <Link to='' className={classes.Link} onClick={props.click}>Add to cart</Link>
            </div>
        </div>
    );
};

export default Card;