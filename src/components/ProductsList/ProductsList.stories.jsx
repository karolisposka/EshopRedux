import React, { useState } from "react"
import ProductsList from "./ProductsList"

export default {
    title: "components/ProductsList",
    components: ProductsList,
}

const items = [
    {
        id: 1,
        created_at: "2022-08-31T08:26:21.000Z",
        category: "Pica",
        title: "Voriuko pica",
        description: "Kumpis, pievagrybiai, suris, pomidoru padazas",
        price: "9.00",
    },
    {
        id: 2,
        created_at: "2022-08-31T08:28:30.000Z",
        category: "Pica",
        title: "Margarita",
        description: "Pomidoru padazas, suris, pomidorai",
        price: "6.99",
    },
]

export const Primary = () => {
    const [expanded, isExpanded] = useState(false)
    return <ProductsList items={items} />
}
