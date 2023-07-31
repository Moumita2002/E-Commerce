import React from 'react'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
    return (
        <Layout title={"E-commerce - Page not found"}>
            <div>
                <div className="mars" />
                <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
                <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    You’re requesting a page that's not here.
                </p>
                <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
                <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
            </div>

        </Layout>
    )
}

export default Pagenotfound