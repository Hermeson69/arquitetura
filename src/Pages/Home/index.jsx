import React, {Fragment} from "react";
import Navbar from "../../components/Navbar";
import Slider from "./home_components/Slider";

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <Slider/>
        </Fragment>
    );
}

export default Home;