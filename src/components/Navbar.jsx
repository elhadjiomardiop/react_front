

import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpen = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false)

    return (
        <>
            <nav className="nav">
                <NavLink to={"/"} className="logo">SALOUM SHOP</NavLink>
                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>

                        <li>
                            <NavLink to="/boutique">Boutique</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to="/apropos">A propos</NavLink>
                        </li>

                        
                    </ul>
                </div>
                <button type="button" className="btn" onClick={handleOpen}>
                    Login
                </button>
            </nav>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleClose} role="presentation">
                    <div
                        className="modal-card"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="loginModalTitle"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h3 id="loginModalTitle">Information</h3>
                            <button
                                type="button"
                                className="modal-close"
                                onClick={handleClose}
                                aria-label="Fermer"
                            >
                                x
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Votre texte ici.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modal-btn" onClick={handleClose}>
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
} 

export default Navbar
