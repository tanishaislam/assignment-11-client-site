import Banner from "./Banner";
import Footer from "../Shared/Footer"
import Feature from "./Feature";
import ExilentService from "./ExilentService";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <ExilentService></ExilentService>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;