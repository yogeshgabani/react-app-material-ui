import styled from 'styled-components';

const Dashboard = styled.div`
    
    
    .main-content {
        padding: 0 24px;
        margin: 65px 0 0 0;
        width: calc(100% - 285px);
         margin-inline-start: auto;

         @media (max-width: 992px) {
            width: 100%;
          }
        @media (max-width: 524px) {
            padding: 0 15px;
          }

        
    }
    .dashboard-part {
        padding: 20px 0;
    }
    .dash-title h2{
        color: #4deeea;
        font-weight: 500;
        font-size: 18px;
        @media (max-width: 524px) {
            font-size: 14px;
          }
    }
    .dash-list {
        @media (max-width: 524px) {
            gap: 10px;
            padding-left: 20px;
          }
    }
    .dash-list li {
        font-size: 15px;
        padding: 0 10px;
    }
    .dash-list li a {
        color: #9aa5b9;
    }
    .active-tab::after {
        content: "/";
        position: absolute;
        color: #8592a9;
        left: -10px;
    }
    .dashboard-box {
        border: 1px solid #0000002d;
        border-radius: 6px;
        box-shadow: inset 0px -1px 12px 3px rgba(255, 255, 255, 0.05);
    }
    .box-one {
        padding: 24px;
        border-right: 1px solid #4deeea1a !important;
    }
    .box-one-title p {
        font-size: 12px;
        color: #9aa5b9;
        padding-bottom: 5px;
    }
    .box-one-title h4 {
        font-size: 22px;
        color: #ffffffcc;
        padding-bottom: 5px;
        font-family: "Rajdhani", sans-serif;
    }
    .growth-bg {
        color: #43ce85;
        border-radius: 3px;
        padding: 4px 6px;
        font-weight: 400;
        background-color: #43ce8526;
        font-size: 11px;
    }
    .up-arrow {
        font-size: 10px;
    }
    .css-1qdzy9k-MuiBarElement-root {
        width: 5px !important;
        transform: translate3d(90px, 50px, 0px);
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
    .activity-section {
        margin-top: 24px;
    }
    .activity-log {
        padding: 16px 20px;
        border-bottom: 1px dashed #4deeea1a;
        text-transform: uppercase;
    }
    .activity-log h4 {
        font-size: 15px;
        font-weight:500;
        @media (max-width: 480px) {
            font-size: 13px;
          }
    }
    .activity-log p {
        font-size: 11px;
        color: #9aa5b9;
    }
    .timeline-tag {
        padding: 20px;
        @media (max-width: 524px) {
            padding: 10px;
          }
    }
    .timeline-tag ul li {
        padding-bottom: 20px;
        text-align: start;   
    }
    .activity-content-one::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #4deeea;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityaminationprimary 2s linear infinite;
    }
    .activity-content-one::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #4deeea;
        opacity: 0.3;
    }
    .activity-content-two::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #f9f871;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-two 2s linear infinite;
    }
    .activity-content-two::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #f9f871;
        opacity: 0.3;
    }
    .activity-content-three::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #d6573c;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-three 2s linear infinite;
    }
    .activity-content-three::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #d6573c;
        opacity: 0.3;
    }
    .badge-warning-transparent {
        background-color: rgba(255, 207, 134, 0.15) !important;
        color: #ffcf86;
        padding: 4px 6px;
    }
    .activity-content-four::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ffcf86;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-four 2s linear infinite;
    }
    .activity-content-four::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #ffcf86;
        opacity: 0.3;
    }
    .activity-content-five::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #43ce85;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-five 2s linear infinite;
    }
    .activity-content-five::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #43ce85;
        opacity: 0.3;
    }
    .badge-info-transparent {
        color: #4ec2f0;
        background-color: rgba(78, 194, 240, 0.15);
        padding: 4px 6px;

    }
    .activity-content-six::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #4ec2f0;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-six 2s linear infinite;
    }
    .activity-content-six::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 114%;
        top: 20px;
        left: -24px;
        bottom: 10px;
        background-color: #4ec2f0;
        opacity: 0.3;
    }
    .activity-content-seven::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ffb67b;
        top: 8px;
        left: -25px;
        opacity: 1;
        animation: activityamination-seven 2s linear infinite;
    }
    .activity-log p span {
        border: 1px solid #4deeea1a !important;
        font-size: 12px;
        padding: 4px 8px;
        text-transform: capitalize ;
        border-radius: 4px;
    }
    .order-sales {
        @media (max-width: 480px) {
            flex-direction: column;
          }
    }
    .sales-chart {
        padding: 20px;
        @media (max-width: 480px) {
           padding: 10px;
          }
    }
    .sales-state h3 {
        font-size: 13px;
        color: #ffffffcc;
        padding-bottom: 6px;
        font-weight: 400;
    }
    .sales-state p {
        font-family: "Rajdhani", sans-serif;
        font-size: 16px;
    }
    .sales-state p span {
        font-size: 11px;
        padding: 4px 6px;
        border-radius: 4px;
    }
    .sales-report .MuiBarElement-root {
        width: 20px !important;
        transform: translate3d(69.7167px, 158px, 0px);
        @media (max-width: 524px) {
            width: 10px !important;
        }
        @media (max-width: 324px) {
            width: 5px !important;
        }
    }
    .sales-report .css-1qdzy9k-MuiBarElement-root, .sales-report .MuiChartsLegend-series text, .css-yrgrvu {
        fill: rgb(77, 238, 234) !important;
    }
    .sales-report .css-3dcfwk-MuiBarElement-root, .css-1qsjhi9 {
        fill:  rgba(77, 238, 234, 0.4);
    }
    .sales-report .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel {
        fill: #ffffffcc;
    }
    .sales-report .MuiChartsLegend-series:nth-child(1) .MuiChartsLegend-mark{
        fill: #4deeea !important;
      }
    .sales-report .MuiChartsLegend-series:nth-child(1) tspan{
        fill: #4deeea !important;
        font-size: 10px;
      }
    .sales-report svg .MuiChartsLegend-series:nth-child(2) .MuiChartsLegend-mark{
        fill: #4deeea66 !important;
      }
    .sales-report .MuiChartsLegend-series:nth-child(2) tspan{
        fill: #4deeea !important;
        font-size: 10px;

      }
    .sales-report .MuiChartsAxis-line, .sales-report .MuiChartsAxis-tick{
        stroke: rgb(255 255 255 / 87%);
      }
    .activity-log .css-1h9z7r5-MuiButtonBase-root-MuiTab-root, .css-1q2h7u5 {
        font-size: 12px;   
        color: #b0bbc7;
        min-height: unset;
        padding: 5px 0 !important;
    }
    .activity-log .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected, .activity-log .css-1h9z7r5-MuiButtonBase-root-MuiTab-root:hover, .css-1q2h7u5.Mui-selected {
        color: #4deeea;
    }
    .activity-log .MuiTabs-indicator {
        bottom: 0px;
        background-color: #4deeea1a;
    }
    .css-13xfq8m-MuiTabPanel-root, .css-19kzrtu {
        padding: 0;
    }
    .activity-log .css-1ujnqem-MuiTabs-root {
        min-height: 0 !important;
    }
    .table-data-one .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
        background-color: transparent !important;
    }
    .table-data-one .css-1ygcj2i-MuiTableCell-root, .css-1bigob2{
        padding: 10px 15px;
        color: #9aa5b9;
        font-size: 14px;
        font-weight: 500;
        background-color: #ffffff08;
        border-bottom: 1px solid #4deeea1a;
        // width: 100%;
    }
    .table-data-one .css-1ex1afd-MuiTableCell-root, .task-data-detail .table-data-one .css-1q1u3t4-MuiTableRow-root  {
        border-bottom: 0;
        // width: 0;
        @media (max-width: 480px) {
            padding: 10px;
          }
    }
    
    .table-data-one .css-1q1u3t4-MuiTableRow-root {
        border-bottom: 1px solid #4deeea1a;
    }
   
    .table-data-one .data-table-one{
        min-width: 42px;
        height: 42px !important ;
        border-radius: 4px !important;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .table-data-one .data-table-one img {
        padding: 8px;
        width: 30px;
        height: 30px;
        border-radius: 4px;
    }
    .table-data-one .tab-two-img {
        width: 42px;
        height: 42px;
    }
    .table-data-one .data-table-list p {
        font-weight: 500 !important;
        color: #b0bbc7;
        font-size: 13px;
    }
    .table-data-one .data-table-list span, .table-data-one .data-2 span {
        color: #9aa5b9;
        font-size: 11px;
    }
    .dart-list {
        @media (max-width: 1535px) {
            display: flex;
            justify-content: end;
          }        
    }
    .dart-list span {
        @media (max-width: 480px) {
            font-size: 10px !important;
            }
    }

    .table-data-one .data-2 p {
        font-size: 14px;
        color: #b0bbc7;
    }
    .table-data-one .data-3 span {
        font-size: 14px;
        font-weight: 500;
        color: #b0bbc7;
    }
    .data-table-list span {
        @media (max-width: 480px) {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          @media (max-width: 480px) {
            font-size: 8px !important;
            }
    }
    .data-table-list a {
        @media (max-width: 480px) {
            display: unset !important;

          }
    }
    .data-table-list a span {
        display: inline-block;
        padding: 4px 6px;
        margin-left: 16px;
        font-weight: 400;
        line-height: 1;
        vertical-align: baseline;
        border-radius: 3px;
        font-size: 75%;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        @media (max-width: 480px) {
            margin-left: 0;
          }
    }
    .trans-history {
        padding: 20px 0;
    }
    .trans-history .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
        box-shadow: none !important;
    }
    .trans-history .css-1q1u3t4-MuiTableRow-root {
        border-bottom: none !important;
    }
    .task-data-detail .table-data-one  .data-table-one {
        border-radius: 50% !important;
        width: 32px;
        height: 32px;
    }
    .task-data-detail .table-data-one .data-2 span {
        padding: 4px 6px;
        width: max-content;
    }
    .slider-box , .billing-data, .product-summary {
        padding: 20px;
    }
    .slider-one {
        padding-bottom: 24px;
    }
    .slider-one:last-child {
        padding-bottom: 0;
    }
    .slider-one .left-title {
        top: -8px;
        left: 0;
        color: #ffffffcc;
    }
    .slider-one .right-title {
        top: -8px;
        right: 0;
    }
    .color-one .css-15gm0yv-MuiSlider-root, .color-one .css-6k4wph {
        color: #4deeea;
        padding: 0;
    }
    .color-two .css-15gm0yv-MuiSlider-root, .color-two .css-6k4wph {
        color: #f9f871;
        padding: 0;
    }
    .color-three .css-15gm0yv-MuiSlider-root, .color-three .css-6k4wph {
        color: #43ce85;
        padding: 0;

    }
    .color-four .css-15gm0yv-MuiSlider-root, .color-four .css-6k4wph {
        color: #ffb67b;
        padding: 0;
    }
    .color-five .css-15gm0yv-MuiSlider-root, .color-five .css-6k4wph {
        color: #7891ef;
        padding: 0;
    }
    .billing-section .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
        min-width: 50px;
    }
    .billing-section .css-heg063-MuiTabs-flexContainer, .billing-section .css-k008qs {
        background: #4deeea0d;
        padding: 4px;
        gap: 10px;
        border-radius: 30px;
    }
    .billing-section .css-1h9z7r5-MuiButtonBase-root-MuiTab-root, .billing-section .css-1q2h7u5 {
        font-size: 10px;
        color: #b0bbc7;
        font-weight: 300;
        padding: 3px 10px !important;
        line-height: unset;
    }
    .billing-section .css-1h9z7r5-MuiButtonBase-root-MuiTab-root:hover, .billing-section .css-1q2h7u5:hover {
        color: #4deeea;
        background: #00000033;
        padding: 4px;
        border-radius: 30px;

    }
    .billing-section .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected, .billing-section .css-1q2h7u5.Mui-selected {
        color: #4deeea;
        background: #4deeea1a;
        padding: 3px 10px !important;
        font-size: 10px;
        border-radius: 30px;
    }
    .billing-section .css-1aquho2-MuiTabs-indicator  {
        display: none;
    }
    .bill-title{
        margin-left: 10px;
        text-align: start;
    }
    .bill-title p {
        font-size: 13px;
        color: #ffffffcc;
        line-height: 1;
    }
    .bill-title span {
        font-size: 11px;
        color: #9aa5b9;
    }
    .receive-data ul li {
        padding: 0 0 10px 0;
    }
    .product-summary .css-n3fyjk-MuiDataGrid-root {
        background: transparent;
        color: #b0bbc7;
        border: 1px solid #4deeea1a;
    }
    .product-summary .css-rtrcn9-MuiTablePagination-root, .product-summary .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon, .product-sammury .css-i4bv87-MuiSvgIcon-root {
        color: #b0bbc7 !important;

    }
    // .product-summary .css-n3fyjk-MuiDataGrid-root .MuiDataGrid-cell  {
    //     border: 1px solid #4deeea1a;
    //     --width: 100% !important;
    //     min-width: unset !important;
    //     max-width: unset !important;
    //     width: 100% !important;

    // }
    // .product-summary .css-n3fyjk-MuiDataGrid-root .MuiDataGrid-withBorderColor {
    //     border: 1px solid #4deeea1a;
    //     width: 100% !important;
    //     min-width: unset !important;
    //     max-width: unset !important;

    // }
    .product-summary .css-tgsonj {
        border: 1px solid #4deeea1a;

    }
    .product-summary .css-n3fyjk-MuiDataGrid-root .MuiDataGrid-container--top [role=row], .css-n3fyjk-MuiDataGrid-root .MuiDataGrid-container--bottom [role=row] {
        color: #e3e3e8;
        background-color: #ffffff08;
    }
    .product-summary .css-1oudwrl::after {
        background: unset; 
    }
    .product-summary .css-1oudwrl {
        background-color: #ffffff08;
    }
    .darkgrey-color {
        color: #e3e3e8;
    }
    .product-search {
        padding: 25px;
        overflow: auto;
    }
    .product-search table {
        overflow-x: scroll;
        min-width: 1080px;
    }
    .product-search .css-rqglhn-MuiTable-root {
        border: 1px solid #4deeea1a;
    }
    .product-search .css-1ygcj2i-MuiTableCell-root {
        padding: 15px;
    }
    .product-search .css-1ygcj2i-MuiTableCell-root {
        border: 1px solid #4deeea1a;
        background-color: #ffffff08;
    }
    .product-search .css-1ex1afd-MuiTableCell-root {
        padding: 12px;
        border-bottom: none;
        border-right: 1px solid #4deeea1a;
    }
    .product-search .status-filed {
        padding: 4px 6px;
        border-radius: 10px;
        font-size: 11px;
        width: max-content;
    }
    .product-search .border-blue {
        border: 1px solid #4deeea1a;
    }
    .product-search .border-blue:hover {
        background-color: #4deeea1a;
        cursor: pointer;
    }
    .product-search .font-20 {
        padding: 4px 6px;
    }
    .product-search .font-20:hover {
        color: #4deeea !important;
        background: #00000033;
    }
    .product-search .css-1pqm26d-MuiAvatar-img {
        width: 32px;
        height: 32px;
        border-radius: 5px;
    }
    .copy-right-end p{
        font-size: 14px;
        padding: 38px 20px 20px;
        margin: 0 auto;
        text-align: center;
        color: #ffffffcc;
        @media (max-width: 480px) {
        font-size: 12px;
        }
    }
    .copy-right-end p a {
        color: #b0bbc7;
        padding: 0 5px;
    }
    .css-q34dxg {
        border-bottom: none;
    }
    .css-1bigob2, .css-1gqug66  {
        border: 1px solid #4deeea1a;
        background-color: #ffffff08;
    }







    
`;




export { Dashboard };