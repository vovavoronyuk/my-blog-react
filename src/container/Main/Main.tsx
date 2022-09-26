import ProductList from '../../components/Products/ProductList'
import ProductListTwo from 'components/Products/ProductListTwo'
import ProductListThree from '../../components/Products/ProductListThree'
import ProductListFour from '../../components/Products/ProductListFour'
import ProductListFive from '../../components/Products/ProductListFive'
import ProductListSix from 'components/Products/ProductListSix'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

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
                </Routes>
            </Container>
        </>
    )
}

export default Main
