import './style.css';
import CTA from '../../assets/images/banner-cta.png'
import CTAmobile from '../../assets/images/banner-cta-mobile.png'


export const Banner = () => {
    return (
        <>
        <div className="banner-carousel">
            <img src={CTA} alt="Banner CTA" width={600} />
            <img src={CTA} alt="Banner CTA" width={600} />
            <img src={CTA} alt="Banner CTA" width={600} />
            <img src={CTA} alt="Banner CTA" width={600} />
        </div>
        <div className="banner-carousel-mobile">
            <img src={CTAmobile} alt="Banner CTA" width={320} />
            <img src={CTAmobile} alt="Banner CTA" width={320} />
            <img src={CTAmobile} alt="Banner CTA" width={320} />
            <img src={CTAmobile} alt="Banner CTA" width={320} />
        </div>
        </>
    )
}