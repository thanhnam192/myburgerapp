import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log(`[OrderSummary] updated`);
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients).map( igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        });
    
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)} USD</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        );
    }
}


export default OrderSummary;