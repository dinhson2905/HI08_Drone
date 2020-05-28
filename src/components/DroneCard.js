import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
class DroneCard extends Component {
    render() {
        return (
            <Card >
                <CardImg top width="100%" src={this.props.drone.avatar} />
                <CardBody>
                <CardTitle style={{textAlign:"center"}}>{this.props.drone.name}</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to={'./drones/'+this.props.drone.id} >
                        <Button>More</Button>
                    </Link>
                </CardBody>
            </Card>
        );
    }
}

export default DroneCard;