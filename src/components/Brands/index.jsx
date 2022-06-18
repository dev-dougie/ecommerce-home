import './style.css';
import Comma from '../../assets/images/comma.png'
import Melissa from '../../assets/images/melissa.png'
import Forever21 from '../../assets/images/forever.png'
import Zara from '../../assets/images/zara.png'
import AnnTaylor from '../../assets/images/ann-taylor.png'

export const Brands = () => {
    const ourPartners = [
        {
            logo: Comma,
            name: 'Comma'
        },
        {
            logo: Melissa,
            name: 'Melissa'
        },
        {
            logo: Forever21,
            name: 'Forever 21'
        },
        {
            logo: Zara,
            name: 'Zara'
        },
        {
            logo: AnnTaylor,
            name: 'Ann Taylor'
        },
    ]

    return (
        <div className="brands">
            <div className="title">
                <h2>Marcas Parceiras</h2>
            </div>
            <div className="logos">
                {
                    ourPartners.map((item, index) => (
                        <div className="logo-container" key={index}>
                            <img src={item.logo} draggable="false" alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}