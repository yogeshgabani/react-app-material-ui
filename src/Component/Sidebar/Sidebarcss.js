import styled from 'styled-components';


const Sidemenulist = styled.div`

.side-menu {
    position: fixed;
    width: 240px;
    z-index: 5;
    top: 0;
    background: radial-gradient(circle, rgb(18, 55, 61) 0%, #121923, #121923 100%) !important;
    border-right: 1px solid #4deeea1a;
  transition: all ease 0.3s !important;


    @media (max-width: 992px) {
        left: -240px
      }
}
.header-logo {
    height: 64px;
    border-bottom: 1px solid #4deeea1a;
    backdrop-filter: blur(5px);
}
.side-menu-icon {
    top: 50%;
    right: 0;
}
.main-logo {
    height: 40px;
    margin: 0 auto;
}
.main-side-menu {
    padding: 10px 10px;
    overflow-y: auto ;
    height: calc(100vh - 70px);
}
.main-side-menu::-webkit-scrollbar {
    display: none;
    transition: 1s;
}
.side-menu:hover .main-side-menu::-webkit-scrollbar {
    display: block !important;
}

.main-side-menu ul li {
    padding: 10px 20px 10px 20px;
    color: #4deeea80;
    font-size: 13px;
}
.sidemenu-item .arrow-right {
    transition: 0.3s;
    right: 0px;
}
.sidemenu-item::after {
    content: "";
    position: absolute;
    background: transparent;
    height: 25px;
    width: 5px;
    box-shadow: 0px 0px 10px 2px #4deeea, 0px 0px 10px 2px #4deeea;
    left: -35px;
    opacity: 0;
}
.nav-active .sidemenu-item::after {
    opacity: 1;
}
.nav-active .arrow-right {
    transform: rotate(90deg);
}
.nav-active .sidemenu-item {
    color: #4deeea;
}

.main-side-menu ul li:hover span, .main-side-menu ul li:hover .arrow-right {
    color: #4deeea;
    cursor: pointer;
}
.main-side-menu ul li:hover .sidemenu-item::after {
    opacity: 1;
}
.sub-link::after {
    content: "";
    position: absolute;
    background: #4deeea80;
    width: 8px;
    height: 1px;
    left: -15px;
    top: 50%;
}
.side-sub-menu {
    padding-top: 10px !important;
}
.side-sub-menu li {
    font-size: 13px;
    padding: 8px 15px 8px 30px !important;
    font-weight: 500;
    text-align: start;
}
.side-sub-menu li a {
    color: #4deeea80;
}
.side-sub-menu li a:hover {
    color: #4deeea;
    cursor: pointer;
}   
.sub-link:hover::after {
       background: #4deeea;
}
.sub-arrow {
    position: absolute;
    right: -30px;
    font-size: 20px;
    transition: 0.4s;
}
.list-sub-menu-two {
    display: none;
}
.active-list .sub-arrow {
    transform: rotate(90deg);
}
.active-list .list-sub-menu-two {
    display: block !important;
}

}
 .sub-sub-list {
    visibility: hidden;
    transition: visibility .5s, max-height .5s;
    max-height: 0;
    overflow: hidden;
    padding: 10px 0;
}
.sub-sub-list.active-sub-menu {
    visibility: visible;
    transition: visibility .5s, max-height .5s;
    max-height: 800px;
}
.list-sub-menu-two .sub-sub-list .side-sub-list {
    padding: 8px 10px 8px 20px !important;
}
.main-side-menu ul h4 {
    color: #4deeea;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5px;
    opacity: 0.6;
    text-align: start;
    padding: 5px 10px;
    margin: 0;
}
.sub-arrow {
    right: 30px;
    font-size: 18px;
}

.nav-menu .side-sub-menu{
    visibility: hidden;
         transition: visibility .5s, max-height .5s;
         max-height: 0;
         overflow: hidden;
         padding: 10px 0;
}
.nav-active .side-sub-menu{
    visibility: visible;
     transition: visibility .5s, max-height .5s;
     max-height: 800px;
}



`;


export { Sidemenulist };