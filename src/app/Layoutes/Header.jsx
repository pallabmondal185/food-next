"use client"
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">Burger <span>King</span></Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link href="/" className="nav-item nav-link active">Home</Link>
                            <Link href="/about" className="nav-item nav-link">About</Link>
                            <Link href="/feature" className="nav-item nav-link">Feature</Link>
                            <Link href="/chef" className="nav-item nav-link">Chef</Link>
                            <Link href="/menu" className="nav-item nav-link">Menu</Link>
                            <Link href="/booking" className="nav-item nav-link">Booking</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <Link href="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
