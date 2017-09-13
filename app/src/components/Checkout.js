import React, { Component } from 'react';
import Button from './Button';
import {connect} from 'react-redux'

class Checkout extends Component {

    

    render() {
        const items = this.props.items.map((elem) => {
            return (<li>{elem.name}</li>)
        })
        return (
            <div className="checkout">
                <h1>Your Order</h1>
                <ul className="checkout-list">
                    {items}
                </ul>
                <Button />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.items
    }
}



export default connect(mapStateToProps)(Checkout);