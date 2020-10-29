import React from "react"

import ContactBar from '../components/contactBar'
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'

const IndexPage = () => (
  <main>
   <NavigationHeader activeTab="Home" />
   <Footer />
  </main>
)

export default IndexPage