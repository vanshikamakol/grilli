import React from 'react';
import './styles.css';

// Import images from assets
import butterChickenImg from '../assests/images/butter-chicken.jpg';
import paneerTikkaImg from '../assests/images/paneer-tikka.jpg';
import dalMakhaniImg from '../assests/images/dal-makhani.jpg';
import biryaniImg from '../assests/images/biryani.jpg';
import samosaImg from '../assests/images/samosa.jpg';
import gulabJamunImg from '../assests/images/gulab-jamun.jpg';
import rasmalaiImg from '../assests/images/rasmalai.jpg';
import drinkssImg from '../assests/images/drinkss.jpg';



// Sample Menu Data
const menuItems = [
    { id: 1, name: "Butter Chicken", price: "₹350", image: butterChickenImg },
    { id: 2, name: "Paneer Tikka", price: "₹300", image: paneerTikkaImg },
    { id: 3, name: "Dal Makhani", price: "₹200", image: dalMakhaniImg },
    { id: 4, name: "Biryani", price: "₹400", image: biryaniImg },
    { id: 5, name: "Samosa", price: "₹150", image: samosaImg },
    { id: 7, name: "Gulab Jamun", price: "₹100", image: gulabJamunImg },
    { id: 8, name: "Rasmalai", price: "₹120", image: rasmalaiImg },
    { id: 9, name: "Drinks", price: "₹170", image: drinkssImg },

];

const Menu = () => {
    return (
        <div className="menu">
            <h2>North Indian Menu</h2>
            <div className="menu-items">
                {menuItems.map(item => (
                    <div className="menu-card" key={item.id}>
                        <img src={item.image} alt={item.name} className="menu-image" />
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
