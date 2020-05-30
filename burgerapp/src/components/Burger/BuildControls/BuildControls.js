import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', value : 'salad'},
    {label : 'Meat', value : 'meat'},
    {label : 'Bacon', value : 'bacon'},
    {label : 'Cheese', value : 'cheese'},
];

const buildControls = (props) => {
    return (

        <div className={classes.BuildControls}>
            <p>Current price(USD): <strong>{props.price.toFixed(2)}</strong></p>
            { controls.map( control => (
            <BuildControl 
                key={control.label} 
                label={control.label}
                added={ () => props.ingredientAdded(control.value) }
                removed={ () => props.ingredientRemoved(control.value)}
                disabled={props.disabled[control.value]}
                />
                
            
            ) )}
            <button disabled={!props.purchaseable} className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;