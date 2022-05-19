import icons from '../../../utilities'

export default function NavBar() {
    return (
        <div>
            <nav className="_nav_container">
                <div className="_logo_container">
                    <h1>
                        Recipe<span>App</span>
                    </h1>
                </div>
                <div className="_buttons_container">
                    <a href="home">Home</a>
                    <a href="vegetarianos">Vegetarianos</a>
                    <a href="platos_principales">Platos Principales</a>
                    <a href="tortas">Tortas</a>
                    <a href="comida_rapida">Comida Rapida</a>
                    <a href="menu_niños">Menu Niños</a>
                    <a href="sopas">Sopas</a>
                </div>
                <img className="home_icon" src={icons.home} alt="icon" />
            </nav>
        </div>
    )
}