import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div>
            <Helmet>
                <title>About Page</title>
                <meta title="description" content="About" />
            </Helmet>
            <h1 className="text-center text-3xl font-bold my-4">About Page</h1>
            <Link to="/" className="text-center block">Home</Link>
        </div>
    )
}

export default About;