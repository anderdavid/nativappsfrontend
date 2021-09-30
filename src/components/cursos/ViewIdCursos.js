import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getCursosId, deleteCursos } from '../../redux';

class ViewIdCursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: '',
      modalMsg: 'Esta seguro borrar este curso',
      idCurso: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (id) => {
    console.log('openModal() ' + id);
    this.setState({
      ...this.state,
      modalActive: 'is-active',
      idCurso: id
    });
  };
  closeModal = () => {
    console.log('closeModal');
    this.setState({
      ...this.state,
      modalActive: ''
    });
  };

  deleteCurso = () => {
    this.closeModal();
    this.props.deleteCursos(this.state.idCurso);
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;
    console.log('id: ' + id);
    this.props.getCursosId(id);
  };
  render() {
    var status = this.props.state.cursosResponse.status;
    console.log('status: ' + status);

    if (!status) {
      var msg = this.props.state.cursosResponse.msg;
      this.content = <div>{msg}</div>;
    } else {
      var curso = this.props.state.cursosResponse.cursos[0];

      this.content = (
        <div>
          <p>
            <strong className="has-text-danger-dark">Id: </strong>
            {curso.id}
          </p>
          <p>
            <strong className="has-text-danger-dark">Nombre: </strong>
            {curso.nombre_curso}
          </p>
          <p>
            <strong className="has-text-danger-dark">Horario: </strong>
            {curso.horario}
          </p>
          <p>
            <strong className="has-text-danger-dark">Fecha de Inicio: </strong>
            {curso.fecha_inicio}
          </p>
          <p>
            <strong className="has-text-danger-dark">Fecha de Fin: </strong>
            {curso.fecha_fin}
          </p>
          <p>
            <strong className="has-text-danger-dark">
              Numero de Estudiantes:{' '}
            </strong>
            {curso.num_estudiantes}
          </p>
        </div>
      );
    }
    return (
      <div>
        <ViewModal
          active={this.state.modalActive}
          closeModal={this.closeModal}
          msg={this.state.modalMsg}
          delete={this.deleteCurso}
        />
        {/* <p>{JSON.stringify(this.props.state.cursosResponse)}</p> */}
        <section className="hero">
          <div className="hero-body has-background-light">
            <div className="container">
              <h1 className="title has-text-info">Ver Curso</h1>
              {this.content}
            </div>
          </div>
        </section>
        <section className="container" style={{ marginTop: '20px' }}>
          <div class="buttons">
            <button
              className="button is-info"
              onClick={() => {
                window.location.href = '/cursos/edit/' + curso.id;
              }}
            >
              Editar
            </button>
            <button
              className="button is-danger"
              onClick={() => {
                this.openModal(curso.id);
              }}
            >
              Eliminar
            </button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCursosId: (id) => dispatch(getCursosId(id)),
    deleteCursos: (id) => dispatch(deleteCursos(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViewIdCursos));

function ViewModal(props) {
  return (
    <div className={`modal ${props.active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Alerta</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          ></button>
        </header>
        <section className="modal-card-body">
          <p>{props.msg}</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={props.delete}>
            Aceptar
          </button>
          <button className="button is-danger" onClick={props.closeModal}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}
