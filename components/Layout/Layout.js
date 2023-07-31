import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
          <Header></Header>
          <main style={{ minHeight: "84vh" }}>
          <Toaster />
          {children}</main>
          <Footer></Footer>
        </div>
        )
}

Layout.defaultProps={
  title:'E-commerce app',
  description: 'mern stack project',
  keywords: 'mern, mongodb, express, react, node',
  author: 'Moumita'
}
  export default Layout