import { useState } from 'react';
import image from '../../assets/images/image-newsletter.png'
import mailIcon from '../../assets/images/newsletter-mail-icon.png'
import './style.css';

export const Newsletter = () => {

    const [showNewsletter, setShowNewsletter] = useState(true);

    const handleCloseModal = () => {
        setShowNewsletter(false);
    }

    return (
        <div className={showNewsletter ? 'newsletter-container' : 'hidden'} onClick={handleCloseModal}>

            <div className='newsletter-content'>
                <div className="newsletter-close-container">
                    <button className='newsletter-close' onClick={handleCloseModal}>FECHAR</button>
                </div>
                <div className="newsletter-main">
                 
                        <img src={image} draggable="false" alt="Homem agachado amarrando o cadarço" className='modal-image'/>
                   
                    <div className='newsletter-form'>
                        <img src={mailIcon} dragable="false" alt="Ícone de e-mail" />
                        <span className='newsletter-title'>Bem Vindo à MAEZTRA</span>
                        <span className='newsletter-subtitle'>Receba em Primeira mão <br/><b>desconto e ofertas exclusivas</b></span>
                        <form action="" id='form'>
                            <input type="email" placeholder='Digite seu e-mail' />
                            <button className='newsletter-send' type='button'>enviar</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}