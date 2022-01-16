import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './menuitem.js';
import DishDetail from './dishdetails.js';
import { CardColumns, CardGroup, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';



class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false,

    }
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish });
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }


    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    onDishSelect={this.onDishSelect}
                />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />

        }

        return (
            <div className="container">
                <div className="row">
                    <CardGroup>
                        {menu}
                    </CardGroup>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody> {dishDetail}</ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default Menu;