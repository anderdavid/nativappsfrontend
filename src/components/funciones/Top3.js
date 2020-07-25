import React, { Component } from 'react';

class Top3 extends Component {
    render() {
        return (
            <div>
                <h1 className="title has-text-info">Top 3</h1>
                <ul>
                    <li className="has-background-light" style={{marginBottom:"10px",padding:"10px 10px"}}>
                        <strong>top-nombre</strong> con top-inscritos estudiantes inscritos en los ultimos tres meses
                    </li>
                    <li className="has-background-light" style={{marginBottom:"10px",padding:"10px 10px"}}>
                        <strong>top-nombre</strong> con top-inscritos estudiantes inscritos en los ultimos tres meses
                    </li>
                    <li className="has-background-light" style={{marginBottom:"10px",padding:"10px 10px"}}>
                        <strong>top-nombre</strong> con top-inscritos estudiantes inscritos en los ultimos tres meses
                    </li>
                </ul>
            </div>
        );
    }
}

export default Top3;