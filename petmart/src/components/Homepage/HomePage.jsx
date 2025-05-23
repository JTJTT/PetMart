import React from 'react';
import './HomePage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Banner */}
            <header className="homepage-header">
                <h1>Welcome to PetMart</h1>
                <p></p>
            </header>

            {/* Carousel */}
            <section className="homepage-banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/public/petBannerImg.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/public/petBannerImg2.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/public/petBannerImg3.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            {/* Shop by Category */}
            <section className="homepage-categories">
                <h2>Shop by Category</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4 categories-grid">
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/dog.png" alt="Dogs" />
                            <Card.Body>
                                <Card.Title>Dogs</Card.Title>
                                <Card.Text>
                                    Find everything you need for your furry friends.
                                </Card.Text>
                                <Button variant="primary">Shop Dogs</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/cat.png" alt="Cats" />
                            <Card.Body>
                                <Card.Title>Cats</Card.Title>
                                <Card.Text>
                                    Explore toys, food, and accessories for your cats.
                                </Card.Text>
                                <Button variant="primary">Shop Cats</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/bird.png" alt="Birds" />
                            <Card.Body>
                                <Card.Title>Birds</Card.Title>
                                <Card.Text>
                                    Browse cages, food, and toys for your feathered friends.
                                </Card.Text>
                                <Button variant="primary">Shop Birds</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/fish.png" alt="Fish" />
                            <Card.Body>
                                <Card.Title>Fish</Card.Title>
                                <Card.Text>
                                    Discover tanks, food, and decorations for your fish.
                                </Card.Text>
                                <Button variant="primary">Shop Fish</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
            {/* Shop by popular products */}
            <section className="homepage-PopularProducts">
                <h2>Popular Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 popular-products-grid">
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/dogFood.png" alt="Dog Food" />
                            <Card.Body>
                                <Card.Title>Dog Food</Card.Title>
                                <Card.Text>$20.00</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/catToy.png" alt="Cat Toy" />
                            <Card.Body>
                                <Card.Title>Cat Toy</Card.Title>
                                <Card.Text>$10.00</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/public/birdCage.png" alt="Bird Cage" />
                            <Card.Body>
                                <Card.Title>Bird Cage</Card.Title>
                                <Card.Text>$50.00</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;