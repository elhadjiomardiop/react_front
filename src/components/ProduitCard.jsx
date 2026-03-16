import React from 'react'

const ProduitCard = ({ product }) => {
    return (
        <article className="product-card">
            <div
                className="product-image"
                style={{ background: product.accent }}
                aria-hidden="true"
            />
            <div className="product-body">
                <div className="product-meta">
                    <span className="product-category">{product.category}</span>
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="product-button" type="button">
                        Ajouter
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProduitCard
