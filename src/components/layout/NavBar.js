import React from 'react';

function NavBar(props) {

    const [isActiveEstudiante, setisActiveEstudiante] = React.useState(false);
    const [isActiveCurso, setisActiveCurso] = React.useState(false);
    const [isActiveFunciones, setisActiveFunciones] = React.useState(false);
    const [isActiveMenu,setIsActiveMenu]=React.useState(false);

    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <h1 className="title is-5 has-text-black">RetoNativeApps React</h1>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                    onClick={()=>{
                        setIsActiveMenu(!isActiveMenu)
                        }}
                        >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isActiveMenu ? "is-active" : ""}`}>
                    
                    <div className="navbar-start">
                       {/*  <a className="navbar-item">
                            Home
                        </a> */}
                        <div className={`navbar-item has-dropdown ${isActiveEstudiante ? "is-active" : ""}`} >
                            
                            <a className="navbar-link"
                            onClick={()=>{
                                setisActiveEstudiante(!isActiveEstudiante)
                                setisActiveCurso(false)
                                setisActiveFunciones(false)
                                }}
                                >
                                Estudiantes
                            </a>
                            
                            <div className="navbar-dropdown" style={{display:`${isActiveEstudiante?"block":"none"}`}}>
                                
                                <a  href="/estudiantes/ver" className="navbar-item">
                                    Ver 
                                </a>
                                <a href="/estudiantes/crear" className="navbar-item">
                                    Crear 
                                </a>
                            </div>
                            
                        </div>
                        <div className={`navbar-item has-dropdown ${isActiveCurso ? "is-active" : ""}`} >
                            
                            <a className="navbar-link"
                            onClick={()=>{
                                setisActiveCurso(!isActiveCurso)
                                setisActiveEstudiante(false)
                                setisActiveFunciones(false)
                                }}
                                >
                                Cursos
                            </a>
                            
                            <div className="navbar-dropdown" style={{display:`${isActiveCurso?"block":"none"}`}}>
                                
                                <a  href="/cursos/ver" className="navbar-item">
                                    Ver
                                </a>
                                <a href="/cursos/crear" className="navbar-item">
                                    Crear
                                </a>
                            </div>
                        </div>
                        
                        <div className={`navbar-item has-dropdown ${isActiveFunciones ? "is-active" : ""}`} >
                            
                            <a className="navbar-link"
                            onClick={()=>{
                                setisActiveFunciones(!isActiveFunciones)
                                setisActiveCurso(false)
                                setisActiveEstudiante(false)
                                }}
                                >
                                Funciones
                            </a>
                            
                            <div className="navbar-dropdown" style={{display:`${isActiveFunciones?"block":"none"}`}}>
                                
                                <a  href="/funciones/asignarcursos" className="navbar-item">
                                    Asignar cursos
                                </a>
                                <a href="/funciones/top3" className="navbar-item">
                                    Top 3
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;