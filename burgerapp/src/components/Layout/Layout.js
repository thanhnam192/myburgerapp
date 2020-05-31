import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer : false});
    }

    drawerToogleHandler = () => {
        this.setState( (prevState) => { return {showSideDrawer : !prevState.showSideDrawer} });
    }


    render(){
        return (
            <Aux>
                <Toolbar drawerToogleClicked={this.drawerToogleHandler} />
                <SideDrawer showSideDrawer={this.state.showSideDrawer} closeSideDrawer={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Aux>
        );
    }

}

export default Layout;