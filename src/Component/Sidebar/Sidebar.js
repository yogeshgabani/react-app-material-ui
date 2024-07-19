import { Box } from "@mui/material";
import { Sidemenulist } from "./Sidebarcss";
import img_logo from "../../Assets/Image/Img/logo-white.png";
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import FileCopySharpIcon from '@mui/icons-material/FileCopySharp';
import InterestsIcon from '@mui/icons-material/Interests';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableViewIcon from '@mui/icons-material/TableView';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

import { useState } from "react";


function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);


    const [subopen, submenuopen] = useState(false);
    const addsubclass = () => {
        submenuopen(!subopen)
    }

    //   const [activeIndex, setActiveIndex] = useState(null);

    //   const handleClick = (index) => {
    //     setActiveIndex(index);
    //   };


    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        }
        else {
            setActiveIndex(index);
        
        }
    };

    // const [activeIndex, setActiveIndex] = useState(null);

    // const handleClick = (index) => {
    //   if (activeIndex === index) {
    //     setActiveIndex(null);
    //   } else {
    //     setActiveIndex(index);
    //   }
    // };
      

    return (
      
      <Box class="">
        <Sidemenulist>
            <Box class="side-menu">
                <Box class="header-logo d-flex align-items-center position-relative">
                    <img className="main-logo" src={img_logo} alt="" />
                    <Box className="side-menu-icon position-absolute">
                        {/* <MenuIcon className="" /> */}
                    </Box>
                </Box>
                <Box class="main-side-menu">
                    <ul className="p-0">
                        <li className={activeIndex === 0 ? 'nav-active' : 'nav-menu'}  >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(0)}>
                            <WidgetsSharpIcon className="text-shadow text-green font-20" /><span>Dashboard</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">General</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Ecommerce</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Projects</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">HRM</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">CRM</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Analytics</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Cripto</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Sales</a></li>    
                            </ul>
                        </li>
                        <h4 className="gege">WEB APPS</h4>
                        <li className={activeIndex === 1 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(1)}>
                            <AppsSharpIcon className="text-shadow text-green font-20" /><span>Apps</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Cards</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Draggablecards</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Range-slider</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Calender</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Contacts</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Notification</a></li>
                                <li className="side-sub-list "><a className="sub-link position-relative" href="#">Treeview</a></li>
                                <li className={subopen ? "active-list" : "side-sub-list side-sub-sub-menu"} >
                                    <a className="sub-link position-relative" onClick={addsubclass}>File Manager<NavigateNextSharpIcon className="sub-arrow position-absolute"  /></a>
                                        <Box class="list-sub-menu-two">
                                        <ul className={subopen ? "sub-sub-list active-sub-menu" : "sub-sub-list "}>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">File Manager</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Files</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">File Details</a></li>
                                        </ul>
                                        </Box>
                                </li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Mail</a></li>    
                            </ul>
                        </li>
                        <li className={activeIndex === 2 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(2)}>
                            <ViewInArSharpIcon className="text-shadow text-green font-20" /><span>Elements</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Alerts</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Avtar</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Button</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Budge</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Dropdown</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">List Group</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Navigation</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Images</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Pagination</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Popover</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Progress</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Tags</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Tabs</a></li>    
                            </ul>
                        </li>
                        <li className={activeIndex === 3 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(3)}>
                            <CategorySharpIcon className="text-shadow text-green font-20" /><span>Advanced UI</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Accodian</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Carousel</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Collepse</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Modal</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Timeline</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Sweet Alert</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Ratings</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Search</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Userlist</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">File Attachments</a></li>
                            </ul>
                        </li>
                        <h4>pages</h4>
                        <li className={activeIndex === 4 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(4)}>
                            <FileCopySharpIcon className="text-shadow text-green font-20" /><span>Pages</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Invoice</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Pricing</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Gallery</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Widgets</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">About US</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Landing</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Faqs</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Settings</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Blog</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Forms</a></li>
                                <li className={subopen ? "active-list" : "side-sub-list side-sub-sub-menu"} onClick={addsubclass}>
                                    <a className="sub-link position-relative">Ecommerce<NavigateNextSharpIcon className="sub-arrow position-absolute" /></a>
                                        <Box class="list-sub-menu-two">
                                        <ul className={subopen ? "sub-sub-list active-sub-menu" : "sub-sub-list "}>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Shop</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Product Details</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Add Product</a></li>
                                        </ul>
                                        </Box>
                                </li>    
                            </ul>
                        </li>
                        <li className={activeIndex === 5 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(5)}>
                            <InterestsIcon className="text-shadow text-green font-20" /><span>Utilities</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Background</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Border</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Display</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Flex</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Height</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Margin</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Padding</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Position</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Width</a></li>    
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Extras</a></li>
                            </ul>
                        </li>
                        <h4>multi level</h4>
                        <li className={activeIndex === 6 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(6)}>
                            <MenuIcon className="text-shadow text-green font-20" /><span>Menu levels</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Level-1</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Level-2</a></li>
                                <li className={subopen ? "active-list" : "side-sub-list side-sub-sub-menu"} onClick={addsubclass}>
                                    <a className="sub-link position-relative">Level-3<NavigateNextSharpIcon className="sub-arrow position-absolute" /></a>
                                        <Box class="list-sub-menu-two">
                                        <ul className={subopen ? "sub-sub-list active-sub-menu" : "sub-sub-list "}>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Level-2.1</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Level-2.2</a></li>
                                            <li className="side-sub-list"><a className="sub-link position-relative" href="#">Level-2.3</a></li>
                                        </ul>
                                        </Box>
                                </li>    
                            </ul>
                        </li>
                        <h4>settings</h4>
                        <li className={activeIndex === 7 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(7)}>
                            <ToggleOffIcon className="text-shadow text-green font-20" /><span>Switcher</span>
                            </Box>
                        </li>
                        <h4 className="pt-20">general</h4>
                        <li className={activeIndex === 8 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(8)}>
                            <WorkspacesIcon className="text-shadow text-green font-20" /><span>Icons</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Fontawesome</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Simple Line Icons</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Iconic Icons</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Flag Icons</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Weather Icons</a></li>
                            </ul>
                        </li>
                        <li className={activeIndex === 9 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(9)}>
                            <BarChartIcon className="text-shadow text-green font-20" /><span>Charts</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Float Charts</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Line Charts</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Bar Charts</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Pivot Charts</a></li>
                            </ul>
                        </li>
                        <h4>components</h4>
                        <li className={activeIndex === 10 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(10)}>
                            <TableViewIcon className="text-shadow text-green font-20" /><span>Tables</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Basics Tables</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Data Tables</a></li>
                            </ul>
                        </li>
                        <li className={activeIndex === 11 ? 'nav-active' : 'nav-menu'} >
                            <Box className="sidemenu-item position-relative d-flex align-items-center gap-10" onClick={() => handleClick(11)}>
                            <GpsFixedIcon className="text-shadow text-green font-20" /><span>Maps</span>
                                <NavigateNextSharpIcon className="arrow-right position-absolute" /> 
                            </Box>
                            <ul className={isOpen ? "p-0 side-sub-menu active-menu" : "side-sub-menu p-0"}>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">GPS Maps</a></li>
                                <li className="side-sub-list"><a className="sub-link position-relative" href="#">Vector Maps</a></li>
                            </ul>
                        </li>
                    </ul>

                </Box>

            </Box>
        </Sidemenulist>
      </Box>
    );
  }
  
  export default Sidebar;