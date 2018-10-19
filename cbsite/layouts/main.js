import Header from "../src/components/HeaderBar";
import Footer from "../src/components/FooterBar";

export default ({ children }) => (
  <div>
    <Header />
    { children }
    <Footer/>
  </div>
)