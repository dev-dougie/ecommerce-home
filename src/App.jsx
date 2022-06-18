import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Newsletter } from './components/Newsletter'
import { Header } from './components/Header'
import { Banner } from './components/Banner/index.'
import { Tipbar } from './components/Tipbar'
import { Brands } from './components/Brands'
import { InfoCard } from './components/InfoCard'
import InfoCardImage from './assets/images/new-collection.png'
import InfoCardImageMob from './assets/images/newcollection-mobile.png'
import { Footer } from './components/Footer'
import { ProductSummary } from './components/ProductSummary'


function App() {

  const isMobile = screen.width <= 1024

  const infoCardDetails = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien. ',
    imageDesktop: InfoCardImage,
    imageMobile: InfoCardImageMob

  }

  return (
    <div className="App">
      <Newsletter />
      <Header />
      <main>
        <Banner />
        <Tipbar />
        <Brands />
       <ProductSummary />
        <InfoCard
          image={isMobile ? infoCardDetails.imageMobile : infoCardDetails.imageDesktop}
          text={infoCardDetails.text}
          title={infoCardDetails.title} />
      </main>
      <Footer />
    </div>
  )
}

export default App
