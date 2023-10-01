import {useState} from 'react';
import { NavLink } from 'react-router-dom'
import { HomeOutlined, ScheduleOutlined, MenuOutlined } from '@ant-design/icons';
import '../App.css'

const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const copyrightYear = new Date().getFullYear()
  const menuItem = [
    {path: "/", name: "Home", icon: <HomeOutlined />},
    {path: "/details", name: "Details", icon: <ScheduleOutlined />}
  ]

  return (
    <div className='container'>
        <div style={{width: isOpen?'250px' : '50px'}} className='sidebar'>
          <div className='top-section'>
            <img style={{display: isOpen?'block' : 'none'}} className='logo' src='/ats-logo.svg' alt='This is App Logo'/>
            <h1 style={{display: isOpen?'block' : 'none'}} className='logo-name'>ATS</h1>
            <div style={{marginLeft: isOpen?'100px' : '-4px'}} className='bars'>
              <MenuOutlined onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to = {item.path} key={index} className='link'>
                {/* activeClassName="active" */}
                <div className='icon' title={item.name}>{item.icon}</div>
                <div style={{display: isOpen?'block' : 'none'}} className='link-text' title={item.name}>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <main>
          { children }
          <span className='footer'>Copyright &copy; { copyrightYear }. All Right Reserved.</span>
        </main>
    </div>
  )
}

export default Sidebar