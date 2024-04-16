import { Helmet } from "react-helmet"

const HelmetComponents = ({ subtitle, description, keywords }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            {!subtitle ? <title>Joel Trincado</title> : <title>{subtitle} | Joel Trincado</title>}
            {
                description && <meta name="description" content={description} />
            }
            {
                keywords && <meta name="keywords" content={keywords} />
            }
        </Helmet>
    )
}

export default HelmetComponents