import { dataLinks } from '../../utils/data';
import { ItemsMenu } from '../index';


const Navbar = () => {
  return (
    <nav className='nav'> 
        <ul className='nav__lists'>
            {
                dataLinks.map((menu, index) => {
                    return <ItemsMenu items={menu} key={index}/>  
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar;
