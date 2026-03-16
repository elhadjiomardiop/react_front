import ProduitCard from "./ProduitCard"


const Section1 = ({ products }) => {


    return (
        <section className="product-section">
            <div className="product-grid">
            {products.map((product) => (
                <ProduitCard key={product.id} product={product} />
            ))}
        </div>
        </section>
    )
}

export default Section1