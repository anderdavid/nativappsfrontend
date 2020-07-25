import React, { Component } from 'react';
import {connect} from 'react-redux'
import {top3} from '../../redux'

class Top3 extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount =()=>{
        this.props.top3()
    }
    
    render() {
        var status =this.props.state.funcionesResponse.status
        if(!status){
            this.content=<p className="has-text-light has-background-danger" style={{padding:"10px 10px"}}>{this.props.state.funcionesResponse.msg}</p>
        }else{
            this.content =this.props.state.funcionesResponse.top3.map(
                curso=> <li className="has-background-light" style={{marginBottom:"10px",padding:"10px 10px"}}>
                    <strong>{curso.nombre_curso}</strong> con {curso.inscritos} estudiantes inscritos en los ultimos tres meses
                </li>
            )
        }
        return (
            <div>
               {/*  <p>{JSON.stringify(this.props.state.funcionesResponse)}</p> */}
                <h1 className="title has-text-info">Top 3</h1>
                <ul>
                    {this.content}
                </ul>
            </div>
        );
    }
}

const mapStateToProps =state=>{
    return{
        state:state
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        top3:()=>dispatch(top3()),
    }
      
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Top3)