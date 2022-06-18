import { ShelfItem } from '../ShelfItem';
import './style.css';
import ProductImage01 from '../../assets/images/prod-1.png'
import ProductImage02 from '../../assets/images/prod-2.png'

export const ProductSummary = () => {

    const fakeProducts = [
        {
            Id: 1,
            name: 'Faux Suede Mini Skirt',
            price: 500,
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            image: ProductImage01,
            available: true,
            colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79']
        },
        {
            Id: 2,
            name: 'Ruched Rose Print Mini Skirt',
            price: 320,
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
            image: ProductImage02,
            available: true,
            colors: ['#353535', '#D84E4B', '#CFC9B0', '#EAE9E5']
        },
        {
            Id: 3,
            name: 'Faux Suede Mini Skirt',
            price: 500,
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            image: ProductImage01,
            available: true,
            colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79']
        },
        {
            Id: 4,
            name: 'Ruched Rose Print Mini Skirt',
            price: 320,
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
            image: ProductImage02,
            available: true,
            colors: ['#353535', '#D84E4B', '#CFC9B0', '#EAE9E5']
        }
    ]

    return (
        <div className='main-shelf'>
            <h2>As Mais Pedidas</h2>
            <ul>
                {fakeProducts.map((item, index) => (
                    <ShelfItem
                        key={index}
                        productDescription={item.description}
                        productName={item.name}
                        productPrice={item.price}
                        productImage={item.image}
                        isAvailable={item.available}
                        colors={item.colors} />))}
            </ul>
        </div>
    )
}