import React from 'react';

import './style.css';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterYear: [],
            year: '',
            launch_success: '',
            land_success: ''
        }
        this.handleApi = this.handleApi.bind(this);
        this.filterApi = this.filterApi.bind(this);
    }


    handleApi(e, flag) {
        let successfulLaunch = this.state.launch_success;
        let successLand = this.state.land_success;
        let year = this.state.year;
        let selectedYear =  e && e.currentTarget && e.currentTarget.innerText;
        if (flag === "successfull_launch") {
            successfulLaunch = e;
        } else if (flag === "successfull_land") {
            successLand = e;
        } else {
            year = selectedYear;
        }

        // if (selectedYear === this.state.year || e === this.state.land_success || e === this.state.launch_success) {
        //     return 'active';
        // } 

        this.setState({
            year,
            launch_success: successfulLaunch,
            land_success: successLand
        })
        this.filterApi(successfulLaunch, successLand, year);
    }

    filterApi(successfulLaunch, successLand, year){
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        if (successfulLaunch !== '') {
            url += `&launch_success=${successfulLaunch}`
        }
        if (successLand !== '') {
            url += `&land_success=${successLand}`
        }
        if (year !== '') {
            url += `&launch_year=${year}`
        }

        console.log(url)
        fetch(url).then(response => response.json()).then(result => {
            this.props.data(result)
            console.log(result)
        })
    }

    render() {
        let data = this.props.year;
        let yearData = [];
        data && data.filter(item => yearData.push(item.launch_year));

        const year = Array.from(new Set(yearData));
        return (
            <div className="filterTable">
            <div className="filterTitle">Filters</div>
                <div className="yearTable">
                    <div className="launchYear">Launch Year</div>
                    <div className="years">
                    {year.length && year.map(item => (
                        <div className='yearItem'>
                            <button className={this.state.year === item ? 'active' : null} onClick={(e) => this.handleApi(e)}>{item}</button>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="launchBlock">
                    <div className="launchSuccess">SuccessFul Launch</div>
                    <span>
                        <button className={this.state.launch_success === true ? 'active' : null} onClick={() => this.handleApi(true, 'successfull_launch')}>True</button>
                    </span>
                    <span>
                        <button className={this.state.launch_success === false ? 'active' : null} onClick={() => this.handleApi(false, 'successfull_launch')}>False</button>
                    </span>
                </div>
                <div className="landBlock">
                    <div className="launchLand">SuccessFul Landing</div>
                    <span>
                        <button className={this.state.land_success === true ? 'active' : null} onClick={() => this.handleApi(true, 'successfull_land')}>True</button>
                    </span>
                    <span>
                        <button className={this.state.land_success === false ? 'active' : null} onClick={() => this.handleApi(false, 'successfull_land')}>False</button>
                    </span>
                </div>
            </div>
        )
    }

}

export default FilterComponent;