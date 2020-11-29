import React from 'react';
import Mission from './Mission';
import FilterComponent from './FilterComponent';
// import fetch from "isomorphic-fetch";

import './style.css';

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mission: []
        }
        this.filterData = this.filterData.bind(this)
        // fetch("https://api.spaceXdata.com/v3/launches?limit=100")
        // .then(response => response.json()).then(result => {
        // //    console.log('abc mission', result)
        //    this.data = result;
        // })
    }
    
    
    componentDidMount() {
        fetch("https://api.spaceXdata.com/v3/launches?limit=100")
        .then(response => response.json()).then(result => {
            console.log('11', result)
            this.setState({
                mission: result
            })
        })
    }

    filterData(data){
        this.setState({
            mission1: data
        })
    }

    render() {
        console.log('mission', this.state.mission)
        const { mission1, mission } = this.state;
        const missionData = mission1  ? mission1 : mission;
        return(
            <div className="main">
                <div className="spaceTitle">SpaceX Launch Programs</div>
                <div className="filter left">
                    <FilterComponent data={this.filterData} year={this.state.mission} />
                </div>
                <div className="filter right">
                    <Mission mission={missionData} />
                </div>
            </div>
        )
    }
}
export default MainComponent;