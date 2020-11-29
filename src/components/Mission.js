import React from 'react';
import './style.css';

class Mission extends React.Component {
    render() {
        const data = this.props.mission;
        return (
            <div className="container">
                {data ? data && data.map(item => (
                    <div className="missionTable">
                        <div className="mainData">
                            <div className="missionImg"><img src={item.links.mission_patch} alt="mission" className="img"/></div>
                            <div className="metadata">
                                <h3 className="title">{item.mission_name} #{item.flight_number}</h3>
                                <div>
                                    <p>Mission ids:</p>
                                    {item.mission_id.map(data => (
                                        <ul>
                                            <li>{data}</li>
                                        </ul>
                                    ))}
                                </div>
                                <p>
                                    Launch Year:
                                    <span>{ item.launch_year}</span>                       
                                </p>
                                <p>
                                    Successful Launch:
                                    <span>{'' + item.launch_success}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )) :
                 (
                     <div>Data Not found</div>
                 )

                } 
            </div>
        )
    }
}

export default Mission;