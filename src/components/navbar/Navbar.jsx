import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../../assets/logo.svg'
import under_line from '../../assets/nav_underline.svg'
import './navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState('')

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close}  onClick={closeMenu} className="nav-mob-colose" />
        <li><AnchorLink className='anchorLink'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={under_line}/>:<></>}</li>
        <li><AnchorLink className='anchorLink' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==='about'?<img src={under_line}/>:<></>}</li>
        <li><AnchorLink className='anchorLink' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==='services'?<img src={under_line}/>:<></>}</li>
        <li><AnchorLink className='anchorLink' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==='work'?<img src={under_line}/>:<></>}</li>
        <li><AnchorLink className='anchorLink' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={under_line}/>:<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchorLink' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
