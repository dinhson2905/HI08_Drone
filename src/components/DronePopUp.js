import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from 'axios'
class ModalPage extends Component {
    state = {
        modal: false,
       
            id: "",
            name: "",
            type: "",
            size: "",
            engines: "",
            number_rotors: "",
            payload_weight: "",
            flight_time: "",
            max_data_link_range: "",
            power_supply: "",
            avatar: ""
       
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChangeName = (e)=>{
        this.setState({
            name : e.target.value
        })
    }

    handleChangeType = (e)=>{
        this.setState({
            type : e.target.value
        })
    }

    handleChangeSize = (e)=>{
        this.setState({
            size : e.target.value
        })
    }

    handleChangeEngines = (e)=>{
        this.setState({
            engines : e.target.value
        })
    }

    handleChangeNumberRotors = (e)=>{
        this.setState({
            number_rotors : e.target.value
        })
    }

    handleChangePayloadWeight = (e)=>{
        this.setState({
            payload_weight : e.target.value
        })
    }

    handleChangeFlightTime = (e)=>{
        this.setState({
            flight_time : e.target.value
        })
    }

    handleChangeMaxDataLinkRange= (e)=>{
        this.setState({
            max_data_link_range : e.target.value
        })
    }

    handleChangePowerSupply = (e)=>{
        this.setState({
            power_supply : e.target.value
        })
    }

    handleChangeAvatar = (e)=>{
        this.setState({
            avatar : e.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const drone = {
            id: this.props.id,
            name : this.state.name,
            type : this.state.type,
            size : this.state.size,
            engines : this.state.engines,
            number_rotors : this.state.number_rotors,
            flight_time : this.state.flight_time,
            max_data_link_range : this.max_data_link_range,
            power_supply : this.power_supply,
            payload_weight : this.payload_weight,
            avatar : this.state.avatar,
            createdAt : "2/6/2020"
        };

        axios.post(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`, drone)
        .then(res => {
            this.toggle()
        })    
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle}>Add drone</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <p className="h4 text-center mb-4">Drone</p>
                            <label  className="grey-text">
                                Name
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeName}/>
                            <br />
                            <label className="grey-text">
                                Type
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeType}/>
                            <br />
                            <label className="grey-text">
                                Size
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeSize}/>
                            <br />
                            <label className="grey-text">
                                Engines
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeEngines}/>
                            <br />
                            <label className="grey-text">
                                Number rotors
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeNumberRotors}/>
                            <br />
                            <label className="grey-text">
                                Payload weight
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangePayloadWeight}/>
                            <br />
                            <label className="grey-text">
                                Flight time
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeFlightTime}/>
                            <br />
                            <label className="grey-text">
                                Max data link range
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeMaxDataLinkRange}/>
                            <br />
                            <label className="grey-text">
                                Power supply
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangePowerSupply}/>
                            <label className="grey-text">
                                Image link
                            </label>
                            <input type="text"  className="form-control" onChange={this.handleChangeAvatar}/>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick = {this.handleSubmit}>Add</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;