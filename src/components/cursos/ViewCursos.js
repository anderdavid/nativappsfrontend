import React, { Component } from 'react';

class ViewCursos extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalActive:'',
            modalMsg :'Esta seguro de eliminar este curso'
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }

    openModal =()=>{
        console.log('openModal()')
        this.setState(
            {modalActive:'is-active'}
        )
    }
    closeModal =()=>{
        console.log('closeModal')
        this.setState(
            {modalActive:''}
        )
    }
    
    render() {
        return (
            <div>
                <p>{JSON.stringify(this.state)}</p>
                <ViewModal active={this.state.modalActive} closeModal={this.closeModal} msg={this.state.modalMsg}/>
                <button className="button is-primary" onClick={this.openModal}>launch modal</button>
            </div>
        );
    }
}

export default ViewCursos;




function ViewModal(props){

    return(
        
        <div className= {`modal ${props.active}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Alerta</p>
                    <button className="delete" aria-label="close" onClick={props.closeModal}></button>
                </header>
                <section className="modal-card-body">
                    <p>{props.msg}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Aceptar</button>
                    <button className="button is-danger" onClick={props.closeModal}>Cancelar</button>
                </footer>
            </div>
        </div>
       
    )
    
}

