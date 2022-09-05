import React from "react"
import Container from "../components/Container/Container"
import ProductsList from "../components/ProductsList/ProductsList"
import Menu from "../components/menu/Menu"
import Filters from "../components/filters/Filters"
import SelectDropDown from "../components/SelectDropDown/SelectDropDown"
import CategoriesList from "../components/categoriesList/CategoriesList"
import { loadProducts, categoriesFiltered, loadCategories, productsSortedByPrice } from "../store/products"
import { useSelector, useDispatch } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()
    dispatch(loadProducts())
    dispatch(loadCategories())

    const data = useSelector((state) => state.entities.products)
    const categories = data.categories

    return (
        <>
            <Container>
                <Filters>
                    <SelectDropDown
                        options={[
                            { value: "price", label: "lowest price" },
                            { value: "popularity", label: "the most popular" },
                        ]}
                        handleChange={(value) => {
                            dispatch(productsSortedByPrice(value))
                        }}
                    />
                </Filters>
                <Menu>
                    <CategoriesList
                        categories={categories}
                        handleClick={(e) => {
                            alert("category")
                        }}
                    />
                    <ProductsList
                        items={data.filteredList.length === 0 ? data.list : data.filteredList}
                        handleClick={(e) => {
                            console.log(e)
                        }}
                    />
                </Menu>
            </Container>
        </>
    )
}

export default Home
