import React from "react"
import ProductCard from "./ProductCard"

export default {
    title: "components/ProductCard",
    components: ProductCard,
}

export const Primary = () => {
    return (
        <ProductCard
            title="Voriuko pica"
            description="Kumpis, pievagrybiai, suris, pomidoru padazas, voriukai, desereles, ananasai, kelmuciai, svogunai, paprikos, kiaulienos farsas"
            id="1"
        />
    )
}
