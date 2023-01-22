import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}


// Time: 34:49
export default App;
