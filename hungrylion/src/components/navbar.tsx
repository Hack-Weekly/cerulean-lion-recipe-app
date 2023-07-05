import Icon from '../assets/cookbook.svg'
import Lion from '../assets/cerulianlogo.svg'
import {useState} from "preact/hooks";

export function Navbar(){
    const [activePage, setActivePage] = useState('')
    return (
        <nav className="bg-white shadow">
            <div
                className="container flex items-center py-8 mx-auto">
                <div className="flex items-center">
                    <img src={Lion} alt="logo" className="mr-2"/>
                    <p className='font-extrabold text-blue-500 md:text-xl sm:text-m whitespace-nowrap'>Hungry Lion</p>
                </div>
                <div className='container flex justify-center'>
                <a href="#"
                   className={`flex items-center text-black ${activePage === 'recipes' ? 'border-blue-500' : ''} mx-1.5 sm:mx-6`}
                   onMouseEnter={() => setActivePage('recipes')}
                   onMouseLeave={() => setActivePage('')}
                >
                    {activePage === 'recipes' && <img src={Icon} alt="icon" className="inline-block mr-3 h-6 w-6"/>}
                    Recipes
                </a>

                <a href="#"
                   className={`flex items-center text-black ${activePage === 'cuisines' ? 'border-blue-500' : ''} mx-1.5 sm:mx-6`}
                   onMouseEnter={() => setActivePage('cuisines')}
                   onMouseLeave={() => setActivePage('')}
                >
                    {activePage === 'cuisines' && <img src={Icon} alt="icon" className="inline-block mr-3 h-6 w-6"/>}
                    Cuisines
                </a>

                <a href="#"
                   className={`flex items-center text-black ${activePage === 'meal of the day' ? 'border-blue-500' : ''} mx-1.5 sm:mx-6`}
                   onMouseEnter={() => setActivePage('meal of the day')}
                   onMouseLeave={() => setActivePage('')}
                >
                    {activePage === 'meal of the day' && <img src={Icon} alt="icon" className="inline-block mr-3 h-6 w-6"/>}
                    Meal of the Day
                </a>
                </div>
            </div>
        </nav>
    )
}