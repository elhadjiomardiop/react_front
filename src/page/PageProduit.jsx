import React from 'react'
import Section1 from '../components/Section1'
import image1 from '../assets/product_img4.png'



const products = [
    {
        id: 1,
        name: "Casque Bluetooth",
        category: "Audio",
        price: "29 900 FCFA",
        description: "Un son clair avec reduction de bruit et 24h d'autonomie.",
        accent: "linear-gradient(135deg, #206e3d 0%, #8fd3f4 100%)",
    },
    {
        id: 2,
        name: "Montre Connectee",
        category: "Accessoires",
        price: "19 500 FCFA",
        description: "Suivi d'activite, notifications et etancheite IP67.",
        accent: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    },
    {
        id: 3,
        name: "Sac Urbain",
        category: "Mode",
        price: "22 000 FCFA",
        description: "Compact, resistant a l'eau et organise pour le quotidien.",
        accent: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    },
    {
        id: 4,
        name: "Clavier Mecanique",
        category: "Gaming",
        price: "34 900 FCFA",
        description: "Switchs reactifs, retroeclairage doux et construction solide.",
        accent: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    },
    {
        id: 5,
        name: "Enceinte Nomade",
        category: "Audio",
        price: "15 900 FCFA",
        description: "Compacte et puissante pour vos sorties et pique-niques.",
        accent: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
    },
    {
        id: 6,
        name: "Lampe Bureau LED",
        category: "Maison",
        price: "12 500 FCFA",
        description: "Lumiere ajustable, bras flexible et port USB integre.",
        accent: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    },
    
]

const PageProduit = () => {
    return (
        <div>
            <h1>Tous vos produits sont disponible ici</h1>
            <Section1 products={products} />
        </div>
        
    )
}

export default PageProduit