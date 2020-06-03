import React, { Component } from 'react';
import axios from 'axios';


class Projects extends Component {
    state = {
        project_id: '',
        date_range: '',
        location: '',
        commander: '',
        drones: '',
        other_per: '',
        showPopup: false
    }

    togglePopup = () => {
        this.setState({showPopup: !this.state.showPopup});
    }

    handleChangeId = event => {
        this.setState({project_id: event.target.value});
    }

    handleChangeDate = event => {
        this.setState({date_range: event.target.value});
    }

    handleChangeLocation = event => {
        this.setState({location: event.target.value});
    }

    handleChangeCommander = event => {
        this.setState({commander: event.target.value});
    }

    handleChangeDrones = event => {
        this.setState({drones: event.target.value});
    }
    handleChangeOther = event => {
        this.setState({other_per: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const project = {
            id: '1000',
            project_id: this.state.project_id,
            date_range: this.state.date_range,
            location: this.state.location,
            commander: this.state.commander,
            drones: this.state.drones,
            other_per: this.state.other_per
        };

        axios.post(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/projects`, project)
        .then(res => {
            console.log(res);
            console.log(res.data)
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Project ID:
                        <input type="text" name="project_id" onChange={this.handleChangeId} />
                    </label>
                    <label>
                        Date:
                        <input type="text" name="date_range" onChange={this.handleChangeDate} />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" onChange={this.handleChangeLocation} />
                    </label>
                    <label>
                        Commander:
                        <input type="text" name="commander" onChange={this.handleChangeCommander} />
                    </label>
                    <label>
                        Drones:
                        <input type="text" name="drones" onChange={this.handleChangeDrones} />
                    </label>
                    <label>
                        Other:
                        <input type="text" name="other" onChange={this.handleChangeOther} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Projects;