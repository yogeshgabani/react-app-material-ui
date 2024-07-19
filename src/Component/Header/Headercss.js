import styled from 'styled-components';



const Headerstyled = styled.div`
  .header-main{
    padding: 0px 12px;
    border-bottom: 1px solid #4deeea1a;
    height: 64px;
    width: calc(100% - 260px);
    margin-inline-start: auto;
    position: fixed;
    right: -5px;
    z-index: 5;
    top: 0;
    background: radial-gradient(circle, rgb(18, 55, 61) 0%, #121923, #121923 100%) !important;
    transition: all ease 0.3s !important;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
  .logo-img-header {
    height: 40px;
    display: none;
    @media (max-width: 992px) {
      display: block;
      position: fixed;
      top: 12px;

    }
  }
  .header-input {
    padding-left: 30px;
    @media (max-width: 992px) {
      padding-left: 15px;
    }
  }
  .header-main.active {
    width: 100% !important;
    padding: 0 !important;
  }
  .header-main.active .side-menu {
    display: none;
  }
  .header-main::after {
    position: absolute;
    content: "";
    width: 50%;
    height: 1px;
    bottom: 0;
    inset-inline-start: 30%;
    background: linear-gradient(45deg, transparent, #4deeea4d, #4deeea4d, #4deeea99, #4deeea4d, transparent);
    box-shadow: 0 8px 17px 0.0125px #4deeea;
  }
  .input-search{
    width: 500px;
    height: 35px;
    border-radius: 0px;
    background: transparent;
    border: 1px solid rgb(77 238 234 / 10%);
    color: #b0bbc7;
    font-size: 14px;
    font-weight: 400;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
    text-indent: 10px;
    &:focus {
      background: transparent;
      box-shadow: 0px 0px 20px -5px rgb( 77, 238, 234);
      border: 1px solid rgb(77 238 234 / 50%) !important;
    }
    
    @media (max-width: 1299px) {
      width: 200px;
    }
  }
  .sub-menu-flex {
    @media (max-width: 992px) {
      width: 100%;
      }
  }
  .short-menu-down {
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
        position: relative;
        top: 0;
        left: 10px;


      }
  }
  .sub-down.active {
    display: block !important;
  }
  .sub-down {
    @media (max-width: 992px) {
      background:  radial-gradient(circle, rgb(18, 55, 61) 0%, #121923, #121923 100%);
      width: 140%;
    position: absolute;
    top: 43px;
    left: 10px;
    display: none !important;
      }
  }
 
  .header-more-icon {
    display: none;
    @media (max-width: 992px) {
      display: block;
      }
  }
  .d-none {
    @media (max-width: 992px) {
      display: none;
      }
  }
  .search-icon {
    font-size: 28px;
    color: rgb(255 255 255 / 50%);
    font-weight: 600;
    right: 10px;
    top: 7px;
    cursor: pointer;
  }
  .search-header {
    top: 0px;
    width: 105%;
    display: none !important;
    z-index: 22;
  }
  .search-header.active {
    display: block !important;
  }
  .search-box .btn-search {
    border: none;
    background: transparent;
    padding-top: 10px;
  }
  .search-box {
    display: none;
    @media (max-width: 992px) {
      display: block;
      }
  }

  .search-header svg {
    position: fixed;
    top: 78px;
    right: 10px;
    z-index: 1;
  }
  .input-search11 {
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    height: 50px;
    background: #12373d;
    color: #b0bbc7;
    font-weight: 600;
    outline: none;
    text-indent: 10px;
    border: none;
  }
  .badge-title {
    color: rgb( 249, 248, 113 );
  }
  .css-dlwkee-MuiBadge-badge {
    background: rgb(249 248 113 / 20%);
    font-size: 10px;
  }
  .menu-icon .css-rt4zii-MuiBadge-badge  {
    background: rgb( 77, 238, 234 );
    box-shadow: 0 0 0 rgb( 249, 248, 113 );
    position: relative;
    right: 20px;
    top: -5px;
    @media (max-width: 524px) {
    right: 17px;
    }
  }
 .menu-icon .css-rt4zii-MuiBadge-badge::after {
    content: "";
    inset-block-start: -4px;
    inset-inline-end: -4px;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    background: #f9f871;
    cursor: pointer;
    box-shadow: 0 0 0 #f9f871;
    animation: pulse 1s linear infinite;

  }
  .set-icon {
    transition: all ease 0.3s;
    animation: spin 2s linear infinite;
  }
  .menu-list {
    @media (max-width: 1099px) {
      gap: 10px;
    }
    @media (max-width: 992px) {
      di
      }
  }
  .box-line-shadow::after {
    position: absolute;
    content: "";
    width: 80%;
    height: 1px;
    top: 0;
    background: linear-gradient(45deg, transparent, #4deeea4d, #4deeea99, #4deeea99, #4deeea4d, transparent);
    inset-inline-start: 10%;
    box-shadow: 0 8px 17px 0px #4deeea;
  }
  .header-store-menu {
    width: 410px;
    top: 48px;
    right: 0;
    border: 1px solid #4deeea4d !important;
    background-color: #12373d;
    color: #b0bbc7;
    transition: all ease 0.3s;
    animation: slideIn 0.2s linear;
    border-radius: 8px;
    display: none;
    @media (max-width: 992px) {
      left: 0;
    }
    @media (max-width: 480px) {
      left: -40px;
      width: 300px; 
    }
  }
  .header-store-menu.show {
    display: block;
  }
  .header-store-menu .store-menu-list{
    padding: 16px;
    border-bottom: 1px solid #4deeea1a !important;
    text-align: start;
  }
  .inbox-mobile {
    @media (max-width: 480px) {
      left: -80px;
    }
  }
  .icon-hover.active .header-store-menu , .icon-hover.active .profile-menu{
    display: block;
  }


  .reply-mobile {
    @media (max-width: 480px) {
      left: -110px;
    }
  }
  
  .store-menu-list a, .shop-footer a {
    color: #000;
    background-color: #4deeea;
    border-color: #4deeea;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }
  .shop-list-one, .shop-list-one img   {
    width: 60px !important;
    height: 60px !important;
    border-radius: 4px !important;
  }
  .shop-list-one-title p {
    color: #b0bbc7;
  }
  .shop-list-one-title span {
    color: #9aa5b9;
  }
  .price-tag {
    right: 0;
    bottom: 0;

  }
  .delete-icon {
    right: 0;
    top: 0;

  }
  .header-store-menu ul {
    max-height: 280px;
    overflow-y: scroll;
  }
  .header-store-menu ul li {
    padding: 8px 13px;
    
  }
  .header-store-menu ul li:hover {
    background: #00000033;
  }
  .store-menu-title h6 {
    font-size: 15px !important;
    font-weight: 500 !important;
    color: #b0bbc7;
  }
  .store-menu-title p {
    font-size: 12px !important;
    font-weight: 500 !important;
    color: #9aa5b9;
  }
  .shop-footer {
    border-top: 1px solid #4deeea1a;
    padding: 10px;
    box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.1);
  }

  .chat-online::after {
    content: "";
    position:absolute;
    width: 5px;
    height: 5px;
    background: #43ce85;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0 0 0 2px #0000001a;
    right: 5px;
    bottom: 0;
  }
  .short-btn a {
    width: 37px;
    height: 37px;
    border-radius: 4px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: unset;
    padding: 0;
  }
  .short-btn a:hover {
    background: #110f0f;
    color: #4deeea;
  }
  .short-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .short-list li:hover{
    background: unset !important;
  }
  .short-icon-list {
    transition: all ease 0.3s;
    font-size: 20px;
  }
  .short-list a {
    width: 30px;
    height: 30px;
    padding: 5px;
    line-height: 30px;
    border: 1px solid #4deeea1a !important;
    transition: all ease 0.3s;
  }
  .short-list a:hover {
    background-color: #00000033;
  }
  .short-list a:hover .short-icon-list {
    transform: scale(1.3);
  }
  .menu-list li, .header-more-icon {
    padding: 5px 10px;
    @media (max-width: 992px) {
      padding: 5px 5px;
    }
  }

  .menu-list .icon-hover:hover, .menu-list .icon-hover:active,  .header-more-icon:hover{
    background: #00000033 !important;
    border-radius: 4px;
    cursor: pointer;
  }
  .icon-hover .text-green {
    @media (max-width: 524px) {
      font-size: 16px;
    }
  }
  .email-dropmenu .header-store-menu, .reply-dropmenu .header-store-menu {
    width: 300px;
  }
   .modal-flag {
   background: blue;
 }
 .modal-cn {
   background: red !important;
 }
 p#modal-modal-description{
   max-width:300px !important;
   background: red !important;
   color: #fff !important;
  }
  .canvas-btn {
    min-width: unset;
    color: unset;
    padding: 0;
  }
  .canvas-btn .text-shadow {
    padding-left: 5px;
  }
  .profile-menu {
    width: 230px;
    border: 1px solid #4deeea4d !important;
    border-radius: 4px;
    transition: all ease 0.3s;
    animation: slideIn 0.2s linear;
    right: 0;
    top: 55px;
    display: none;
  }
  .account-info {
    @media (max-width: 524px) {
      width: 30px !important;
      height: 30px !important;
    }
  }
  .profile-menulist {
    padding: 16px;
    background-color: #4deeea !important;
    color: #000 !important;
  }
  .text-black {
    color: #000 !important;
    
  } 
  .profile-menu ul {
    background-color: #12373d !important;
  }
  .profile-menu ul li a{
    padding: 10px 16px 5px;
  }
  .profile-menu ul li a:hover {
    color: white !important;
    background-color: #00000033;
  }
  .profile-menu.show {
    display: block;
  }
    
    


`;
// const Contrymodal = styled.div`
// .modal-flag {
//   background: blue;
// }
// .modal-cn {
//   background: red !important;
// }
// .contry-box p{
//   max-width:300px !important;
//   background: red !important;
//   color: #fff !important;
// }

// `;

export { Headerstyled};

