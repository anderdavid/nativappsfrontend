import React from 'react';
import { BrowserRouter, Route, Switch, Redirect,useParams } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import CreateEstudiantes from './components/estudiantes/CreateEstudiantes'
import EditEstudiantes from './components/estudiantes/EditEstudiantes'
import ViewEstudiantes from './components/estudiantes/ViewEstudiantes'
import ViewIdEstudiantes from './components/estudiantes/ViewIdEstudiantes'

import CreateCursos from './components/cursos/CreateCursos'
import EditCursos from './components/cursos/EditCursos'
import ViewCursos from './components/cursos/ViewCursos'
import ViewIdCursos from './components/cursos/ViewIdCursos'

import AsignarCursos from './components/funciones/AsignarCursos'
import EstudianteCursos from './components/funciones/EstudianteCursos'
import Top3 from './components/funciones/Top3'

import NavBar from './components/layout/NavBar'


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <section className="section">
        <div className="container">
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" children={<ViewEstudiantes/>} />
                  <Route exact path="/estudiantes/ver" children={<ViewEstudiantes/>} />
                  <Route exact path="/estudiantes/crear" children={<CreateEstudiantes/>} />
                  <Route path="/estudiantes/ver/:id" children={<ViewIdEstudiantes/>} />
                  <Route path="/estudiantes/edit/:id" children={<EditEstudiantes/>} />

                  <Route exact path="/cursos/ver" children={<ViewCursos/>} />
                  <Route exact path="/cursos/crear" children={<CreateCursos/>} />
                  <Route path="/cursos/ver/:id" children={<ViewIdCursos/>} />
                  <Route path="/cursos/edit/:id" children={<EditCursos/>} />

                  <Route exact path="/funciones/asignarcursos" children={<AsignarCursos/>} />
                  <Route exact path="/funciones/estudiantecurso/:idEstudiante" children={<EstudianteCursos/>} />
                  <Route exact path="/funciones/top3" children={<Top3/>} />
                </Switch>
            
            </BrowserRouter>
        </div>
      </section>
    </Provider>
  );
}

export default App;
