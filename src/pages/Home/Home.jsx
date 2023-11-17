import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <Helmet>
                <title>Home Page</title>
                <meta title="description" content="hello" />
            </Helmet>
            <h1 className="text-center text-3xl font-bold my-4">Home Page</h1>
            <Link to={'/about'} className="text-center block">About</Link>
        </div>
    )
}

export default Home;