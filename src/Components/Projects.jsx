import style from "./estilos/Projects.module.css"

export default function Projects() {
    return(
        <div className={style.Container}>
            <div className={style.Title}>
                <h1>Proyectos</h1>
            </div>
            <div className={style.Card}>
                {/* <h2>Acá va un video lol</h2> */}
                <div className={style.Detail}>
                    <h3>Food App</h3>
                    <p>Diseño y desarrollo de una app de recetas que incluye búsquedas, filtrados, ordenamiento y creación de recetas.</p>
                    <p>Desarrollo de la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.</p>
                    <p>Utilización de la API Spoonacular.</p>
                    <a href=" https://github.com/SophSawczuk/Food-App">Link del repositorio</a> <br/>
                    {/* <a>Link del sitio</a> */}
                    <p className={style.Anti}><i>Octubre 2022</i></p>
                </div>
            </div>
            <div className={style.Card}>
            <iframe width="300" height="280" src="https://www.youtube.com/embed/k36FgeQJcnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <div className={style.Detail}>
                    <h3>Hostel Project</h3>
                    <p>Creación, diseño y desarrollo grupal de una aplicación para un hostel.</p>
                    <p>Aplicación desarrollada en Front-End con React, Redux y Bootstrap y Back-End en Node.js con Express. Base de datos en PostgreSQL y Sequelize.</p>
                    <p>Desarrollo de la app con deploy, auth local y de terceros, pasarela de pagos, filtros combinados, local storage, cloudinary, reviews y puntuación, dashboard admin, notificaciones vía mail y borrado lógico.</p>
                    <a href="https://github.com/kripto-c/HostelProject">Link del repositorio</a> <br/>
                    {/* <a>Link del sitio</a> */}
                    <p className={style.Anti}><i>Noviembre 2022</i></p>
                </div>
            </div>
            <div className={style.Card}>
                {/* <h2>Acá va un video lol</h2> */}
                <div className={style.Detail}>
                    <h3>Sadcom Landing</h3>
                    <p>Diseño y creación de una landing page para la startup Sadcom.</p>
                    <p>Diseño realizado con Figma, Front-End con React Vite, Redux y Bootstrap, Back-End con Express y Node.js, base de datos con PostgreSQL y Sequalize.</p>
                    <p>Desarrollo de la app con deploy, notificaciones vía mail, reviews y borrado lógico.</p>
                    {/* <a>Link del repositorio</a> <br/> */}
                    {/* <a>Link del sitio</a> */}
                    <p className={style.Anti}><i>Diciembre 2022</i></p>
                </div>
            </div>
        </div>
    )
}