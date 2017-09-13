import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addItem} from '../ducks/reducer'

class Menu extends Component {
    render() {
        const menu = [
            {
                name: 'Hotdog',
                price: '2.00'
            },
            {
                name: 'Burg',
                price: '3.00'
            },
            {
                name: 'Fries',
                price: '1.50'
            },
            {
                name: 'Solid Gold Hotdog',
                price: '1000.00'
            },
        ].map( (elem, i) => {
            return (
                <div className="menu-item" key={i} onClick={() => this.props.addItem(elem)}>
                    <p>{elem.name}</p>
                    <p>${elem.price}</p>
                </div>
            )
        })
        return (
            <div className='menu' >
                {menu}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, {addItem})(Menu);