import "./Home.scss"
import CarouselComponent from "../../components/organisms/Carousel/CarouselComponent"
import magazine from "../../assets//revista.png"
import quoteCalculator from "../../assets/cotizador.png"
import codebuilders from "../../assets/codebuilders.png"
import logo from "../../assets/logo.png"
import ili from "../../assets/sitio.png"
import website from "../../assets/sitio_web.png"
import euceda from "../../assets/euceda.png"
import mexcantina from "../../assets/mexcantina.png"
import gruas from "../../assets/gruas.png"
import landing from "../../assets/landing.png"
import linear from "../../assets/lineal.png"
import statistics from "../../assets/estadistica.png"
import blogs from "../../assets/blogs.png"
import utilities from "../../assets/utilidades.png"
import hosting from "../../assets/hosting.png"
import python from "../../assets/python.png"
import logistics from "../../assets/logistica.png"
import blog from "../../assets/banner-blog.png"
import codesi from "../../assets/codesi.png"
import Whatsapp from "../../components/molecules/WhatsApp/WhatsApp"

import { Link } from "react-router-dom"
import CarouselServices from "../../components/organisms/CarouselServices/CarouselServices"
import HelmetComponents from "../../components/molecules/Helmet/HelmetComponents"
const Home = () => {

    const screen = window.screen.width
    const categories = [
        { title: "Dr. Iliannis", image: ili, imgAlt: "image_ili", url: "https://iliannisroa.com/" },
        { title: "CodeBuilders", image: codebuilders, imgAlt: "image_codeBuilders", url: "https://businesscodebuilders.com/" },
        { title: "Web Development", image: blog, imgAlt: "image_blog", url: "https://joeltrincado.blog/" },
        { title: "Euceda Construction", image: euceda, imgAlt: "image_euceda", url: "https://eucedaconstruction.com/" },
        { title: "Mex Cantina", image: mexcantina, imgAlt: "image_mexcantina", url: "https://mex-cantina.com/" },
        { title: "Temachtiani Magazine", image: magazine, imgAlt: "image_temachtiani", url: "https://revistatemachtiani.net/" },
        { title: "Shipping Quote Calculator", image: quoteCalculator, imgAlt: "image_quoteCalculator", url: "/projects/quote-calculator" },
        { title: "Apexgrúas", image: gruas, imgAlt: "image_gruas", url: "https://apexgruas.com/" },
    ]
    const productSend = [
        { title: "Logos", image: logo, imgAlt: "logo", price: 300, message: "I want to know more about logo creation", },
        { title: "Informative Pages", image: landing, imgAlt: "landing", price: 3000, message: "I want to know more about informative pages", view: "https://cornflowerblue-wallaby-596168.builder-preview.com/" },
        { title: "Regression Models with AI", image: linear, imgAlt: "linear", price: 6500, message: "I want a free consultation about Regression Models with AI", view: "https://joeltrincado.blog/10-pasos-para-crear-un-modelo-de-regresion-lineal-exitoso-usando-la-ia-de-python" },
        { title: "eCommerce", image: statistics, imgAlt: "statistics", price: 15000, message: "I want a free consultation about inferential statistics", view: "https://lavenderblush-pigeon-326114.builder-preview.com" },
        { title: "Blogs", image: blogs, imgAlt: "blogs", price: 3000, message: "I want a free consultation to build my blog", view: "https://papayawhip-kudu-957129.builder-preview.com/" },
        { title: "Utility Applications", image: utilities, imgAlt: "utilities", price: 6000, message: "I want a free consultation about an application", view: "https://learn.microsoft.com/en-us/windows-app/overview" },
        { title: "Programming Tutorials", image: python, imgAlt: "python", price: 250, message: "I want information about Python consultations", view: "https://aws.amazon.com/what-is/python/" },
        { title: "Hosting and Domains", image: hosting, imgAlt: "hosting", price: 500, message: "I want information about hosting and domains", view: "https://www.hostinger.com/tutorials/what-is-hosting-and-domain/" },
        { title: "Logistic Regression Models", image: logistics, imgAlt: "logistics", price: 6000, message: "I want information about logistic regression models", view: "https://www.ibm.com/topics/logistic-regression" },
    ]

    return (
        <>
            <HelmetComponents subtitle={"Home"} description={"Offering top-notch web development services, from custom designs and SEO optimization to e-commerce solutions and mobile-friendly sites. Elevate your online presence today!"} keywords={"E-commerce Solutions, Custom Website Design, Web Development Services"}></HelmetComponents>
            <div className='Home'>
                <div className="carouselHome Container">
                    <CarouselComponent />
                </div>
                <div className="mainProducts" id="projects">
                    <fieldset className="container">
                        <legend>Latest Projects</legend>
                    </fieldset>
                    <div className="carousel-ser">
                    <CarouselServices categories={categories}></CarouselServices>
                    </div>
                    <div className="c_newPack">
                        <section className="newPack container">
                            <div className="content">
                                <div className="c_int">
                                    <h1>Why the Need for a Website?</h1>
                                    <p>
                                        Having a website is essential for several reasons.
                                        A website provides an online presence that
                                        allows individuals and businesses to be easily found by potential customers
                                        anytime and anywhere. This increases
                                        visibility and accessibility, which can translate into greater reach and
                                        business opportunities.
                                    </p>
                                    <Link target="_blank" to={'https://joeltrincado.blog/ventajas-de-tener-un-sitio-web-profesional-en-2024'}>
                                        Learn more about web development
                                        {"   "}<i className="pi pi-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img_coffee">
                                <img loading="lazy" src={website} alt="websites" />
                            </div>
                        </section>
                    </div>
                    {/* <fieldset className="container">
                        <legend>Services</legend>
                    </fieldset> */}
                    {/* <section className="section_1 container">
                        {productSend?.map((_, index) => {
                            return (
                                <div className="cardProductMain" key={index}>
                                    <div class="image-area">
                                        <div class="img-wrapper">
                                            <img src={_.image} alt={_.imgAlt} />
                                            <Link to={`https://wa.me/+5213344703129?text=${_?.message}`} target="_blank">
                                                <h2>Consult your idea</h2>
                                            </Link>
                                            {view ?
                                            <Link to={_.view} target="_blank">
                                                 <ul>
                                                    <li><a><img src={view} alt="view" /></a></li>
                                                </ul>
                                            </Link>
                                            :
                                            <></>
                                                }
                                        </div>
                                    </div>
                                    <h3>{_.title}</h3>
                                    <h3 style={{ color: '#E1927F' }}> Starting at ${Number(_.price).toFixed(2)}</h3>
                                </div>
                            )
                        })}
                    </section> */}
                    <div className="c_newPack_2">
                        <section className="newPack container">
                            <div className="img_coffee">
                                <img loading="lazy" src={hosting} alt="hosting" />
                            </div>
                            <div className="content">
                                <div className="c_int">
                                    <h1>Why Choose Our Web Hosting Services?</h1>
                                    <p>Our hosting solutions offer unmatched reliability, speed, and scalability to support your growing online presence.
                                        Enjoy seamless performance, 24/7 support, and the flexibility to customize your hosting environment to fit your specific needs.
                                        Empower your business with a hosting service designed to optimize your website's uptime and security.
                                    </p>
                                    <Link target="_blank" to={"https://wa.me/+5213344703129?text=Hello, I would like to know more about the hosting service"}>Request a Quote
                                        {"   "}<i className="pi pi-arrow-right" />
                                    </Link>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="c_newPack">
                        <section className="newSection container">
                            <h3>Unlock the power of programming with Python! </h3>
                            <p>Start with a personalized tutorial at the best price.</p>
                            <Link to="https://joeltrincado.blog/consultations-and-tutorials">
                                <button>Go to consultations</button>
                            </Link>
                        </section>

                    </div>
                    <div className="c_newPack_2">
                        <section className="newSection_2">
                            <p>COLLABORATORS</p>
                            <img src={codesi} alt="codesi" />
                            <h2>What is CODESI?</h2>
                            <h3>
                                CODESI is an organization formed by a group of young
                                interdisciplinary and computer engineering professionals for teaching
                                new computational technologies; we have highly specialized and certified personnel
                                in each of our areas.
                            </h3>
                            <h3>We develop based on the use of information technologies which
                                is primarily aimed at young people and adults who wish to expand their
                                knowledge in these areas, as well as increase their knowledge and be more
                                competitive in the labor market.</h3>
                            <Link to="https://www.grupocodesi.com/" target="_blank">
                                <button>Programming courses</button>
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
