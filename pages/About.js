import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"E-commerce - About"}>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <img className="mainImg" src="https://uploads-ssl.webflow.com/614d610a3dd0725153e51ded/6222149bfbdb5b0645ae4c0e_eCommerce-Website-Components-photo.jpeg" />
          <div className="allText aboveText">
            <p className="text-blk headingText">
             About Us
            </p>
            <p className="text-blk subHeadingText">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean commodo senectus habitasse, vel pellentesque velit cras nulla. Consequat cursus integer nullam fermentum ornare felis aliquet, posuere dignissim tellus est fames pharetra donec, in facilisi nisl potenti facilisis nibh. Erat odio posuere montes ridiculus faucibus morbi nascetur nisl inceptos, pulvinar curae fringilla felis magnis elementum augue lectus, feugiat rutrum aptent urna quis rhoncus habitant mus.
            </p>
            
          </div>
        </div>
      </div>
      

    </Layout>
  )
}

export default About