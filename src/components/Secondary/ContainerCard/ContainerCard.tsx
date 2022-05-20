import Card from "../Card/Card";


export default function ContainerCard() {
    return (
        <>
            <h1 className="title_container">Nuevas Recetas</h1>
            <div className="container">
                <div className="container_cards">
                    <Card />
                </div>
            </div>
        </>
    )
}