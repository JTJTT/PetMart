import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to PetMart</h1>
                <p></p>
            </header>
            <section className="homepage-banner">
                <img
                    src="/images/petBannerImg.png"
                    alt="Pet Banner"
                    className="homepage-banner-image"
                />
            </section>
            <section className="homepage-categories">
                <h2>Shop by Category</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <img
                            src="/images/dog.png"
                            alt="Dogs"
                            className="category-image"
                        />
                        <h3>Dogs</h3>
                    </div>
                    <div className="category-card">
                        <img
                            src="/images/cat.png"
                            alt="Cats"
                            className="category-image"
                        />
                        <h3>Cats</h3>
                    </div>
                    <div className="category-card">
                        <img
                            src="/images/bird.png"
                            alt="Birds"
                            className="category-image"
                        />
                        <h3>Birds</h3>
                    </div>
                    <div className="category-card">
                        <img
                            src="/images/fish.png"
                            alt="Fish"
                            className="category-image"
                        />
                        <h3>Fish</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;