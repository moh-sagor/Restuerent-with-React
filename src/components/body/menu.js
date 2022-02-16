import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import COMMENTS from '../../data/comments.js';
import MenuItem from './menuitem.js';
import DishDetail from './dishdetails.js';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';
import { addComment, fetchDishes } from '../../redux/actionsCreators';
import Loading from './loading.js';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))({
            fetchDishes: () => dispatch(fetchDishes())
        })
    }
}


class Menu extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
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

    componentDidMount() {
        this.props.fetchDishes();
    }


    render() {
        document.title = "Menu";
        if (this.props.dishes.isLoading) {
            return {
                // < Loading />
            }

        }
        else {
            const menu = this.state.dishes.dishes.map(item => {
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
                const comments = this.state.comments.filter(comment => {
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
                        <Modal isOpen={this.state.modalOpen}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);