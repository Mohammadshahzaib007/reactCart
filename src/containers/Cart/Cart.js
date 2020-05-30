import React from 'react';

import classes from './Cart.module.css';
import { connect } from 'react-redux';
import Card from '../../containers/Cart/Cart';

const cart = (props) => {
    
    console.log(props);
        let addedItems = props.items.length ? (
        props.items.map(item => {
        return (
            <Card key={item.id} img={item.img}
                  alt='Laptop1'
                  productName={item.productName}
                  price={item.price} spacifications={item.spacifications} />
    );
        }, [props])
    ): <p>Nothing</p>;

return (
     <div className={classes.CartContainer}>
            {addedItems}
        </div>
);
       
    
};

const mapStateToProps = state => {
    return {
        items: state.addItems
    }
}

export default connect(mapStateToProps)(cart);
