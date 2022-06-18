import './style.css'
import Logo from '../../assets/images/maeztra-logo.png'
import Burguer from '../../assets/images/burguer.png'
import Search from '../../assets/images/search-icon.png'
import Mincart from '../../assets/images/mincart-mobile.png'
import { useCart } from '../../providers/addToCart'


export const Header = () => {

    const  {  prodQty } = useCart()

    return (
        <>
            <header>
                <div className="top-bar">
                    <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
                </div>
                <div className="header-desktop">
                    <div className="header-main">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="search">
                            <input type="text" placeholder="O Que Você Busca?" className='search-bar' />
                            <button className='button-search'>Buscar</button>
                        </div>
                        <div className="account">
                            <button className="my-account">Minha Conta</button>
                            <button className="wishlist">Favoritos</button>
                            <button className="minicart">Meu Carrinho</button>
                            <span className='minicart-itens'>{prodQty}</span>
                        </div>
                    </div>
                    <nav className='menu-departaments'>
                        <ul>
                            <li><a href='#'>Novidades</a></li>
                            <li><a href='#'>Vestidos</a></li>
                            <li><a href='#'>Roupas</a></li>
                            <li><a href='#'>Sapatos</a></li>
                            <li><a href='#'>Lingerie</a></li>
                            <li><a href='#'>Acessórios</a></li>
                            <li><a href='#'>OUTLET</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-mobile">
                <div className="header-main">
                        <div className="logo-and-search">
                            <img src={Burguer} alt='Menu' />
                            <img src={Logo} alt="Logo" />
                        </div>

                        <div className="user-action">
                            <button className="search"><img src={Search} alt="Ícone de lupa" /></button>
                            <button className="wishlist"><img src={Mincart} alt="ìcone de sacola" /></button>
                            <span className='minicart-itens'>{prodQty}</span>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}