import './style.css';

export const InfoCard = ({ image, title, text }) => {
    return (
        <div className="infocard">
            <div className="area-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="image-infocard">
                <img src={image} alt="Imagem do Infocard" />
            </div>
        </div>
    )
}