import { Headerstyled } from "./Headercss";
import * as React from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import ReplyIcon from '@mui/icons-material/Reply';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import AirplayIcon from '@mui/icons-material/Airplay';
import TerminalIcon from '@mui/icons-material/Terminal';
import EditIcon from '@mui/icons-material/Edit';
import PushPinIcon from '@mui/icons-material/PushPin';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MicIcon from '@mui/icons-material/Mic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DeleteIcon from '@mui/icons-material/Delete';
import avtar_img from "../../Assets/Image/Img/acc-img.jpg";
import CloseIcon from '@mui/icons-material/Close';
import shop_img_one from "../../Assets/Image/Img/2.jpg";
import shop_img_two from "../../Assets/Image/Img/4.jpg";
import shop_img_three from "../../Assets/Image/Img/3.jpg";
import shop_img_four from "../../Assets/Image/Img/5.jpg";
import shop_img_five from "../../Assets/Image/Img/e1.jpg";
import email_one from "../../Assets/Image/Img/e2.jpg";
import email_two from "../../Assets/Image/Img/e4.jpg";
import email_three from "../../Assets/Image/Img/e3.jpg";
import email_four from "../../Assets/Image/Img/e5.jpg";
import email_five from "../../Assets/Image/Img/e1.jpg";
import media_img from "../../Assets/Image/Img/1.png";
import media_img_two from "../../Assets/Image/Img/6.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import noti_img_two from "../../Assets/Image/Img/2 (2).jpg";
import noti_img_three from "../../Assets/Image/Img/10.jpg";
import noti_img_four from "../../Assets/Image/Img/e1.jpg";
import noti_img_five from "../../Assets/Image/Img/13 (1).jpg";
import msg_three from "../../Assets/Image/Img/3 (2).jpg";
import Tab from '@mui/material/Tab';
import DownloadIcon from '@mui/icons-material/Download';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import '../../../src/canvas.css';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import call_one from "../../Assets/Image/Img/c1.jpg";
import call_two from "../../Assets/Image/Img/c2.jpg";
import call_three from "../../Assets/Image/Img/c3.jpg";
import call_four from "../../Assets/Image/Img/c4.jpg";
import call_five from "../../Assets/Image/Img/c5.jpg";
import us_flag from "../../Assets/Image/Icon/us_flag.jpg";
import argentina_flag from "../../Assets/Image/Icon/argentina.jpg";
import austria_flag from "../../Assets/Image/Icon/austria.jpg";
import brazil_flag from "../../Assets/Image/Icon/brazil.jpg";
import canada_flag from "../../Assets/Image/Icon/canada.jpg";
import franch_flag from "../../Assets/Image/Icon/french_flag.jpg";
import germany_flag from "../../Assets/Image/Icon/germany_flag.jpg";
import india_flag from "../../Assets/Image/Icon/india_flag.jpg";
import italy_flag from "../../Assets/Image/Icon/italy_flag.jpg";
import malaysia_flag from "../../Assets/Image/Icon/malaysia.jpg";
import mexico_flag from "../../Assets/Image/Icon/mexico.jpg";
import russia_flag from "../../Assets/Image/Icon/russia_flag.jpg";
import singapore_flag from "../../Assets/Image/Icon/singapore.jpg";
import spain_flag from "../../Assets/Image/Icon/spain_flag.jpg";
import uk_flag from "../../Assets/Image/Icon/uk.jpg";
import poland_flag from "../../Assets/Image/Icon/poland.jpg";
import uae_flag from "../../Assets/Image/Icon/uae.jpg";
import china_flag from "../../Assets/Image/Icon/china.jpg";
import gal_one from "../../Assets/Image/Img/g1.jpg";
import gal_two from "../../Assets/Image/Img/g2.jpg";
import gal_three from "../../Assets/Image/Img/g3.jpg";
import gal_four from "../../Assets/Image/Img/g4.jpg";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import img_logo from "../../Assets/Image/Img/logo-white.png";



function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [submenuopen, submenuclose] = useState("false");
  const ToggleClass_menu = () => {
    submenuclose(!submenuopen);
  };

  const [viewmenu, setviewmenu] = useState(false);
  const viewmore = () => {
    setviewmenu(!viewmenu);
  }

  const [showmenu, setshowmenu] = useState("false");
  const showmore = () => {
    setshowmenu(!showmenu);
  };


  const [state, setState] = React.useState({
    right: false,
  });

  // menubar header side menu open

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState('11');
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const [value2, setValue2] = React.useState('14');
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };


  // setting canvas open menu

  const [open1, setOpen1] = React.useState(false);

  const toggleDrawer1 = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [alignment, setAlignment] = React.useState('web');

  const tooglebtn = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // password reset button

  const [password, setpassword] = React.useState(false);
  const handleOpen1 = () => setpassword(true);
  // const handleClose1 = () => setpassword(false);

  const [activeIndex, setActiveIndex] = useState(null);


  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  // full screen
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };


  // search menu open
  const [issearch, setsearch] = useState(false);
  const searchopen = () => {
    setsearch(!issearch); 
   };
  return (
    <Headerstyled>
      <Box className="canvas-open">
        <Box className="header-main d-flex justify-content-between align-items-center position-relative gap-10">
          <Box className=" d-flex justify-content-between align-items-center w-100 short-menu-down">
            {/* <Box className="header-main d-flex justify-content-between align-items-center position-relative"> */}
            <Box className="d-flex align-items-center gap-20 header-input sub-menu-flex">
              {/* <MenuIcon className="menu-icon icon-hover text-shadow" onClick={showmore} /> */}
              <Box className="w-100 position-relative d-none">
                <input className="input-search " type="text" placeholder="Search..."></input>
                <SearchIcon className="search-icon position-absolute" />
              </Box>
            </Box>
            <Box>
              <img className="logo-img-header" src={img_logo} alt="" />
            </Box>
            <Box className={viewmenu ? "d-flex align-items-center sub-menu-flex sub-down active" : "d-flex align-items-center sub-menu-flex sub-down"}>
              <ul className="menu-list d-flex align-items-center gap-10 p-0">
                <li className="icon-hover">
                  <LanguageIcon className="text-shadow text-green" onClick={handleOpen} />
                </li>
                <li className={activeIndex === 0 ? "icon-hover position-relative active" : "icon-hover position-relative unactive"} >
                  <Badge className="badge-title" badgeContent={5} color="prima">
                    <LocalGroceryStoreIcon className="text-green text-shadow " onClick={() => handleClick(0)} color="action" />
                  </Badge>
                  <Box className={!submenuopen ? " box-shadow-content box-line-shadow position-absolute header-store-menu show" : "header-store-menu box-shadow-content box-line-shadow position-absolute"}>
                    <Box className="store-menu-list d-flex justify-content-between align-items-center">
                      <Box className="store-menu-title">
                        <h6 className="m-0">Shopping Cart</h6>
                        <p className="m-0">Total items: 5</p>
                      </Box>
                      <Box>
                        <a href="#">View All</a>
                      </Box>
                    </Box>
                    <ul className="p-0">
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="shop-list-one">
                          <img className="" src={shop_img_one} alt="" />
                          <Avatar alt="Remy Sharp" src={shop_img_one} />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Bluetooth Earbuds</p>
                          <p className="m-0 font-12"><span>Color: </span>Blue</p>
                          <p className="m-0 font-12"><span>Quantity: </span>2</p>
                          <p className="price-tag m-0 font-14 font-weight-500 position-absolute"> Price: <span className="tx-secondary font-14">$23</span></p>
                          <a href="#"><DeleteIcon className=" delete-icon font-20 position-absolute text-danger" /></a>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="shop-list-one">
                          <img className="" src={shop_img_two} alt="" />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Beautiful Pink Teddybear</p>
                          <p className="m-0 font-12"><span>Color: </span>Pink</p>
                          <p className="m-0 font-12"><span>Quantity: </span>1</p>
                          <p className="price-tag m-0 font-14 font-weight-500 position-absolute"> Price: <span className="tx-secondary font-14">$12</span></p>
                          <a href="#"><DeleteIcon className=" delete-icon font-20 position-absolute text-danger" /></a>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="shop-list-one">
                          <img className="" src={shop_img_three} alt="" />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Modern Chair</p>
                          <p className="m-0 font-12"><span>Color: </span>White</p>
                          <p className="m-0 font-12"><span>Quantity: </span>3</p>
                          <p className="price-tag m-0 font-14 font-weight-500 position-absolute"> Price: <span className="tx-secondary font-14">$38</span></p>
                          <a href="#"><DeleteIcon className=" delete-icon font-20 position-absolute text-danger" /></a>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="shop-list-one">
                          <img className="" src={shop_img_four} alt="" />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Professional Camera With Lens </p>
                          <p className="m-0 font-12"><span>Color: </span>Black</p>
                          <p className="m-0 font-12"><span>Quantity: </span>1</p>
                          <p className="price-tag m-0 font-14 font-weight-500 position-absolute"> Price: <span className="tx-secondary font-14">$235</span></p>
                          <a href="#"><DeleteIcon className=" delete-icon font-20 position-absolute text-danger" /></a>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="shop-list-one">
                          <img className="" src={shop_img_five} alt="" />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Iconic Women's Dress</p>
                          <p className="m-0 font-12"><span>Color: </span>Red</p>
                          <p className="m-0 font-12"><span>Quantity: </span>2</p>
                          <p className="price-tag m-0 font-14 font-weight-500 position-absolute"> Price: <span className="tx-secondary font-14">$32</span></p>
                          <a href="#"><DeleteIcon className=" delete-icon font-20 position-absolute text-danger" /></a>
                        </Box>
                      </a>
                      </li>
                    </ul>
                    <Box className="shop-footer ">
                      <a className=" d-block" href="#">Process To Checkout</a>
                    </Box>
                  </Box>
                </li>
                <li className={activeIndex === 1 ? "icon-hover email-dropmenu position-relative active" : "icon-hover email-dropmenu position-relative unactive"}>
                  <Badge className="badge-title" badgeContent={2} color="prima">
                    <MailIcon className="text-green text-shadow " color="action" onClick={() => handleClick(1)} />
                  </Badge>
                  <Box className="box-shadow-content inbox-mobile box-line-shadow position-absolute header-store-menu ">
                    <Box className="store-menu-list d-flex justify-content-between align-items-center">
                      <Box className="store-menu-title">
                        <h6 className="m-0">Messages</h6>
                        <p className="m-0">You have 5 unread messages</p>
                      </Box>
                      <Box>
                        <a href="#">View All</a>
                      </Box>
                    </Box>
                    <ul className="p-0">
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Avatar alt="Remy Sharp" src={email_one} />
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Socrates Itumay</p>
                          <p className="m-0 font-12">Consetetur sanctus consetetur amet amet stet,.</p>
                          <p className="m-0 delete-icon font-11 line-1 position-absolute" >2hr</p>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="position-relative chat-online">
                          <Avatar className="" alt="Remy Sharp" src={email_two} />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Sadipscing Et</p>
                          <p className="m-0 font-12">Accusam amet ea voluptua labore ipsum.</p>
                          <p className="m-0 delete-icon font-11 line-1 position-absolute" >1 D</p>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Box className="position-relative chat-online">
                          <Avatar className="" alt="Remy Sharp" src={email_three} />
                        </Box>
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Ea Labore</p>
                          <p className="m-0 font-12">Diam ea nonumy kasd eirmod sed..</p>
                          <p className="m-0 delete-icon font-11 line-1 position-absolute" >2 D</p>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Avatar alt="Remy Sharp" src={email_four} />
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Kasd Ipsum</p>
                          <p className="m-0 font-12">Et diam aliquyam ut dolor labore consetetur.</p>
                          <p className="m-0 delete-icon font-11 line-1 position-absolute" >1 W</p>
                        </Box>
                      </a>
                      </li>
                      <li><a className="d-flex align-items-center gap-10" href="#">
                        <Avatar alt="Remy Sharp" src={email_five} />
                        <Box className="shop-list-one-title text-start position-relative w-100">
                          <p className="m-0 font-13 font-weight-500 ">Eirmod Emet</p>
                          <p className="m-0 font-12">Est sea accusam no ea sea ea.</p>
                          <p className="m-0 delete-icon font-11 line-1 position-absolute" >2 W</p>
                        </Box>
                      </a>
                      </li>
                    </ul>
                    <Box className="shop-footer ">
                      <a className=" d-block" href="#">MARK ALL AS READ  </a>
                    </Box>
                  </Box>
                </li>
                <li className={activeIndex === 2 ? "icon-hover reply-dropmenu position-relative active" : "icon-hover reply-dropmenu position-relative unactive"} >
                  <ReplyIcon className="text-shadow text-green" onClick={() => handleClick(2)} />
                  <Box className="box-shadow-content box-line-shadow reply-mobile position-absolute header-store-menu ">
                    <Box className="store-menu-list d-flex justify-content-between align-items-center">
                      <Box className="store-menu-title">
                        <h6 className="m-0">Shortcuts</h6>
                        <p className="m-0">At nonumy duo dolores ipsum.</p>
                      </Box>
                      <Box className="short-btn d-flex br-4">
                        <a href="#"><EditCalendarIcon className="short-icon p-5 text-shadow" /></a>
                        <a href="#"><AddIcon className="short-icon p-5 text-shadow" /></a>
                      </Box>
                    </Box>
                    <ul className="p-0 short-list">
                      <li>
                        <Tooltip title="Calendar" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><CalendarMonthIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Contact" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><PeopleIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="File Manager" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><FolderIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Mail" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><InsertDriveFileIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Gallery" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><InsertPhotoIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Blog" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><ArticleIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Shop" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><LocalGroceryStoreIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip title="Forms" placement="top">
                          <a className="d-flex justify-content-center align-items-center" href="#"><ArticleIcon className="short-icon-list text-primary text-shadow" /></a>
                        </Tooltip>
                      </li>
                    </ul>
                    <Box className="shop-footer ">
                      <a className=" d-block" href="#">MARK ALL AS READ  </a>
                    </Box>
                  </Box>
                </li>
                <li className="icon-hover">
                  <ZoomOutMapIcon className={isFullScreen ? "text-shadow text-green" : "text-shadow text-green"} onClick={toggleFullScreen} />
                </li>
                <li className="icon-hover">
                  {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button className="canvas-btn" onClick={toggleDrawer(anchor, true)}>
                        <Badge className="menu-icon" color="secondary" variant="dot">
                          <MenuIcon className=" text-shadow text-green" />
                        </Badge>
                      </Button>
                      <Drawer className="canvas-one" anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <Box className="canvas-title  d-flex justify-content-between align-items-center">
                          <h2 className="m-0 text-white">SIDE MENU</h2>
                          <CloseIcon className="text-white close-icon-select p-5" onClick={toggleDrawer(anchor, false)} />
                        </Box>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                          <TabContext value={value}>
                            <Box className="tab-btn">
                              <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label={<><NotificationsNoneIcon className="font-14" /> Notification</>} value="1" />
                                <Tab label={<><MailIcon className="font-14" /> chat</>} value="2" />
                                <Tab label={<><SettingsIcon className="font-14" /> settings</>} value="3" />
                              </TabList>
                            </Box>
                            <TabPanel className="tab-header p-0" value="1">
                              <Box className="tab-one">
                                <Box className="tab-one-title d-flex justify-content-between align-items-center">
                                  <a className="blue-border" href="#">Mark All As Read</a>
                                  <a href="#">View All</a>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={email_one} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Madeleine</h3>
                                    <p className="m-0 grey-color font-12">Added 3 files to <a className="text-primary" href="#">Tempor Dolor</a> task.</p>
                                    <Box className="media-task d-flex align-items-center position-relative ">
                                      <Box className="media-img">
                                        <img src={media_img} alt="" />
                                      </Box>
                                      <Box className="media-text">
                                        <p className="m-0 font-11 grey-color">WORD_File</p>
                                        <span className=" font-11 grey-color d-flex align-items-center gap-10">35.9mb <a href="#"><DownloadIcon className="font-13  grey-color" /></a></span>
                                      </Box>
                                      <a className="more-option font-11 grey-color position-absolute" href="#">+2 More</a>
                                    </Box>
                                    <span className="time-duration position-absolute font-11 grey-color">1min ago</span>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={noti_img_two} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Dee End </h3>
                                    <p className="m-0 grey-color font-12">Tempor justo ipsum </p>
                                    <span className="time-duration position-absolute font-11 grey-color">15:13</span>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar className="grey-color bg-secondary" >LN</Avatar>
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Lee Nonmi</h3>
                                    <p className="m-0 grey-color font-12">At sanctus labore rebum stet sed.<a className="text-primary" href="#">clita rebum lorem</a>.</p>
                                    <span className="time-duration position-absolute font-11 grey-color">10min ago</span>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={noti_img_three} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Peter Owt</h3>
                                    <p className="m-0 grey-color font-12">Tempor justo ipsum clita rebum lorem.</p>
                                    <span className="time-duration position-absolute font-11 grey-color">12:11</span>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={avtar_img} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Percy Kewshu </h3>
                                    <p className="m-0 grey-color font-12">You Have Received 4 files.</p>
                                    <span className="time-duration position-absolute font-11 grey-color">00:15</span>
                                    <Box className="media-task d-flex align-items-center position-relative ">
                                      <Box className="media-img">
                                        <img src={media_img_two} alt="" />
                                      </Box>
                                      <Box className="media-text">
                                        <p className="m-0 font-11 grey-color">PPT_File</p>
                                        <span className=" font-11 grey-color d-flex align-items-center gap-10">35.9mb <a href="#"><DownloadIcon className="font-13  grey-color" /></a></span>
                                      </Box>
                                      <a className="more-option font-11 grey-color position-absolute" href="#">+3 More</a>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={noti_img_four} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Rod Knee</h3>
                                    <p className="m-0 grey-color font-12">Ea duo eos amet ut.</p>
                                    <span className="time-duration position-absolute font-11 grey-color">1d ago</span>
                                  </Box>
                                </Box>
                                <Box className="list-group d-flex align-items-lg-center gap-10">
                                  <Box className="">
                                    <Avatar alt="Remy Sharp" src={noti_img_five} />
                                  </Box>
                                  <Box className="list-group-text position-relative w-100">
                                    <h3 className="m-0 grey-color font-14">Mustafa Lee</h3>
                                    <p className="m-0 grey-color font-12">Sed amet stet clita dolores et,.</p>
                                    <span className="time-duration position-absolute font-11 grey-color">1w ago</span>
                                  </Box>
                                </Box>
                              </Box>

                            </TabPanel>
                            <TabPanel className="tab-header p-0" value="2">
                              <Box className="tab-two">
                                <Box className="chat-tab text-end">
                                  <a className="font-13 text-primary" href="#">Mail Settings</a>
                                </Box>
                                <Box className="d-flex justify-content-between align-items-center mb-16">
                                  <p className="grey-color font-13 m-0">Workspace</p>
                                  <a className="grey-color helloss font-11" href="#"><AddCircleIcon /></a>
                                </Box>
                                <ul className={showmenu ? " m-0 p-0 chat-list show" : "chat-list m-0 p-0"}>
                                  <li className="d-flex align-items-center gap-10 position-relative">
                                    <Box className="chat-one d-flex align-items-center justify-content-center bg-purple-gradient br-4 shadow">
                                      <PeopleIcon className="text-white" />
                                    </Box>
                                    <Box>
                                      <h6 className="m-0 grey-color font-14">Wiley Waites <span className="grey-color font-11 span-budge">1</span></h6>
                                      <p className="m-0 grey-color font-12">Aliquyam ipsum sit.</p>
                                      <span className="time-detail grey-color font-11 position-absolute">2:00 PM</span>
                                    </Box>
                                  </li>
                                  <li className="d-flex align-items-center gap-10 position-relative">
                                    <Box className="chat-one d-flex align-items-center justify-content-center bg-teal-gradient br-4 shadow">
                                      <TerminalIcon className="text-white" />
                                    </Box>
                                    <Box>
                                      <h6 className="m-0 grey-color font-14">Annie Versaree <span className="grey-color font-11 span-budge">2</span></h6>
                                      <p className="m-0 grey-color font-12">At eos no sit...</p>
                                      <span className="time-detail grey-color font-11 position-absolute">12:00 PM</span>
                                    </Box>
                                  </li>
                                  <li className="d-flex align-items-center gap-10 position-relative">
                                    <Box className="chat-one d-flex align-items-center justify-content-center bg-primary-gradient br-4 shadow">
                                      <AirplayIcon className="text-white" />
                                    </Box>
                                    <Box>
                                      <h6 className="m-0 grey-color font-14">Hugo First<span className="grey-color font-11 span-budge">24</span></h6>
                                      <p className="m-0 grey-color font-12">Sit est dolor dolor.</p>
                                      <span className="time-detail grey-color font-11 position-absolute">16 Jan</span>
                                    </Box>
                                  </li>
                                  <li className="d-flex align-items-center gap-10 position-relative">
                                    <Box className="chat-one d-flex align-items-center justify-content-center bg-secondary-gradient br-4 shadow">
                                      <TerminalIcon className="text-white" />
                                    </Box>
                                    <Box>
                                      <h6 className="m-0 grey-color font-14">Willie Makit<span className="grey-color font-11 span-budge">3</span></h6>
                                      <p className="m-0 grey-color font-12">Erat diam ipsum... Sed dolor...</p>
                                      <span className="time-detail grey-color font-11 position-absolute">19 Jan </span>
                                    </Box>
                                  </li>
                                  <li className="d-flex align-items-center gap-10 position-relative">
                                    <Box className="chat-one d-flex align-items-center justify-content-center bg-orange-gradient br-4 shadow">
                                      <AirplayIcon className="text-white" />
                                    </Box>
                                    <Box>
                                      <h6 className="m-0 grey-color font-14">Ben Dover<span className="grey-color font-11 span-budge">1</span></h6>
                                      <p className="m-0 grey-color font-12">Justo accusam stet eirmod et....</p>
                                      <span className="time-detail grey-color font-11 position-absolute">20 Jan</span>
                                    </Box>
                                  </li>
                                </ul>
                                <Box className="chat-tab text-end ">
                                  <a className="font-13 text-primary more" href="#" onClick={showmore}>View All</a>
                                  <a className="font-13 text-primary less" href="#" onClick={showmore}>View less</a>
                                </Box>
                              </Box>
                              <Box className="message-section">
                                <Box className="mess-title d-flex align-items-center justify-content-between mt-16">
                                  <p className="m-0 font-13 grey-color">Messages</p>
                                  <a href="#"><MessageIcon className="font-14 helloss grey-color" /></a>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={shop_img_five} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Dulcie Veeta <span className="grey-color font-11 span-budge">2</span><span> <PushPinIcon className="font-14 grey-color" /></span></h6>
                                    <p className="m-0 font-12"> <EditIcon className="font-14 text-primary py-5" />Dulcie is typing...</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">3:55 PM</span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={email_two} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Lupe Lamora <span className="grey-color font-11 span-budge">1</span></h6>
                                    <p className="m-0 font-12"> <MicIcon className="font-14 text-primary py-5" />Voice messages...</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">1:03 PM</span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={email_three} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Skye blue<span className="grey-color font-11 span-budge">2</span></h6>
                                    <p className="m-0 font-12"> <EditIcon className="font-14 text-primary py-5" />Sea lorem sit sed tempor..</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">Yesterday</span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={noti_img_three} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Anne Ortha<span className="grey-color font-11 span-budge">1</span></h6>
                                    <p className="m-0 font-12"> <AttachmentIcon className="font-14 text-primary py-5" />Diam-duoet.xd</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">21 Jan</span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={msg_three} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Michael Souris<span className="grey-color font-11 span-budge">1</span></h6>
                                    <p className="m-0 font-12"> <InsertPhotoIcon className="font-14 text-primary py-5" />+10 photos</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">22 Jan</span>
                                  </Box>
                                </Box>
                              </Box>
                              <Box className="message-section">
                                <Box className="mess-title d-flex align-items-center justify-content-between mt-16">
                                  <p className="m-0 font-13 grey-color">Calls</p>
                                  <a href="#"><CallIcon className="font-14 helloss grey-color" /></a>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={call_one} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Wilfrid Price <span className="text-danger font-11 bg-danger-transparent ms-5 p-5">3</span></h6>
                                    <p className="m-0 font-12"> <CloseIcon className="font-14 text-danger py-5" />Missed call</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">3:55 PM</span>
                                    <span className="time-detail1 grey-color  font-11 position-absolute"><CallIcon className="text-primary font-14" /></span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={call_two} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Jasmin O'Kon</h6>
                                    <p className="m-0 font-12"> <CallReceivedIcon className="font-14 text-primary py-5" />Duration: 15:30</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">Yesterday</span>
                                    <span className="time-detail1 grey-color  font-11 position-absolute"><VideocamOutlinedIcon className="text-primary font-14" /></span>
                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={call_three} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">River Gleichner</h6>
                                    <p className="m-0 font-12"> <CallMadeIcon className="font-14 text-primary py-5" />Declined </p>
                                    <span className="time-detail grey-color  font-11 position-absolute">21 Jan</span>
                                    <span className="time-detail1 grey-color  font-11 position-absolute"><VideocamOutlinedIcon className="text-primary font-14" /></span>

                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={call_four} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Saul Goodmate<span className="text-danger font-11 bg-danger-transparent ms-5 p-5">1</span></h6>
                                    <p className="m-0 font-12"> <CloseIcon className="font-14 text-danger py-5" />Missed call</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">20 Jan</span>
                                    <span className="time-detail1 grey-color  font-11 position-absolute"><CallIcon className="text-primary font-14" /></span>

                                  </Box>
                                </Box>
                                <Box className="mb-16 d-flex align-items-center gap-10">
                                  <Box>
                                    <Avatar alt="Remy Sharp" src={call_five} />
                                  </Box>
                                  <Box className="mess-text-box position-relative w-100">
                                    <h6 className="m-0 font-14">Edgardo Huel</h6>
                                    <p className="m-0 font-12"> <CallReceivedIcon className="font-14 tx-success py-5" />Duration: 01:20:10</p>
                                    <span className="time-detail grey-color  font-11 position-absolute">15 Jan</span>
                                    <span className="time-detail1 grey-color  font-11 position-absolute"><CallIcon className="text-primary font-14" /></span>
                                  </Box>
                                </Box>
                                <Box className="text-end">
                                  <a className="text-primary font-14 text-end" href="#">View All</a>
                                </Box>
                              </Box>
                              <Box>

                              </Box>
                            </TabPanel>
                            <TabPanel className="tab-header p-16" value="3">
                              <Box className="notification-tab">
                                <Box className="setting-tab">
                                  <h6 className="font-14 m-0">Notifications :</h6>
                                </Box>
                                <Box className="setting-tab-menu">
                                  <TabContext value={value1}>
                                    <Box className="">
                                      <TabList onChange={handleChange1} aria-label="lab API tabs example">
                                        <Tab className="setting-tab-btn" label="Home" value="11" />
                                        <Tab className="setting-tab-btn" label="Tasks" value="12" />
                                        <Tab className="setting-tab-btn" label="App" value="13" />
                                      </TabList>
                                    </Box>
                                    <TabPanel className="p-0" value="11">
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Someone mentioned</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Someone Replies</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Allow All Notifications</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn select-toggle-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Notifications On</span>
                                        <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={tooglebtn} aria-label="Platform">
                                          <ToggleButton value="web">in app</ToggleButton>
                                          <ToggleButton value="android">email</ToggleButton>
                                          <ToggleButton value="ios">both</ToggleButton>
                                        </ToggleButtonGroup>
                                      </Box>
                                    </TabPanel>
                                    <TabPanel value="12">
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Assign a Task</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">If I Have More Than 24 Tasks</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Allow All Notifications</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn select-toggle-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Notifications On</span>
                                        <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={tooglebtn} aria-label="Platform">
                                          <ToggleButton value="web">in app</ToggleButton>
                                          <ToggleButton value="android">email</ToggleButton>
                                          <ToggleButton value="ios">both</ToggleButton>
                                        </ToggleButtonGroup>
                                      </Box>
                                    </TabPanel>
                                    <TabPanel value="13">
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Weekly Report</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Password Change</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Payment Success</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Website Score Drops Below 80</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Company Anouncement</span>
                                        <Switch {...label} />
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Allow All Notifications</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                      <Box className="switch-btn select-toggle-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13">Notifications On</span>
                                        <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={tooglebtn} aria-label="Platform">
                                          <ToggleButton value="web">in app</ToggleButton>
                                          <ToggleButton value="android">email</ToggleButton>
                                          <ToggleButton value="ios">both</ToggleButton>
                                        </ToggleButtonGroup>
                                      </Box>
                                    </TabPanel>
                                  </TabContext>
                                </Box>
                              </Box>
                              <Box className="pt-16">
                                <span className="font-14 grey-color">App :</span>
                              </Box>
                              <Box className="setting-tab-menu ">
                                <TabContext value={value2}>
                                  <TabList onChange={handleChange2} aria-label="lab API tabs example">
                                    <Tab className="setting-tab-btn" label="Account" value="14" />
                                    <Tab className="setting-tab-btn" label="Profile" value="15" />
                                  </TabList>
                                  <TabPanel className="pt-16" value="14">
                                    <Box >
                                      <span className="grey-color font-13 mt-5">Connected Apps</span>
                                    </Box>
                                    <Box className="switch-btn d-flex justify-content-between align-items-center">
                                      <span className="font-13 d-flex align-items-center gap-10"><FacebookOutlinedIcon className="text-primary" />Facebook</span>
                                      <Switch {...label} />
                                    </Box>
                                    <Box className="switch-btn d-flex justify-content-between align-items-center">
                                      <span className="font-13 d-flex align-items-center gap-10"><CalendarMonthOutlinedIcon className="text-primary" />Google Calender</span>
                                      <Switch {...label} />
                                    </Box>
                                    <Box className="switch-btn d-flex justify-content-between align-items-center">
                                      <span className="font-13 d-flex align-items-center gap-10"><AddToDriveOutlinedIcon className="text-primary" />Dropbox</span>
                                      <Switch {...label} defaultChecked />
                                    </Box>
                                    <Box className="pt-16">
                                      <span className="grey-color font-13 mt-5">Login & Security</span>
                                    </Box>
                                    <Box className="mt-16 password-field position-relative">
                                      <label className="grey-color font-13 pb-5" htmlFor="password">password</label>
                                      <input className="" type="password" />

                                      <a className="text-primary font-13 position-absolute" href="#" onClick={handleOpen1}> change</a>

                                      <Box>
                                        {password ? <Box className="mt-16">
                                          <input className="w-90" type="password" placeholder="Re-enter password" />
                                          <Box className="mt-16 text-end">
                                            <a className="font-13 text-danger" onClick={() => setpassword(false)} href="#">Discard</a>
                                            <a className="font-13 save-btn" href="#">Save Changes</a>
                                          </Box>
                                        </Box> : ""
                                        }
                                        <Box>
                                          <Box className="switch-btn d-flex justify-content-between align-items-center">
                                            <span className="font-13 d-flex align-items-center gap-10">Two Factor Authentication</span>
                                            <Switch {...label} defaultChecked />
                                          </Box>
                                          <Box className="d-flex align-items-center justify-content-between">
                                            <p className="font-13 text-grey m-0" >Remove Account</p>
                                            <a className="font-13 text-primary" href="#">Know more</a>
                                          </Box>
                                          <button className="del-acc-btn font-13 br-4 w-100">Delete My Account</button>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box className="border-bottom">
                                      <Box className="pt-16">
                                        <span className="grey-color font-13 mt-5">Others: </span>
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13 d-flex align-items-center gap-10">Back to top</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                    </Box>
                                    <Box className="">
                                      <Box className="pt-16 text-center" >
                                        <span className="grey-color font-14 mt-5">This Is Not You're Looking For?</span>
                                        <button className="sett-acc-btn font-13 br-4 w-100">Go To Full Sattings</button>
                                      </Box>
                                    </Box>
                                  </TabPanel>
                                  <TabPanel value="15">
                                    <Box className="password-field">
                                      <label className="grey-color font-13 pb-5 pt-10" htmlFor="">Full Name</label>
                                      <input type="text" placeholder="enter your name" />
                                      <label className="grey-color font-13 pb-5 pt-10" htmlFor="password">password</label>
                                      <input className="" type="password" placeholder="enter your password" />
                                      <Box className="position-relative contry-code mt-16">
                                        <label className="grey-color font-13 pb-5 " htmlFor="password">password</label>
                                        <input className="" type="num" />
                                        <a className="text-primary font-13 position-absolute" onClick={handleOpen} href="#">change country</a>
                                      </Box>

                                    </Box>
                                    <Box className="border-bottom">
                                      <Box className="pt-16">
                                        <span className="grey-color font-13 mt-5">Others: </span>
                                      </Box>
                                      <Box className="switch-btn d-flex justify-content-between align-items-center">
                                        <span className="font-13 d-flex align-items-center gap-10">Back to top</span>
                                        <Switch {...label} defaultChecked />
                                      </Box>
                                    </Box>
                                    <Box className="">
                                      <Box className="pt-16 text-center" >
                                        <span className="grey-color font-14 mt-5">This Is Not You're Looking For?</span>
                                        <button className="sett-acc-btn font-13 br-4 w-100">Go To Full Sattings</button>
                                      </Box>

                                    </Box>
                                  </TabPanel>
                                </TabContext>
                              </Box>

                            </TabPanel>
                          </TabContext>
                        </Box>
                      </Drawer>
                    </React.Fragment>
                  ))}

                </li>
                <li className="icon-hover search-menu-header">
                  <Box class="search-box">
                    <button class="btn-search"><SearchIcon className="text-primary" onClick={searchopen}/></button>

                  </Box>
                </li>
                <li className={activeIndex === 3 ? "icon-hover position-relative active" : "icon-hover position-relative unactive"}>
                  <Avatar className="account-info" onClick={() => handleClick(3)} alt="Remy Sharp" src={avtar_img} />
                  <Box className="box-shadow-content box-line-shadow position-absolute profile-menu">
                    <Box className="profile-menulist d-flex gap-10 align-items-center">
                      <Box className="">
                        <Avatar alt="Remy Sharp" src={avtar_img} />
                      </Box>
                      <Box className="store-menu-title">
                        <h6 className="m-0 text-black">Json Taylor</h6>
                        <p className="m-0 text-black">Web Designer</p>
                      </Box>
                    </Box>
                    <ul className="p-0">
                      <li className="p-0">
                        <a className="d-flex gap-10  grey-color" href="#"><PersonOutlineOutlinedIcon className="  grey-color" />Profile</a>

                      </li>
                      <li className="p-0">
                        <a className="d-flex gap-10   grey-color" href="#"><MailOutlineIcon className="grey-color " />Inbox</a>

                      </li>
                      <li className="p-0">
                        <a className="d-flex gap-10  grey-color" href="#"><SettingsIcon className="grey-color" />Settings</a>

                      </li>
                      <li className="p-0">
                        <a className="d-flex gap-10  grey-color" href="#"><PowerSettingsNewOutlinedIcon className="grey-color" />Log Out</a>

                      </li>

                    </ul>

                  </Box>
                </li>
              </ul>
            </Box>


          </Box>
          <Box className="d-flex align-items-center">
            <MoreVertOutlinedIcon className="header-more-icon" onClick={viewmore} />
            <ul className="p-0">
              <li>
                <Button onClick={toggleDrawer1(true)}>
                  <SettingsIcon className="set-icon tx-primary text-shadow" />
                </Button>
                <Drawer className="setting-canvas" open={open1} onClose={toggleDrawer1(false)} anchor="right" >
                  <Box className="" sx={{ width: 270 }} role="presentation" onClick={toggleDrawer1(true)}>
                    <Box className="p-16 d-flex flex-column text-center gap-10">
                      <a className="btn-one br-4 font-13  " href="#">Buy Now</a>
                      <a className="btn-two br-4 font-13  " href="#">Our Portfolio</a>
                      <a className="btn-three br-4 font-13  " href="#">Licences</a>
                    </Box>
                    <Box className="demo-changer">
                      <h4>LTR AND RTL VERSIONS</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">LTR</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">RTL</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>NAVIGATION STYLE</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Vertical Menu</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Horizontal Click Menu</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">HorizontalHover Menu</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>NAVIGATION STYLE</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Default Theme</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Light Theme</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Dark Theme</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Glassy Theme</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>THEME COLORS</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Theme Primary</span>
                        <input className="w-30" type="color" id="favcolor" name="favcolor" value="#4deeea" />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Theme Background</span>
                        <input className="w-30" type="color" id="favcolor" name="favcolor" value="#12373d" />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>MENU IMAGES</h4>
                      <Box className="demo-galary d-flex align-items-center gap-10">
                        <img src={gal_one} alt="" />
                        <img src={gal_two} alt="" />
                        <img src={gal_three} alt="" />
                        <img src={gal_four} alt="" />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>LAYOUT WIDTH STYLES</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Full Width</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Boxed</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>LAYOUT POSITIONS</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Fixed</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Scrollable</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>SIDEMENU LAYOUT</h4>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Default Menu</span>
                        <Switch {...label} defaultChecked />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Closed Menu</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Icon With Text</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Iocn Overlay</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Hover Submenu</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Hover Submenu Style 1</span>
                        <Switch {...label} />
                      </Box>
                      <Box className="swich-control d-flex justify-content-between align-items-center gap-10">
                        <span className="font-13 grey-color">Double Menu</span>
                        <Switch {...label} />
                      </Box>
                    </Box>
                    <Box className="demo-changer">
                      <h4>SIDEMENU LAYOUT</h4>
                      <button className="reset-btn br-4 font-13">Reset All</button>
                    </Box>
                  </Box>
                </Drawer>
              </li>
            </ul>
          </Box>
        </Box>

        {/* contry modal open */}
        <Box>
          <Modal className="contry-modal" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className="contry-box">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <Box className="contry-title d-flex justify-content-between align-items-center p-16">
                  <h3 className="m-0">Choose Country</h3>
                  <CloseIcon className="close-menu close-icon-select" onClick={handleClose} />
                </Box>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Box className="contry-code-detail pt-16">
                  <ul className="p-0">
                    <li className="contry-name d-flex align-items-center">
                      <img src={us_flag} alt="" />
                      <p className="m-0">Usa</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={spain_flag} alt="" />
                      <p className="m-0">spain</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={franch_flag} alt="" />
                      <p className="m-0">france</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={singapore_flag} alt="" />
                      <p className="m-0">singapore</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={austria_flag} alt="" />
                      <p className="m-0">austria</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={germany_flag} alt="" />
                      <p className="m-0">germany</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={brazil_flag} alt="" />
                      <p className="m-0">brazil</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={china_flag} alt="" />
                      <p className="m-0">china</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={malaysia_flag} alt="" />
                      <p className="m-0">malaysia</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={italy_flag} alt="" />
                      <p className="m-0">italy</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={india_flag} alt="" />
                      <p className="m-0">india</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={mexico_flag} alt="" />
                      <p className="m-0">mexico</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={poland_flag} alt="" />
                      <p className="m-0">poland</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={russia_flag} alt="" />
                      <p className="m-0">russia</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={argentina_flag} alt="" />
                      <p className="m-0">argentina</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={uae_flag} alt="" />
                      <p className="m-0">uae</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={uk_flag} alt="" />
                      <p className="m-0">uk</p>
                    </li>
                    <li className="contry-name d-flex align-items-center">
                      <img src={canada_flag} alt="" />
                      <p className="m-0">canada</p>
                    </li>

                  </ul>
                </Box>
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Box>
      <Box class={issearch ? "position-relative search-header active" : "position-relative search-header"}>
        <input type="text" class="input-search11 font-14" placeholder="Search" />
        <CloseIcon className="bgbgb position-absolute" onClick={searchopen} />
      </Box>
    </Headerstyled>

  );
}

export default Header;
