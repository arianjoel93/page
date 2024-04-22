import "./Home.scss"
import CarouselComponent from "../../components/organisms/Carousel/CarouselComponent"
import revista from "../../assets//revista.png"
import cotizador from "../../assets/cotizador.png"
import codebuilders from "../../assets/codebuilders.png"
import duenas from "../../assets/duenas.png"
import focus from "../../assets/focus.png"
import ia from "../../assets/ia.gif"
import sitio from "../../assets/sitio_web.png"
import view from "../../assets/icons/view.svg"

import landing from "../../assets/landing.png"
import lineal from "../../assets/lineal.png"
import estadistica from "../../assets/estadistica.png"
import blogs from "../../assets/blogs.png"
import utilidades from "../../assets/utilidades.png"
import hosting from "../../assets/hosting.png"
import python from "../../assets/python.png"
import logistica from "../../assets/logistica.png"
import blog from "../../assets/banner-blog.png"
import codesi from "../../assets/codesi.png"
import Whatsapp from "../../components/molecules/WhatsApp/WhatsApp"




import { Link } from "react-router-dom"
import CarouselServices from "../../components/organisms/CarouselServices/CarouselServices"
import HelmetComponents from "../../components/molecules/Helmet/HelmetComponents"

const Home = () => {

    const screen = window.screen.width
    const categories = [
        { title: "CodeBuilders", image: codebuilders, imgAlt: "image_codeBuilders", url: "https://businesscodebuilders.com/" },
        { title: "Blog de desarrollo Web", image: blog, imgAlt: "image_blog", url: "https://scatterscience.com/" },
        // { title: "Dueñas construcción", image: duenas, imgAlt: "image_duenas", url: "https://duenasconstrucciones.com/" },
        { title: "Focus Editorial", image: focus, imgAlt: "image_focus", url: "https://focusglobalaccs.com/" },
        { title: "Revista Temachtiani", image: revista, imgAlt: "image_temachtiani", url: "https://revistatemachtiani.net/" },
        { title: "Cotizador de envíos", image: cotizador, imgAlt: "image_cotizador", url: "/proyectos/cotizador" },
    ]
    const productSend = [
        { title: "Páginas informativas", image: landing, imgAlt: "landing", price: 3000, message: "Quiero saber más sobre las páginas informativas", view: "https://cornflowerblue-wallaby-596168.builder-preview.com/" },
        { title: "Modelos de regresión con IA", image: lineal, imgAlt: "lineal", price: 6500, message: "Quiero una consulta gratis sobre Modelos de Regreción con IA", view: "https://medium.com/datos-y-ciencia/machine-learning-supervisado-fundamentos-de-la-regresi%C3%B3n-lineal-bbcb07fe7fd" },
        { title: "eCommerce", image: estadistica, imgAlt: "estadistica", price: 15000, message: "Quiero una consulta grátis sobre estadística inferencial", view: "https://lavenderblush-pigeon-326114.builder-preview.com" },
        { title: "Blogs", image: blogs, imgAlt: "blogs", price: 3000, message: " Quiero una consulta gratis para construir mi blog", view: "https://papayawhip-kudu-957129.builder-preview.com/" },
        { title: "Aplicaciones de utilidades", image: utilidades, imgAlt: "utilidades", price: 6000, message: "Quiero una consulta gratis sobre una palicación", view: "https://learn.microsoft.com/es-es/windows-app/overview" },
        { title: "Consultas de Python", image: python, imgAlt: "python", price: 250, message: "Quiero información sobre las consultas de Python", view: "https://aws.amazon.com/es/what-is/python/" },
        { title: "Hosting y dominios", image: hosting, imgAlt: "hosting", price: 500, message: "Quiero información sobre hosting y dominios", view: "https://www.hostinger.es/tutoriales/hosting-y-dominio/" },
        { title: "Modelos de regresión logística", image: logistica, imgAlt: "logistica", price: 6000, message: "Quiero información sobre los modelos de regreción logística", view: "https://www.ibm.com/es-es/topics/logistic-regression" },
    ]

    return (
        <>
            <HelmetComponents subtitle={"Inicio"}></HelmetComponents>
            <div className='Home'>
                <div className="carouselHome Container">
                    <CarouselComponent />
                </div>
                <div className="mainProducts" id="projects">
                    <fieldset className="container">
                        <legend>Últimos proyectos</legend>
                    </fieldset>
                    {screen > 1280 ?
                        <div className="c_products container">
                            {categories.map((_, index) => {
                                return (
                                    <Link to={_?.url} key={index} className="Product">
                                        <div className="cardProduct">
                                            <div className="c_cardProduct">
                                                <img src={_.image} alt={_.imgAlt} loading="lazy" />
                                            </div>
                                        </div>
                                        <h2>{_.title}</h2>
                                    </Link>
                                )
                            })}
                        </div> :
                        <CarouselServices categories={categories}></CarouselServices>}
                    <div className="c_newPack">
                        <section className="newPack container">
                            <div className="content">
                                <div className="c_int">
                                    <h1>¿Por qué la necesidad de un sitio web?</h1>
                                    <p>
                                        Contar con un sitio web es esencial por varias razones.
                                        Un sitio web proporciona presencia en línea que
                                        permite a las personas y empresas ser encontradas fácilmente por clientes
                                        potenciales en cualquier momento y desde cualquier lugar. Esto aumenta la
                                        visibilidad y la accesibilidad, lo que puede traducirse en un mayor alcance y
                                        oportunidades de negocio.
                                    </p>
                                    <Link target="_blank" to={'https://scatterscience.com/la-necesidad-de-un-sitio-web'}>
                                        Saber más de desarrollo web
                                        {"   "}<i className="pi pi-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img_coffee">
                                <img loading="lazy" src={sitio} alt="sitio" />
                            </div>
                        </section>
                    </div>
                    <fieldset className="container">
                        <legend>Proyectos más solicitados</legend>
                    </fieldset>
                    <section className="section_1 container">
                        {productSend?.map((_, index) => {
                            return (
                                <div className="cardProductMain" key={index}>
                                    <div class="image-area">
                                        <div class="img-wrapper">
                                            <img src={_.image} alt={_.imgAlt} />
                                            <Link to={`https://wa.me/+5213344703129?text=${_?.message}`} target="_blank">
                                                <h2>Consulta tu idea</h2>
                                            </Link>
                                            <Link to={_?.view} target="_blank">
                                                <ul>
                                                    <li><a><img src={view} alt="view" /></a></li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                    <h3>{_.title}</h3>
                                    <h3 style={{ color: '#E1927F' }}> A partir de ${Number(_.price).toFixed(2)}</h3>
                                </div>
                            )
                        })}
                    </section>
                    <div className="c_newPack">
                        <section className="newPack container">
                            <div className="img_coffee">
                                <img loading="lazy" src={ia} alt="ia" />
                            </div>
                            <div className="content">
                                <div className="c_int">
                                    <h1>¿Por qué un modelo de predicción con Machine Learning?</h1>
                                    <p>Con la IA tienes mayor precisión al analizar datos complejos,
                                        rapidez en la generación de predicciones en tiempo real, escalabilidad
                                        para manejar grandes volúmenes de datos, etc.Estas características hacen que los modelos de predicción
                                        con IA sean una opción atractiva en una variedad de campos, permitiendo tomar
                                        decisiones informadas y eficientes basadas en análisis avanzados de datos.
                                    </p>
                                    <Link target="_blank" to={'https://scatterscience.com/'}>Saber más de Machine Learning
                                        {"   "}<i className="pi pi-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="c_newPack_2">
                        <section className="newSection container">
                            <h3>¡Desbloquea el poder de la programación con Python! </h3>
                            <p>Comienza con un curso personalizado y al mejor precio.</p>
                            <Link to="https://scatterscience.com/cursos">
                                <button>Ir a cursos</button>
                            </Link>
                        </section>

                    </div>
                    <div className="c_newPack_3">
                        <section className="newSection_2">
                            <p>COLABORADORES</p>
                            <img src={codesi} alt="codesi" />
                            <h2>¿Qué es CODESI?</h2>
                            <h3>
                                CODESI es una organización formada por un grupo de jóvenes
                                interdisciplinarios e ingenieros en informática para la enseñanza de
                                nuevas tecnologías computacionales; contamos con personal ampliamente
                                especializado y certificado en cada una de nuestras áreas.
                            </h3>
                            <h3>Nos desarrollamos con base al uso de las tecnologías de información la cual
                                esta principalmente dirigida a jóvenes y adultos que desean ampliar sus
                                saberes en estas áreas, así como incrementar sus conocimientos y ser más
                                competitivos laboralmente.</h3>
                            <Link to="https://www.grupocodesi.com/" target="_blank">
                                <button>CURSOS DE PROGRAMACIÓN</button>
                            </Link>
                        </section>
                    </div>
                </div>
                <Whatsapp />
            </div>
        </>
    )
}

export default Home
