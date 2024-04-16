import "./TemplatesExample.scss"
import { Galleria } from 'primereact/galleria';
import img_1 from "../../assets/templates/1.png"
import img_2 from "../../assets/templates/2.png"
import img_3 from "../../assets/templates/3.png"
import img_5 from "../../assets/templates/5.jpeg"
import img_6 from "../../assets/templates/6.jpeg"
import img_7 from "../../assets/templates/7.jpeg"
import img_8 from "../../assets/templates/8.jpeg"
import img_9 from "../../assets/templates/9.jpeg"
import img_10 from "../../assets/templates/10.jpeg"
import img_11 from "../../assets/templates/11.jpeg"
import img_12 from "../../assets/templates/12.jpeg"
import { Link } from "react-router-dom";
import HelmetComponents from "../../components/molecules/Helmet/HelmetComponents";



const TemplatesExample = () => {
    const images = [
        { "itemImageSrc": img_1, "title": "", "url": "https://linen-owl-370181.builder-preview.com ", "alt": " template_1", "thumbnailImageSrc": img_1 },
        { "itemImageSrc": img_2, "title": "", "url": "https://papayawhip-kudu-957129.builder-preview.com/", "alt": " template_2", "thumbnailImageSrc": img_2 },
        { "itemImageSrc": img_3, "title": "", "url": "https://cornflowerblue-wallaby-596168.builder-preview.com/", "alt": " template_3", "thumbnailImageSrc": img_3 },
        { "itemImageSrc": img_5, "title": "", "url": "https://chocolate-capybara-602347.builder-preview.com/", "alt": " template_5", "thumbnailImageSrc": img_5 },
        { "itemImageSrc": img_6, "title": "", "url": "https://darkturquoise-ram-151583.builder-preview.com/", "alt": " template_6", "thumbnailImageSrc": img_6 },
        { "itemImageSrc": img_7, "title": "", "url": "https://saddlebrown-goshawk-984162.builder-preview.com/", "alt": " template_7", "thumbnailImageSrc": img_7 },
        { "itemImageSrc": img_8, "title": "", "url": "https://ghostwhite-giraffe-421515.builder-preview.com/", "alt": " template_8", "thumbnailImageSrc": img_8 },
        { "itemImageSrc": img_9, "title": "", "url": "https://lightcoral-moose-296465.builder-preview.com/", "alt": " template_9", "thumbnailImageSrc": img_9 },
        { "itemImageSrc": img_10, "title": "", "url": "https://tan-snail-175774.builder-preview.com/", "alt": " template_10", "thumbnailImageSrc": img_10 },
        { "itemImageSrc": img_11, "title": "", "url": "https://orangered-heron-505519.builder-preview.com/", "alt": " template_10", "thumbnailImageSrc": img_11 },
        { "itemImageSrc": img_12, "title": "", "url": "extension://fdhgeoginicibhagdmblfikbgbkahibd/html/site_status_block_page.html", "alt": " template_10", "thumbnailImageSrc": img_12 },
    ]

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];


    const itemTemplate = (item) => {
        return (
            <Link className="itemTemplate_a" to={item?.url} target="_blank">
                <img className="itemTemplate" src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: "400px", objectFit: "cover" }} />
            </Link>
        )
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', height: "100px", objectFit: "cover" }} />
    }


    return (
        <>
        <HelmetComponents subtitle={"Plantillas"}></HelmetComponents>
            <div className="TemplatesExample container">
                <h1>Ejemplos de plantillas</h1>
                <div className="containerTemplates">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '1080px' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>
            </div>
        </>
    )
}

export default TemplatesExample