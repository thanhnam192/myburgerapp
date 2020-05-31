import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon : 0.7,
    cheese : 0.5,
    meat : 1.3
};

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad :0,
            bacon :0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4,
        purchaseable : false,
        purchasing : false
    };

    updatePurchasableHandler(ingredients){
        let sum = Object.keys(ingredients)
                        .map( igKey => {
                            return ingredients[igKey];
                        })
                        .reduce( (sum, current) => {
                            return sum + current;
                        } ,0);
        
        this.setState({purchaseable : sum > 0});

    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;


        this.setState({ ingredients : updatedIngredients, totalPrice : newPrice});
        this.updatePurchasableHandler(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if( oldCount === 0 ){
            return;
        }

        let updatedCount = oldCount - 1;
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceReduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceReduction;

        this.setState({ ingredients : updatedIngredients, totalPrice : newPrice});
        this.updatePurchasableHandler(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    };
    


    render(){
        const disabledInfo = {...this.state.ingredients};
        for( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelPurchaing={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;