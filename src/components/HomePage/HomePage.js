import React from 'react';

import Card from '../../UI/Card/Card';
import Footer from '../Footer/Footer';

import MainHeading from '../MainHeading/MainHeading';
import ScrollDown from '../ScrollDown/ScrollDown';

import classes from './HomePage.module.css';
import { connect } from 'react-redux';

const HomePage = (props) => {
    
   const handleclick = (id) => {
       props.addToCart(id);
        console.log(`clicked`, props);
    }
    
    let cards = props.items.map(item => {
        return (
            <Card key={item.id} img={item.img}
                  alt='Laptop1'
                  productName={item.productName}
                  price={item.price} spacifications={item.spacifications} click={() => {handleclick(item.id)}}/>
);
    });
    
    return(
         <React.Fragment>
            <div className={classes.Home}>
                <MainHeading />
                <ScrollDown />
            </div>
        
            <div className='cardContainer'>
                {cards}
            </div>
            
            <Footer />
        </React.Fragment>
)
    };

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch({type:'ADD_TO_CART',id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);