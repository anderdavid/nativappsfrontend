import React, { Component } from 'react';
import {connect} from 'react-redux'
import {putEstudiantes} from '../../redux'

class EditEstudiantesForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            nombre:props.estudiante.nombre,
            apellido:props.estudiante.apellido,
            edad:props.estudiante.edad,
            email:props.estudiante.email
        }
    }
    componentWillMount =()=>{
        //this.props.resetStatus()
    }
    valueChange =(event)=>{
        var name = event.target.name
        var value=event.target.value

        this.setState({
            [name]:value
        })
    }
    send =(event)=>{
        event.preventDefault()
       
       this.props.putEstudiantes(this.state,this.props.estudianteId)
    }
    render() {
        return (
            <div>
            
          {/*   <p>{JSON.stringify(this.props.state)}</p> */}
           
            <h1 className="title has-text-info">Editar estudiante</h1>
            <div className="columns">
                <div className="column is-three-quarters">
                    <form  onSubmit={this.send}>
                        <div className="field">
                            <label className="label">Nombre:</label>
                            <div className="control">
                                <input className="input" name="nombre" value={this.state.nombre} type="text" placeholder="Ingrese nombre" required={true} onChange={this.valueChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Apellido:</label>
                            <div className="control">
                                <input className="input" name="apellido" value={this.state.apellido} type="text" placeholder="Ingrese apellido" required={true} onChange={this.valueChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Edad:</label>
                            <div className="control">
                                <input className="input" name="edad" value={this.state.edad} type="text" placeholder="Ingrese edad" required={true} onChange={this.valueChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email:</label>
                            <div className="control">
                                <input className="input" name="email" value={this.state.email} type="email" placeholder="Ingrese email" required={true} onChange={this.valueChange}/>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <input type="submit" className="button is-link" value="Actualizar" required={true}/>
                             
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            

          {/*   <p>{JSON.stringify(this.state)}</p> */}
        </div>
        );
    }
}

const mapStateToProps =state=>{
    return{
        state:state
    }
}
const  mapDispatchToProps =dispatch =>{
    return{
      
        putEstudiantes:(state,id)=>dispatch(putEstudiantes(state,id))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEstudiantesForm)