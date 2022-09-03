import ProductList from '../../components/Products/ProductList'
import ProductListTwo from 'components/Products/ProductListTwo'
import ProductListThree from '../../components/Products/ProductListThree'
type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <ProductList />
            <ProductListTwo />
            <ProductListThree />
        </>
    )
}

export default Main
