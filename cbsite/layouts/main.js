import Header from "../src/components/HeaderBar";
import Footer from "../src/components/FooterBar";
import "../src/App.css"
import "../src/index.css"

export default ({ children }) => (
  <div>
    <Header />
    { children }
    <Footer/>
  </div>
)