import Header from "./components/layout/Header";
import Brandings from "./components/shared/Brandings";
import CalltoAction from "./components/shared/CalltoAction";
import Feature from "./components/shared/Feature";
import Hero from "./components/shared/Hero";
import BullerPoints from "./components/shared/BulletPoints";
import Pricing from "./components/shared/Pricing";
import Footer from "./components/layout/Footer";


export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brandings/>
      <Feature/>
      <CalltoAction minify={false}/>
      <BullerPoints/>
      <Pricing/>
      <CalltoAction minify={true}/>
      <Footer/>
    </>
  )
}
