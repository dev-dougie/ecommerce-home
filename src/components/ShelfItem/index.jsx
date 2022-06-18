import { useCart } from '../../providers/addToCart';
import './style.css';

export const ShelfItem = ({ productName, productImage, productDescription, isAvailable, productPrice, colors }) => {

    const {  incrementItens } = useCart();

    return (
        <li className='shelf-item'>
            <img src={productImage} alt={productName} />
            <div className='colors'>
                {colors.map((item, index)=> (<div key={index} style={{backgroundColor: item}}></div>))}
            </div>
            <div className="buy-info">
                <div className="price">
                    <p>{productPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <div className="product-name">
                    {productName}
                </div>
                <div className="product-description">
                    <p>{productDescription}</p>
                </div>
                <div className="buy-button-container">
                    <button onClick={incrementItens} disabled={!isAvailable && true}>Adicionar</button>
                </div>
            </div>
        </li>
    )
}