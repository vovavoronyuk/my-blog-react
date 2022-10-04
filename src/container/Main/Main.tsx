import ProductList from '../../components/Products/ProductList'
import ProductListTwo from 'components/Products/ProductListTwo'
import ProductListThree from '../../components/Products/ProductListThree'
import ProductListFour from '../../components/Products/ProductListFour'
import ProductListFive from '../../components/Products/ProductListFive'
import ProductListSix from 'components/Products/ProductListSix'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import NewsPage from 'pages/NewsPage/NewsPage'
import ContactPage from 'pages/ContactPage/ContactPage'
import ProductPage from 'pages/ProductPage/ProductPage'
import MagazinePage from 'pages/ProductPage/MagazinePage'
import AplicationPage from 'pages/ProductPage/AplicationPage'
import ApplePage from 'pages/ProductPage/ApplePage'
import FlyingPage from 'pages/ProductPage/FlyingPage'
import WebFontPage from 'pages/ProductPage/WebFontPage'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Container>
                                <ProductList />
                                <ProductListTwo />
                                <ProductListThree />
                                <ProductListFour />
                                <ProductListFive />
                                <ProductListSix />
                            </Container>
                        }
                    />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="Conference" element={<ProductPage />} />
                    <Route path="Magazine" element={<MagazinePage />} />
                    <Route path="Aplication" element={<AplicationPage />} />
                    <Route path="Apple" element={<ApplePage />} />
                    <Route path="Flying" element={<FlyingPage />} />
                    <Route path="Webfont" element={<WebFontPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
