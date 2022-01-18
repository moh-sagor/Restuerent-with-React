import React, { Component } from 'react';
// import DISHES from '../../data/dishes.js';
// import COMMENTS from '../../data/comments.js';
import MenuItem from './menuitem.js';
import DishDetail from './dishdetails.js';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}



class Menu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
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
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
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
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail dish={this.state.selectedDish}
                comments={comments} />

        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
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

export default connect(mapStateToProps)(Menu);