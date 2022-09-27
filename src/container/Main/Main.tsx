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
                </Routes>
            </Container>
        </>
    )
}

export default Main
