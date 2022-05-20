import Cards from "../../Mobile/Cards/Cards";
import ContainerCard from "../../Secondary/ContainerCard/ContainerCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


export default function Main() {

    return (
        <div>
            <NavBar />
            <Banner />
            <Cards />  
            <ContainerCard />
            <Footer />
        </div>
    )
}