import img from "../../../assets/Grupo.png";

export default function Footer() {
    return(
        <>
            <div className="container_footer">
                <h1>Con el Patrocinio de</h1>
                <img className="img_footer" src={img} alt="food" />
            </div>
        </>
    )
}