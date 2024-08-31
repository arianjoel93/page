import "./Quote.scss"
import quote from "../../../assets/cotizador.png"
import banner from "../../../assets/banner_1.png"
import { Link } from "react-router-dom"
import HelmetComponents from "../../../components/molecules/Helmet/HelmetComponents"

const Quote = () => {
    return (
        <>
            <HelmetComponents description={"Aplicaciones de escritorio con python. Desarrollo de aplicaciones de Windows con el framework flet de Flutter para Python."} keywords={"aplicaciones de escritorio, desarrollo con python, qué es flet"} subtitle={"Proyecto cotizador"}></HelmetComponents>
            <div className="Quote">
                <div className="c_newPack">
                    <section className="newPack container">
                        <div className="content">
                            <div className="c_int">
                                <h1>How was it developed?</h1>
                                <p>
                                    The shipping quote generator is a Windows executable application developed in Python using the "flet" framework for Flutter. The project was developed to recommend and import shipping quotes from different courier companies to choose the most viable option. The "flet" framework was used to develop the entire visual part of the application, while Pandas was used for handling documents, data, and calculations. The "requests" library was used to obtain data from the courier companies.
                                </p>
                            </div>
                        </div>
                        <div className="img_coffee">
                            <img loading="lazy" src={quote} alt="quote-banner" />
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
                                <h1>Want to get a quote for an application or website?</h1>
                                <p>
                                    Develop your application or website at the best price, whether it's a blog, a personal profile, or a store or platform for your business.
                                </p>
                                <div className="btns">
                                    <Link to={`https://wa.me/+5213344703129`} target="_blank">
                                        <button className='QuoteButton'>Get a free quote</button>
                                    </Link>
                                    <Link to={`https://scatterscience.com`} target="_blank">
                                        <button className='LearnButton'>Learn more...</button>
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