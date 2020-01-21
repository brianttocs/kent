import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './pages/ProductList';
import Details from './pages/Details';
import Cart from './components/cart';
import Default from './pages/Default';
import Model from './components/Model';
import Contact from './pages/Contact';

//Rider
import Boots from './pages/rider/Boots'
import Breeches from './pages/rider/Breeches'
import Chaps from './pages/rider/Chaps'
import CompAccessories from './pages/rider/CompAccessories'
import CompBreeches from './pages/rider/CompBreeches'
import CompJackets from './pages/rider/CompJackets'
import CompShirts from './pages/rider/CompShirts'
import Gloves from './pages/rider/Gloves'
import Hats from './pages/rider/Hats'
import Helmets from './pages/rider/Helmets'
import JacketsWaistcoats from './pages/rider/JacketsWaistcoats'
import Protectors from './pages/rider/Protectors'
import Safety from './pages/rider/Safety'
import Shirts from './pages/rider/Shirts'
import Socks from './pages/rider/Socks'
import Spurs from './pages/rider/Spurs'
import Straps from './pages/rider/Straps'
import Whips from './pages/rider/Whips'

//Horse
import BandagePads from './pages/horse/BandagePads'
import Bandages from './pages/horse/Bandages'
import BitsAccessories from './pages/horse/BitsAccessories'
import Bridles from './pages/horse/Bridles'
import FlyProtection from './pages/horse/FlyProtection'
import Girths from './pages/horse/Girths'
import Headcollars from './pages/horse/Headcollars'
import LeadRopes from './pages/horse/LeadRopes'
import OverreachBoots from './pages/horse/OverreachBoots'
import Reins from './pages/horse/Reins'
import RugsSheets from './pages/horse/RugsSheets'
import SaddlePadsBP from './pages/horse/SaddlePadsBP'
import SaddlesAccessories from './pages/horse/SaddlesAccessories'
import Stirrups from './pages/horse/Stirrups'
import StirrupsLeather from './pages/horse/StirrupsLeather'
import TendonFetlockBoots from './pages/horse/TendonFetlockBoots'

//Grooming
import Grooming from './pages/grooming/Grooming'

//Souvenirs
import Souvenirs from './pages/souvenirs/Souvenirs'

function App() {
  return (
    <React.Fragment>
 {/** Navbar keeps out side of Switch to make it show in every page */}
      <NavBar />

      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/pages/Contact' component={Contact} />
        <Route path='/pages/cart' component={Cart} />

{/* Rider */}
        <Route path='/pages/rider/Boots' component={Boots} />
        <Route path='/pages/rider/Breeches' component={Breeches} />
        <Route path='/pages/rider/Chaps' component={Chaps} />
        <Route path='/pages/rider/CompAccessories' component={CompAccessories} />
        <Route path='/pages/rider/CompBreeches' component={CompBreeches} />
        <Route path='/pages/rider/CompJackets' component={CompJackets} />
        <Route path='/pages/rider/CompShirts' component={CompShirts} />
        <Route path='/pages/rider/Gloves' component={Gloves} />
        <Route path='/pages/rider/Hats' component={Hats} />
        <Route path='/pages/rider/Helmets' component={Helmets} />
        <Route path='/pages/rider/JacketsWaistcoats' component={JacketsWaistcoats} />
        <Route path='/pages/rider/Protectors' component={Protectors} />
        <Route path='/pages/rider/Safety' component={Safety} />
        <Route path='/pages/rider/Shirts' component={Shirts} />
        <Route path='/pages/rider/Socks' component={Socks} />
        <Route path='/pages/rider/Spurs' component={Spurs} />
        <Route path='/pages/rider/Straps' component={Straps} />
        <Route path='/pages/rider/Whips' component={Whips} />

{/* Horse */}
        <Route path='/pages/horse/BandagePads' component={BandagePads} />
        <Route path='/pages/horse/Bandages' component={Bandages} />
        <Route path='/pages/horse/BitsAccessories' component={BitsAccessories} />
        <Route path='/pages/horse/Bridles' component={Bridles} />
        <Route path='/pages/horse/FlyProtection' component={FlyProtection} />
        <Route path='/pages/horse/Girths' component={Girths} />
        <Route path='/pages/horse/Headcollars' component={Headcollars} />
        <Route path='/pages/horse/LeadRopes' component={LeadRopes} />
        <Route path='/pages/horse/OverreachBoots' component={OverreachBoots} />
        <Route path='/pages/horse/Reins' component={Reins} />
        <Route path='/pages/horse/RugsSheets' component={RugsSheets} />
        <Route path='/pages/horse/SaddlePadsBP' component={SaddlePadsBP} />
        <Route path='/pages/horse/SaddlesAccessories' component={SaddlesAccessories} />
        <Route path='/pages/horse/Stirrups' component={Stirrups} />
        <Route path='/pages/horse/StirrupsLeather' component={StirrupsLeather} />
        <Route path='/pages/horse/TendonFetlockBoots' component={TendonFetlockBoots} />

{/* Grooming */}
      <Route path='/pages/grooming/Grooming' component={Grooming} />

{/* Souvenirs */}
        <Route path='/pages/souvenirs/Souvenirs' component={Souvenirs} />

        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
