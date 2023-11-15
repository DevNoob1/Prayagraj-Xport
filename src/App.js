import './App.css';
import Meet from './components/meet'
import Work from './components/work'
import Navbar from './components/navbar'
import Head from './components/head'
import Self from './components/self'
import Beats from './components/beats'
import Ever from './components/ever'
import Open from './components/open'
import Footer from './components/footer'
import Orange from './components/orange';
function App() {
  return (
    <div className="App">

      <Head />
      <Beats />
      <Orange />
      <Self />
      <Ever />
      <Work />
      <Meet />
      <Open />
      <Footer />
    </div>
  );
}

export default App;
