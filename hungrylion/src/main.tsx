import { render } from 'preact'
import './index.css'
import {Navbar} from "./components/navbar.tsx";
import Footer from './components/footer.tsx'
import Recipes from './components/recipes.jsx'
render(<Navbar/>, document.getElementById('nav') as HTMLElement)

// render new components here please, make sure to add the elemendId to index.html!



render(<Recipes />, document.getElementById('recipes') as HTMLElement)

render(<Footer/>, document.getElementById('footer') as HTMLElement)