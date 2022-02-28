import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './loadComments';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "11px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price : {props.dish.price} /=</p>

                    </CardText>

                    <hr />
                    <LoadComments comments={props.comments}
                        commentsIsLoading={props.commentsIsLoading}>
                    </LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />


                </CardBody>

            </Card>
        </div>
    );
}

export default DishDetail;

