import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './hooks/ThemeContext'

export default function Navbar() {
    let { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary-subtle fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><span className='codeColorLogo'>Code</span><span className='saarthiColorLogo'>Saarthi</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                        </ul>
                        <span style={{ cursor: "pointer" }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='me-5'>
                            {theme === "dark" ? (
                                <i className="bi bi-brightness-high text-warning fs-4"></i>
                            ) : (
                                <i className="bi bi-moon fs-4"></i>
                            )}
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
