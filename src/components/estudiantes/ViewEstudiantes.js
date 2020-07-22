import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantes,deleteEstudiantes} from '../../redux'

class ViewEstudiantes extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount =()=>{
        this.props.getEstudiantes()
    }
    render() {
        
        return (
            <div>
                {JSON.stringify(this.props.state)}
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
        getEstudiantes:()=>dispatch(getEstudiantes()),
        deleteEstudiante:(id)=>dispatch(deleteEstudiantes(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ViewEstudiantes)