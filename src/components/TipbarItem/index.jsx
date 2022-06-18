import './style.css';


export const TipbarItem = ({ image, title, subtitle }) => {
    return (
        <div className="tipbar-info">
            <div className="img">
                <img src={image} alt={title} />
            </div>
            <div className="text">
                <p><strong>{title}</strong></p>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}