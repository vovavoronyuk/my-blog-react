import ProductList from '../../components/Products/ProductList'
import ProductListTwo from 'components/Products/ProductListTwo'
import ProductListThree from '../../components/Products/ProductListThree'
import ProductListFour from '../../components/Products/ProductListFour'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <ProductList />
            <ProductListTwo />
            <ProductListThree />
            <ProductListFour />
        </>
    )
}

export default Main
