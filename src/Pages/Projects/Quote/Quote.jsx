import "./Quote.scss"
import quote from "../../../assets/cotizador.png"
import banner from "../../../assets/banner_1.png"
import { Link } from "react-router-dom"
import HelmetComponents from "../../../components/molecules/Helmet/HelmetComponents"

const Quote = () => {
    return (
        <>
        <HelmetComponents subtitle={"Proyecto cotizador"}></HelmetComponents>
        <div className="Quote">
            <div className="c_newPack">
                <section className="newPack container">
                    <div className="content">
                        <div className="c_int">
                            <h1>¿Cómo se desarrolló?</h1>
                            <p>
                                El cotizador de envíos es una aplicación ejecutable de windows
                                desarrollada en Python usando el framework "flet" para Flutter. El proyecto se desarrolló con el fin
                                de recomendar e importar cotizaciones de envíos por diferentes empresas de paqueterías con el fin
                                de elegir la opción más viable. En el proyecto se utilizó la "flet" para desarrollar toda la parte visual
                                de la aplicación y para el manejo de documentos, datos y cálculos se utilizó Pandas. Con el fin de obtener
                                datos de las paqueterías se utilizó la librería "requests".
                            </p>
                        </div>
                    </div>
                    <div className="img_coffee">
                        <img loading="lazy" src={quote} alt="banner-cotizador" />
                    </div>
                </section>
            </div>
            <div className="c_newPack_2">
                <section className="newPack container">
                    <div className="img_coffee">
                        <img loading="lazy" src={banner} alt="software" />
                    </div>
                    <div className="content">
                        <div className="c_int">
                            <h1>¿Quiéres cotizar una aplicación o sitio web?</h1>
                            <p>
                                Desarrolla al mejor precio tu aplicación, o sitio web, desde un blog, un perfil personal hasta una tienda o plataforma para tu negocio.
                            </p>
                            <div className="btns">
                                <Link to={`https://wa.me/+5213344703129`} target="_blank">
                                    <button className='QuoteButton'>Cotizar gratis</button>
                                </Link>
                                <Link to={`https://scatterscience.com`} target="_blank">
                                    <button className='LearnButton'>Saber más...</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
        </>
    )
}

export default Quote