import './style.css';
import Facebook from '../../assets/images/facebook-icon.png';
import Instragram from '../../assets/images/instagram-icon.png';
import Linkedin from '../../assets/images/linkedin-icon.png';
import YoutTube from '../../assets/images/youtube-icon.png';
import Visa from '../../assets/images/visa-icon.png'
import MasterCard from '../../assets/images/mastercard-icon.png'
import VTEX from '../../assets/images/vtex-icon.png'
import Maeztra from '../../assets/images/maeztra-icon.png'



export const Footer = () => {
    const socialMediaIcons = {
        Facebook,
        Instragram,
        Linkedin,
        YoutTube
    }

    const creditCardsIcon = {
        Visa,
        MasterCard
    }

    const enviromentAndCompany = {
        VTEX,
        Maeztra
    }

    const CopyRightSection = () => {
        return (
            <section className="copyright">
                <div className="social">
                    <a href="https://www.facebook.com/maeztraconsultoria/" target="_blank">
                        <img src={socialMediaIcons.Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/maeztra/" target="_blank">
                        <img src={socialMediaIcons.Linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/maeztra_consultoria/" target="_blank">
                        <img src={socialMediaIcons.Instragram} alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/c/QuatrodigitalBr" target="_blank">
                        <img src={socialMediaIcons.YoutTube} alt="YouTube" />
                    </a>
                </div>

                <div className="cards-payment">
                    <img src={creditCardsIcon.Visa} alt="Visa" />
                    <img src={creditCardsIcon.MasterCard} alt="MasterCard" />
                    <img src={creditCardsIcon.Visa} alt="Visa" />
                    <img src={creditCardsIcon.MasterCard} alt="MasterCard" />
                </div>

                <div className="developed-by">
                    <figure>
                        <figcaption>Powered by</figcaption>
                        <img src={enviromentAndCompany.VTEX} alt="VTEX" />
                    </figure>
                    <figure>
                        <figcaption>Developed by</figcaption>
                        <img src={enviromentAndCompany.Maeztra} alt="Maeztra" />
                    </figure>
                </div>
            </section>
        )
    }

    return (
        <>
            <footer className='desktop-footer'>
                <section className="newsletter">
                    <p>Recebe Nossa Newsletter</p>
                    <form action="">
                        <input type="email" placeholder="Digite seu e-mail" />
                        <button type='submit'>Enviar</button>
                    </form>
                </section>
                <section className="institucional">
                    <div className="column">
                        <p>Informações</p>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Prazo de Envio</a></li>
                            <li><a href="#">Trocas e Devoluções</a></li>
                            <li><a href="#">Promoções e Cupons</a></li>
                        </ul>

                    </div>
                    <div className="column">
                        <p>Minha Conta</p>
                        <ul>
                            <li><a href="#">Minha Conta</a></li>
                            <li><a href="#">Meus Pedidos</a></li>
                            <li><a href="#">Cadastre-se</a></li>
                        </ul>

                    </div>
                    <div className="column">
                        <p>Onde nos Encontrar</p>
                        <ul>
                            <li> <a href="#">Lojas</a></li>
                            <li> <a href="#">Endereço</a></li>
                        </ul>
                    </div>
                </section>
                <CopyRightSection />
            </footer>

            {/* ----- */}
            <footer className="mobile-footer">
                <section className="newsletter">
                    <p>Recebe Nossa Newsletter</p>
                    <form>
                        <input type="text" placeholder="Digite seu e-mail" />
                        <button>Enviar</button>
                    </form>
                </section>

                <section className="institucional">
                    <div className="column">
                        <div className="click option-1">
                            <p>Informações</p><p className="more">+</p>
                        </div>
                        <ul className="list-option1">
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Prazo de Envio</a></li>
                            <li><a href="#">Trocas e Devoluções</a></li>
                            <li><a href="#">Promoções e Cupons</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="click option-2">
                            <p>Minha Conta</p><p className="more">+</p>
                        </div>
                        <ul className="list-option2">
                            <li><a href="">Minha Conta</a></li>
                            <li><a href="">Meus Pedidos</a></li>
                            <li><a href="">Cadastre-se</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="click option-3">
                            <p>Onde nos Encontrar</p><p className="more">+</p>
                        </div>
                        <ul className="list-option1">
                            <li><a href="">Lojas</a></li>
                            <li><a href="">Endereço</a></li>
                        </ul>
                    </div>
                </section>

                < CopyRightSection />
            </footer>
        </>
    )
};