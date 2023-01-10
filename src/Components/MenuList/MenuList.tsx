import MenuItem from '../MenuItem/MenuItem';
import MenuData from '../../menu.json';
const MenuList = () => {
    return (
        <div>
           <h1>Menu</h1>
            {MenuData.map((item) => {
            return (
                <MenuItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    vegetarian={item.vegetarian}/>
            )
            })}
        </div>
    );
}

export default MenuList;