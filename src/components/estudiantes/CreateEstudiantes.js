import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postEstudiantes} from '../../redux'


class CreateEstudiantes extends Component {
    constructor(props) {
        super(props);

        this.state={
            nombre:"",
            apellido:"",
            edad:"",
            email:""
        }

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
        this.props.postEstudiantes(this.state)
    }

    render() {
        if(this.props.state.estudiantesResponse.status){
            window.location.href='/estudiantes/ver'
        }
        return (
            <div>
               {/*  <p>{JSON.stringify(this.props.state)}</p> */}
                <h1 className="title has-text-info">Crear Estudiante</h1>
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
                                    <input type="submit" className="button is-link" value="Guardar" required={true}/>
                                
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    {/* {JSON.stringify(this.state)} */}
                </div>
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
        postEstudiantes:(state)=>dispatch(postEstudiantes(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) ( CreateEstudiantes)