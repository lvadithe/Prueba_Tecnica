import icons from '../../../utilities'

export default function Cards() {
    return (
        <>
            <div className="mobile_container">
                <div className="icons_container">
                    <img src={icons.vegetarian} alt="icon" />
                    <h1>Vegetarianos</h1>
                </div>
                <div className="icons_container">
                    <img src={icons.main} alt="icon" />
                    <h1>Principales</h1>
                </div>
                <div className="icons_container">\
                    <img src={icons.cake} alt="icon" />
                    <h1>Tortas</h1>
                </div>
                <div className="icons_container">
                    <img src={icons.fast_food} alt="icon" />
                    <h1>Rapido</h1>
                </div>
                <div className="icons_container">
                    <img src={icons.kids} alt="icon" />
                    <h1>Menu Infantil</h1>
                </div>
                <div className="icons_container">
                    <img src={icons.soup} alt="icons" />
                    <h1>Sopas</h1>
                </div>
            </div>
        </>
    )
}