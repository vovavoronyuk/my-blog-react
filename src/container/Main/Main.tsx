import ProductList from '../../components/Products/ProductList'
import ProductListTwo from 'components/Products/ProductListTwo'
import ProductListThree from '../../components/Products/ProductListThree'
import ProductListFour from '../../components/Products/ProductListFour'
import ProductListFive from '../../components/Products/ProductListFive'
type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <ProductList />
            <ProductListTwo />
            <ProductListThree />
            <ProductListFour />
            <ProductListFive />
        </>
    )
}

export default Main
