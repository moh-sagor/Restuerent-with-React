import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "11px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price : {props.dish.price} /=</p>


                    </CardText>
                </CardBody>

            </Card>
        </div>
    );
}

export default DishDetail;