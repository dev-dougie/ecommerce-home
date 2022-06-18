import './style.css';
import WorldIcon from '../../assets/images/world-icon.png'
import SotckIcon from '../../assets/images/stock-icon.png'
import ChangeIcon from '../../assets/images/change-icon.png'
import TruckIcon from '../../assets/images/truck-icon.png'
import TargetIcon from '../../assets/images/target-icon.png'
import { TipbarItem } from '../TipbarItem';


export const Tipbar = () => {

    const advantages = [
        {
            icon: WorldIcon,
            title: "Produtos importados",
            subtilte: 'Produto de Alta Qualidade'
        },
        {
            icon: SotckIcon,
            title: "Estoque no Brazil",
            subtilte: 'Produtos mais pertos de você'
        },
        {
            icon: ChangeIcon,
            title: "Trocas garantidas",
            subtilte: 'Trocas em até 48 horas, veja as regras'
        },
        {
            icon: TargetIcon,
            title: "Ganhe 5% off",
            subtilte: 'Pagamento à vista no Cartão'
        },
        {
            icon: TruckIcon,
            title: "Frete Grátis",
            subtilte: 'Em compras acima de R$ 499,00'
        }
    ]


    return (
        <div className='tip-bar'>
            <div className="title">
                <h3>Por que comprar na Maeztra?</h3>
            </div>
            <div className="tipbar-carousel">
                {
                    advantages.map((item, index) =>
                    (<TipbarItem
                        key={index}
                        image={item.icon}
                        title={item.title}
                        subtitle={item.subtilte} />)
                    )}
            </div>
        </div>
    )
}