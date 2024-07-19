import { Grid } from "@mui/material";
import { Dashboard } from "./Main_contentcss";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NorthIcon from '@mui/icons-material/North';
import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { ChartContainer, BarPlot } from '@mui/x-charts';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TimelineIcon from '@mui/icons-material/Timeline';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';



import table_img_one from "../../Assets/Image/Img/32.png";
import table_img_two from "../../Assets/Image/Img/34.png";
import table_img_three from "../../Assets/Image/Img/33.png";
import table_img_four from "../../Assets/Image/Img/37.png";
import table_img_five from "../../Assets/Image/Img/35.png";
import table_two_img_one from "../../Assets/Image/Img/7.jpg";
import table_two_img_two from "../../Assets/Image/Img/18.jpg";
import table_two_img_three from "../../Assets/Image/Img/19.jpg";
import table_two_img_four from "../../Assets/Image/Img/20.jpg";
import table_two_img_five from "../../Assets/Image/Img/6.jpg";
import { DataGrid } from '@mui/x-data-grid';
import customImage2 from "../../Assets/Image/Img/34.png";
import User from "../../Assets/Image/Img/35.png";
import Avatar from "@mui/material/Avatar";
import menuimage from "../../Assets/Image/Img/g1.jpg";
import img_four from "../../Assets/Image/Img/e2.jpg";
import img_five from "../../Assets/Image/Img/e3.jpg";
import img_six from "../../Assets/Image/Img/e4.jpg";
import img_seven from "../../Assets/Image/Img/e5.jpg";
import img_eight from "../../Assets/Image/Img/c1.jpg";
import img_nine from "../../Assets/Image/Img/c2.jpg";
import img_ten from "../../Assets/Image/Img/c3.jpg";
import img_eleven from "../../Assets/Image/Img/c4.jpg";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';



function Main_content() {

  const uData1 = [104, 102, 117, 146, 118, 115, 220];
  const uData = [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 262, 174];
  const pData = [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240];
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value1, setValue1] = React.useState('1');
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };

  const columns = [
    { field: 'id', headerName: 'Date', width: 100, },
    { field: 'clientname', headerName: 'Client Name', width: 100 },
    { field: 'product', headerName: 'Product', width: 100 },
    { field: 'transaction', headerName: 'Transaction ID', type: 'number', width: 100 },
    { field: 'cost', headerName: 'Cost', type: 'number', },
    { field: 'payment', headerName: 'Payment Method', type: 'number', width: 100 },
    { field: 'status', headerName: 'Status', type: 'number', width: 100 },
    {
      field: "user1", headerName: "image data", width: 100, renderCell: (params) =>
        <Box>
          {/* <img src={params.value} /> */}
          <Avatar src={params.value} />

        </Box>
    }


    // { field: 'action', headerName: 'Action', type: 'number', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (value, row) => ``,},
  ];

  const rows = [
    { id: "26-01-2022", clientname: 'Carmen Goh', user1: customImage2, transaction: "#51702935164", cost: "$3,200", payment: "Online", status: "Pending", action: <ArrowCircleDownIcon /> },
    { id: "25-01-2022", clientname: 'Tex Ryta', user1: User, transaction: "#41506275962", cost: "$8,600", payment: "Cash On Delivery", status: "Shipped", action: <ArrowCircleDownIcon /> },
    { id: "17-09-2021", clientname: 'Emma Grate', user1: menuimage, transaction: "#71802951620", cost: "$22,600", payment: "Online", status: "Delivered", action: <ArrowCircleDownIcon /> },
    { id: "18-09-2021", clientname: 'Barry Kade', user1: img_four, transaction: "#12352990666", cost: "$49,670", payment: "Online", status: "Pending", action: <ArrowCircleDownIcon /> },
    { id: "26-01-2022", clientname: 'Carmen Goh', user1: img_five, transaction: "#51702935164", cost: "$3,200", payment: "Online", status: "Pending", action: <ArrowCircleDownIcon /> },
    { id: "27-01-2022", clientname: 'Carmen Goh', user1: img_six, product: 'Rebum dolores at erat ipsum', transaction: "#51702935164", cost: "$3,200", payment: "Online", status: "Pending", action: <ArrowCircleDownIcon /> },
    { id: "08-02-2021", clientname: 'Marge Areen', user1: img_seven, product: 'Rebum dolores at erat ipsum', transaction: "#51702935164", cost: "$3,200", payment: "Cash On Delivery", status: "Delivered", action: <ArrowCircleDownIcon /> },
    { id: "06-02-2022", clientname: 'Anne Gloindian', user1: img_eight, product: 'Diam voluptua stet invidunt sed', transaction: "#47652758630", cost: "$1,000", payment: "Cash On Delivery", status: "Cancelled", action: <ArrowCircleDownIcon /> },
    { id: "01-01-2022", clientname: 'Ruby Bartlett', user1: img_nine, product: 'No voluptua amet sit clita', transaction: "#31201254680", cost: "$15,500", payment: "Online", status: "Cancelled", action: <ArrowCircleDownIcon /> },
    { id: "02-01-2022", clientname: 'Sean Black', user1: img_ten, product: 'Et et kasd ipsum clita', transaction: "#11002255660", cost: "$4,350", payment: "Online", status: "Delivered", action: <ArrowCircleDownIcon /> },
    { id: "03-01-2022", clientname: 'Sean Black', user1: img_eleven, product: 'Et et kasd ipsum clita', transaction: "#11002255660", cost: "$4,350", payment: "Online", status: "Delivered", action: <ArrowCircleDownIcon /> },

  ];

  return (

    <Box>
      <Dashboard>
        <Box class="main-content">
          <Box class="dashboard-part d-flex justify-content-between align-items-center">
            <Box class="dash-title">
              <h2 className="m-0">DASHBOARD</h2>
            </Box>
            <Box>
              <ul className="dash-list d-flex align-items-center gap-20 m-0">
                <li><a href="">Dashboard</a></li>
                <li className="position-relative active-tab">Main</li>
              </ul>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xl={9} lg={12} sm={12} xs={12}>
              <Box class="dashboard-box box-line-shadow position-relative">
                <Grid container spacing={0}>
                  <Grid item lg={6} md={6} sm={12} xl={3} xs={12}>
                    <Box class="box-one d-flex justify-content-between align-items-center">
                      <Box class="box-one-title text-start">
                        <p className="m-0 text-primary-color">Total Profit</p>
                        <h4 className="m-0">$8,943.00</h4>
                        <p className="m-0">Current Month</p>
                      </Box>
                      <Box>
                        <AccountBalanceWalletIcon className="text-shadow" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xl={3} xs={12}>
                    <Box class="box-one d-flex justify-content-between align-items-center">
                      <Box class="box-one-title text-start">
                        <p className="m-0 text-primary-color">Total Orders</p>
                        <h4 className="m-0">5,472.00</h4>
                        <p className="m-0">Current Month</p>
                      </Box>
                      <Box>
                        <ShoppingCartIcon className="text-yellow text-yellow-shadow" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xl={3} xs={12}>
                    <Box class="box-one d-flex justify-content-between align-items-center">
                      <Box class="box-one-title text-start">
                        <p className="m-0 text-primary-color">Total Sales</p>
                        <h4 className="m-0">4406.00</h4>
                        <p className="m-0">Current Month</p>
                      </Box>
                      <Box>
                        <TrendingUpIcon className="text-orange text-orange-shadow" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xl={3} xs={12}>
                    <Box class="box-one d-flex justify-content-between align-items-center">
                      <Box class="box-one-title text-start">
                        <p className="m-0 text-primary-color">Total Investment</p>
                        <h4 className="m-0">$34K <span className="growth-bg">56 <NorthIcon className="up-arrow" /></span></h4>
                        <p className="m-0">Current Month</p>
                      </Box>
                      <Box>
                        <ChartContainer
                          width={120}
                          height={70}
                          margin={{
                            left: 10,
                            right: 0,
                            top: 10,
                            bottom: 10,
                          }}
                          series={[{ data: uData1, label: 'uv', type: 'bar' }]}
                          xAxis={[{ scaleType: 'band', data: xLabels }]}>
                          <BarPlot />
                        </ChartContainer>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box class="activity-section">
                <Grid container spacing={3}>
                  <Grid item xl={4} lg={12} sm={12} xs={12} >
                    <Box class="box-shadow-content box-line-shadow position-relative br-4">
                      <Box class="activity-log d-flex justify-content-between align-items-center">
                        <h4 className="m-0">Activity Log</h4>
                        <p className="m-0">View All</p>
                      </Box>
                      <Box class="timeline-tag">
                        <ul>
                          <li className="">
                            <Box class="tagline-one activity-content-one position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0"> <span className="text-green font-13">Katy Perri </span>commented.</p>
                              <span className="font-11 text-darkgrey">1h</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-two position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0">Neon Tarly <span className=" font-11">added </span><span className="text-secondary">Robin Bright </span><span className=" font-11">to the</span>  Summit AI <span className="font-11">Project.</span></p>
                              <span className="font-11 text-darkgrey">6h</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-three position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0 d-flex align-items-center">Wanda Rag<span className="ps-5 font-11">replied your comment</span><CheckIcon className="ps-5 tx-15 text-danger font-weight-700" /></p>
                              <span className="font-11 text-darkgrey">1d</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-four position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0">You <span className=" font-11">deleted </span><span className="font-11 badge-warning-transparent">20 files</span><span className=" font-11"> from the</span>  Summit AI <span className="font-11">Project.</span></p>
                              <span className="font-11 text-darkgrey">4h</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-five position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0 d-flex align-items-center">Created <span className="tx-success font-11 py-5"> a New Task </span>Today <AddIcon className=" font-13 rounded-circle bg-success-transparent tx-success" /></p>
                              <span className="font-11 text-darkgrey">2h</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-six position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0"> New Member <span className="badge-info-transparent font-11">@andras.betson</span> added Yesterday.</p>
                              <span className="font-11 text-darkgrey">1d</span>
                            </Box>
                          </li>
                          <li className="">
                            <Box class="tagline-one activity-content-seven position-relative d-flex justify-content-between align-items-center">
                              <p className="text-grey font-13 m-0"> Neon Tarly <span className=" font-11">added </span><span className="tx-orange">Robin Bright </span><span className=" font-11">to the</span>  Summit AI <span className="font-11">Project.</span></p>
                              <span className="font-11 text-darkgrey">6h</span>
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={8} lg={12} sm={12} xs={12}>
                    <Box class="box-shadow-content box-line-shadow position-relative br-4">
                      <Box class="activity-log d-flex justify-content-between align-items-center">
                        <h4 className="m-0">Sales report</h4>
                        <p className="m-0"><span className="d-flex align-items-center">monthly <ArrowDropDownIcon /></span></p>
                      </Box>
                      <Box class="sales-chart">
                        <Box class="d-flex order-sales justify-content-between gap-10">
                          <Box class="sales-state">
                            <h3 className="m-0">Active Orders</h3>
                            <p className="m-0 d-flex justify-content-center align-items-center">106<ArrowDropUpIcon className="tx-success" /><span className="bg-success-transparent tx-success">+0.12%</span></p>
                          </Box>
                          <Box class="sales-state">
                            <h3 className="m-0">Completed Orders</h3>
                            <p className="m-0 d-flex justify-content-center align-items-center">420<ArrowDropUpIcon className="tx-success" /><span className="bg-success-transparent tx-success">+0.24%</span></p>
                          </Box>
                          <Box class="sales-state">
                            <h3 className="m-0">Sales Revenue</h3>
                            <p className="m-0 d-flex justify-content-center align-items-center">106<ArrowDropUpIcon className="text-danger" /><span className="bg-danger-transparent text-danger">+0.24%</span></p>
                          </Box>
                        </Box>
                        <Box class="sales-report">
                          <BarChart
                            height={300}
                            series={[
                              { data: pData, label: 'Active Orders', id: 'pvId' },
                              { data: uData, label: 'Completed Orders', id: 'uvId' },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                          />
                        </Box>

                      </Box>

                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xl={6} lg={6} sm={12} xs={12}>
                    <Box class="box-shadow-content box-line-shadow position-relative mt-24 br-4">
                      <TabContext value={value}>
                        <Box class="activity-log d-flex justify-content-between align-items-center">
                          <h4 className="m-0">Best Selling Products</h4>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="PANDING" value="1" />
                            <Tab label="CONFORMED" value="2" />
                          </TabList>
                        </Box>
                        <Box>
                          <TabPanel value="1">
                            <Box class="table-data-one">
                              <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>ProductName</TableCell>
                                      <TableCell>Total Orders </TableCell>
                                      <TableCell>Status</TableCell>
                                      <TableCell> Price </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-warning-transparent">
                                            <img src={table_img_one} alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">SPECTS YELLOW</p>
                                            <span>#4002364Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">520</p>
                                          <span>July 24, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-primary font-13">stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$40.00</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-primary-transparent">
                                            <img src={table_img_two} alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">HEADPHONES Blue</p>
                                            <span>#2002484Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">240</p>
                                          <span>Nov 18, 2021</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">out of stock</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$39.89</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-pink-transparent">
                                            <img src={table_img_three} alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">BAG Pink</p>
                                            <span>#30023784Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">400</p>
                                          <span>April 16, 2021</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">Stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$22.50</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-success-transparent">
                                            <img src={table_img_four} alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">SHOES Green</p>
                                            <span>#4002364Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">89</p>
                                          <span>Feb 06, 2021</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">out of stock</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$38.04</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-primary-transparent">
                                            <img src={table_img_five} alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">WATCH Blue</p>
                                            <span>#2402429Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">106</p>
                                          <span>Sep 24, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-primary font-13">stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$25.89</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          </TabPanel>
                          <TabPanel value="2">
                            <Box class="table-data-one">
                              <TableContainer component={Paper}>
                                <Table sx={{}} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>ProductName</TableCell>
                                      <TableCell>Total Orders </TableCell>
                                      <TableCell>Status</TableCell>
                                      <TableCell>Price</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one">
                                            <img src={table_two_img_one} className="tab-two-img p-0" alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">White Shoes</p>
                                            <span>#4002364Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">89</p>
                                          <span>Feb 06, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-primary font-13">Out of stock</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$38.04</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one">
                                            <img src={table_two_img_two} className="tab-two-img p-0" alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">WATCH Blue</p>
                                            <span>#2402429Edb</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">106</p>
                                          <span>Sep 24, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">Stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$25.65</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one">
                                            <img src={table_two_img_three} className="tab-two-img p-0" alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">DIGITAL CAMERA</p>
                                            <span>#24024345df</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">34</p>
                                          <span>Sep 29, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">Stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$1299.00</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one">
                                            <img src={table_two_img_four} className="tab-two-img p-0" alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">PHOTO FRAME</p>
                                            <span>#2402429Der</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">114</p>
                                          <span>Sep 20, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-secondary font-13">out of stock</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$12.00</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>
                                        <Box class="d-flex align-items-center">
                                          <Box class="data-table-one bg-primary-transparent">
                                            <img src={table_two_img_five} className="tab-two-img p-0" alt="" />
                                          </Box>
                                          <Box class="data-table-list text-start">
                                            <p className="m-0">FLOWER POT</p>
                                            <span>#2402429Eff</span>
                                          </Box>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <p className="m-0">236</p>
                                          <span>Sep 22, 2020</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-2 text-start">
                                          <span className="tx-primary font-13">stock Ready</span>
                                        </Box>
                                      </TableCell>
                                      <TableCell>
                                        <Box class="data-3 text-start">
                                          <span className="">$20.89</span>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          </TabPanel>
                        </Box>
                      </TabContext>

                    </Box>
                  </Grid>
                  <Grid item xl={6} lg={6} sm={12} xs={12}>
                    <Box class="box-shadow-content box-line-shadow position-relative mt-24 br-4">
                      <Box class="activity-log d-flex justify-content-between align-items-center">
                        <h4 className="m-0">transactions history</h4>
                        <p className="m-0">View All</p>
                      </Box>
                      <Box class="table-data-one trans-history">
                        <TableContainer component={Paper}>
                          <Table sx={{}} aria-label="simple table">
                            <TableBody>
                              <TableRow>
                                <TableCell>
                                  <Box class="d-flex align-items-center">
                                    <Box class="data-table-one mr-16 bg-primary-transparent">
                                      <CreditCardIcon className="text-primary" />
                                    </Box>
                                    <Box class="data-table-list text-start">
                                      <a className="d-flex" href="http://#"><p className="m-0">Visa Card</p><span className="border-primary text-primary">Processing</span></a>
                                      <span>Just now</span>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box class="data-2 text-start">
                                    <p className="m-0"><span class="text-primary">- </span>$2,45,000</p>
                                  </Box>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Box class="d-flex align-items-center">
                                    <Box class="data-table-one mr-16 bg-warning-transparent">
                                      <PhoneAndroidIcon className="text-warning" />
                                    </Box>
                                    <Box class="data-table-list text-start">
                                      <p className="m-0">Through UPI</p>
                                      <span>Yesterday</span>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box class="data-2 text-start">
                                    <p className="m-0"><span className="text-warning">+ </span>$100.<span className="">00</span></p>
                                  </Box>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Box class="d-flex align-items-center">
                                    <Box class="data-table-one bg-orange-transparent mr-16">
                                      <ArrowDownwardIcon className="tx-orange" />
                                    </Box>
                                    <Box class="data-table-list text-start">
                                      <a className="d-flex" href="http://#"><p className="m-0">Bank Of Baroda Credit Card</p><span className="border-orange tx-orange">Completed</span></a>
                                      <span>17-04-2022</span>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box class="data-2 text-start">
                                    <p className="m-0"><span className="tx-orange">- </span>$1,50,000</p>
                                  </Box>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Box class="d-flex align-items-center">
                                    <Box class="data-table-one bg-success-transparent  mr-16">
                                      <ArrowUpwardIcon className="tx-success" />
                                    </Box>
                                    <Box class="data-table-list text-start">
                                      <p className="m-0">Paid By PayPal</p>
                                      <span>21-04-2022</span>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box class="data-2 text-start">
                                    <p className="m-0"><span className="tx-success">- </span>$500.<span className="">00</span></p>

                                  </Box>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Box class="d-flex align-items-center">
                                    <Box class="data-table-one bg-primary-transparent mr-16 ">
                                      <MoreHorizIcon className="tx-secondary" />
                                    </Box>
                                    <Box class="data-table-list text-start">
                                      <a className="d-flex" href="http://#"><p className="m-0">Credit Card</p><span className="border-secondary tx-secondary">Processing</span></a>
                                      <span>25-04-2022</span>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box class="data-2 text-start">
                                    <p className="m-0"><span class="tx-secondary">+ </span>$3,000</p>
                                  </Box>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>

                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xl={3} lg={12} sm={12} xs={12}>
              <Box class="box-shadow-content box-line-shadow position-relative br-4">
                <Box class="activity-log d-flex justify-content-between align-items-center">
                  <h4 className="m-0">tasks</h4>
                  <p className="m-0">View All</p>
                </Box>
                <Box class="task-data-detail">
                  <Box class="table-data-one ">
                    <TableContainer component={Paper}>
                      <Table sx={{}} aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Box class="d-flex align-items-center">
                                <Box class="data-table-one mr-16 bg-primary-transparent">
                                  <TimelineIcon className="text-primary font-13" />
                                </Box>
                                <Box class="data-table-list text-start">
                                  <a className="d-flex" href="http://#"><p className="m-0">To Do</p></a>
                                  <span>2m ago <span className="wd-5 ht-5 rounded-circle bg-primary inline-block"></span> in progress</span>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box class="data-2 dart-list text-start">
                                <span className=" d-flex align-items-center gap-10 tx-primary bg-primary-transparent br-4"><ArrowForwardIcon className="font-13" />10.06.2020</span>
                              </Box>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Box class="d-flex align-items-center">
                                <Box class="data-table-one mr-16 bg-secondary-transparent">
                                  <KeyboardCommandKeyIcon className="text-secondary font-13" />
                                </Box>
                                <Box class="data-table-list text-start">
                                  <p className="m-0">Task In Progress</p>
                                  <span>2m ago <span className="wd-5 ht-5 rounded-circle bg-secondary inline-block"></span> started</span>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box class="data-2 dart-list text-start">
                                <span className=" d-flex align-items-center gap-10 tx-secondary bg-secondary-transparent br-4"><ArrowForwardIcon className="font-13" />02.06.2020</span>

                              </Box>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Box class="d-flex align-items-center">
                                <Box class="data-table-one bg-orange-transparent mr-16">
                                  <LanguageIcon className="text-orange font-13" />
                                </Box>
                                <Box class="data-table-list text-start">
                                  <a className="d-flex" href="http://#"><p className="m-0">Completed Task</p></a>
                                  <span>2m ago <span className="wd-5 ht-5 rounded-circle bg-warning inline-block"></span> completed</span>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box class="data-2 dart-list text-start">
                                <span className=" d-flex align-items-center gap-10 text-warning bg-warning-transparent br-4"><ArrowForwardIcon className="font-13" />06.12.2022</span>

                              </Box>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Box class="d-flex align-items-center">
                                <Box class="data-table-one bg-success-transparent  mr-16">
                                  <TimelineIcon className="tx-success font-13" />
                                </Box>
                                <Box class="data-table-list text-start">
                                  <p className="m-0">To Do</p>
                                  <span>2m ago <span className="wd-5 ht-5 rounded-circle bg-success inline-block"></span> in progress</span>

                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box class="data-2 dart-list text-start">
                                <span className=" d-flex align-items-center gap-10 tx-success bg-success-transparent br-4"><ArrowForwardIcon className="font-13" />12.06.2021</span>
                              </Box>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>



                </Box>
              </Box>
              <Box class="box-shadow-content box-line-shadow position-relative br-4 mt-24">
                <Box class="activity-log text-start">
                  <h4 className="m-0">profit by country</h4>
                </Box>
                <Box class="slider-box">
                  <Box className="slider-one color-one position-relative">
                    <Slider size="small" defaultValue={30} aria-label="Small" valueLabelDisplay="auto" />
                    <p className="m-0 font-13 left-title position-absolute">india</p>
                    <p className="m-0 font-13 d-flex align-items-center right-title position-absolute text-primary"><ArrowUpwardIcon className="font-13" />$21,234.90</p>
                  </Box>
                  <Box className="slider-one color-two position-relative">
                    <Slider size="small" defaultValue={50} aria-label="Small" valueLabelDisplay="auto" />
                    <p className="m-0 font-13 left-title position-absolute">usa</p>
                    <p className="m-0 font-13 d-flex align-items-center gap-10 right-title position-absolute text-primary">increased<span className="text-secondary br-4 font-11 bg-secondary-transparent">42%</span></p>
                  </Box>
                  <Box className="slider-one color-three position-relative">
                    <Slider size="small" defaultValue={10} aria-label="Small" valueLabelDisplay="auto" />
                    <p className="m-0 font-13 left-title position-absolute">russia</p>
                    <p className="m-0 font-13 d-flex align-items-center right-title position-absolute tx-success"><ArrowUpwardIcon className="font-13" />$14,256</p>
                  </Box>
                  <Box className="slider-one color-four position-relative">
                    <Slider size="small" defaultValue={40} aria-label="Small" valueLabelDisplay="auto" />
                    <p className="m-0 font-13 left-title position-absolute">uae</p>
                    <p className="m-0 font-13 d-flex align-items-center gap-10 right-title position-absolute text-orange"><ArrowDownwardIcon className="font-13" />- $4,345.69</p>
                  </Box>
                  <Box className="slider-one color-five position-relative">
                    <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
                    <p className="m-0 font-13 left-title position-absolute">china</p>
                    <p className="m-0 font-13 d-flex align-items-center gap-10 right-title position-absolute text-purple"><ArrowUpwardIcon className="font-13" />+ $72,234.50</p>
                  </Box>
                </Box>

              </Box>
              <Box class="box-shadow-content box-line-shadow position-relative br-4 mt-24">
                <TabContext value={value1}>
                  <Box class="activity-log billing-section d-flex justify-content-between align-items-center">
                    <h4 className="m-0">billings</h4>
                    <TabList onChange={handleChange1} aria-label="lab API tabs example">
                      <Tab label="received" value="1" />
                      <Tab label="paid" value="2" />
                    </TabList>
                  </Box>
                  <Box className="billing-data">
                    <TabPanel value="1">
                      <Box class="receive-data">
                        <ul className="p-0">
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Joseph Arimathea</p>
                                <span>15 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$5,000</p>
                              <span>Today</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Simon Cyrene</p>
                                <span>37 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$89,400</p>
                              <span>20 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <p className="font-13 bg-secondary-transparent p-5 rounded-circle">ps</p>
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Penelope Smallbone</p>
                                <span>2 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$20,400</p>
                              <span>20 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Ruby Bartlett</p>
                                <span>37 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$49,250</p>
                              <span>17 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Sylvia Trench</p>
                                <span>4 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$9,260</p>
                              <span>10 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center p-0">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Simon Cyrene</p>
                                <span>37 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-primary">+$89,400</p>
                              <span>20 Jan 22</span>
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </TabPanel>
                    <TabPanel value="2">
                      <Box class="receive-data">
                        <ul className="p-0">
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <p className="font-13 bg-secondary-transparent p-5 rounded-circle">le</p>
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Lisbon Es</p>
                                <span>2 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$20,000</p>
                              <span>Today</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Liza Doolittle</p>
                                <span>7 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$65,000</p>
                              <span>15 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Tiffany Case</p>
                                <span>2 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$6,030</p>
                              <span>15 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Shady Tree</p>
                                <span>7 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$5,800</p>
                              <span>14 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Henry Flex</p>
                                <span>7 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$68,100</p>
                              <span>11 Jan 22</span>
                            </Box>
                          </li>
                          <li className="d-flex justify-content-between align-items-center p-0">
                            <Box className="d-flex align-items-center">
                              <Box>
                                <PersonIcon className="font-13 bg-primary-transparent p-5 rounded-circle" />
                              </Box>
                              <Box className="bill-title">
                                <p className="m-0">Shady Tree</p>
                                <span>7 Invoices</span>
                              </Box>
                            </Box>
                            <Box className="bill-title text-end">
                              <p className="m-0 text-yellow">+$5,800</p>
                              <span>14 Jan 22</span>
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </TabPanel>
                  </Box>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
          <Box className="box-shadow-content box-line-shadow position-relative br-4 mt-24">
            <Box class="activity-log d-flex justify-content-between align-items-center">
              <h4 className="m-0">product summary</h4>
            </Box>
            <Box>
              <Box class="product-search">
                <Table>
                  <TableHead>
                    <TableRow className="">
                      <TableCell className="darkgrey-color font-14">Date</TableCell>
                      <TableCell className="darkgrey-color font-14">Client Name</TableCell>
                      <TableCell className="darkgrey-color font-14">Product</TableCell>
                      <TableCell className="darkgrey-color font-14">Transaction ID</TableCell>
                      <TableCell className="darkgrey-color font-14">Cost</TableCell>
                      <TableCell className="darkgrey-color font-14">Payment Method</TableCell>
                      <TableCell className="darkgrey-color font-14">Status</TableCell>
                      <TableCell className="darkgrey-color font-14">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">20-01-20</TableCell>
                      <TableCell className="grey-color font-13">Santi Argo</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_four} variant="square" />
                        <p className="m-0 font-13">Sed vero et ipsum et</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#23412858169</TableCell>
                      <TableCell className="grey-color font-13">$18,900</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-orange">
                        <span className="bg-orange-transparent status-filed">
                          Shipped
                        </span>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">26-01-22</TableCell>
                      <TableCell className="grey-color font-13">Carmen Goh</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_five} variant="square" />
                        <p className="m-0 font-13">Rebum dolores at erat ipsum</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#51702935164</TableCell>
                      <TableCell className="grey-color font-13">$3,200</TableCell>
                      <TableCell className="grey-color font-13">Online</TableCell>
                      <TableCell className=" font-13 tx-secondary">
                        <span className="bg-secondary-transparent status-filed">
                        Pending
                        </span>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">01-01-22</TableCell>
                      <TableCell className="grey-color font-13">Ruby Bartlett</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_six} variant="square" />
                        <p className="m-0 font-13">No voluptua amet sit clita</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#31201254680</TableCell>
                      <TableCell className="grey-color font-13">$15,500</TableCell>
                      <TableCell className="grey-color font-13">Online</TableCell>
                      <TableCell className=" font-13 tx-orange">
                        <span className="bg-orange-transparent status-filed">
                        Cancelled
                        </span>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">06-08-21</TableCell>
                      <TableCell className="grey-color font-13">Anne Gloindian</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_seven} variant="square" />
                        <p className="m-0 font-13">No stet eos justo voluptua</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#91012557664</TableCell>
                      <TableCell className="grey-color font-13">$6,700</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-orange">
                        <span className="bg-orange-transparent status-filed">
                        Cancelled
                        </span>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">17-09-21</TableCell>
                      <TableCell className="grey-color font-13">Emma Grate</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_nine} variant="square" />
                        <p className="m-0 font-13">Ipsum et sit diam ut</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#71802951620</TableCell>
                      <TableCell className="grey-color font-13">$22,600</TableCell>
                      <TableCell className="grey-color font-13">Online</TableCell>
                      <TableCell className=" font-13 tx-primary">
                        <span className="bg-primary-transparent status-filed">
                        Delivered
                        </span>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">01-01-22</TableCell>
                      <TableCell className="grey-color font-13">Sean Black</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_seven} variant="square" />
                        <p className="m-0 font-13">Et et kasd ipsum clita</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#23412858169</TableCell>
                      <TableCell className="grey-color font-13">$4,350</TableCell>
                      <TableCell className="grey-color font-13">Online</TableCell>
                      <TableCell className=" font-13 tx-primary">
                        <Box className="bg-primary-transparent status-filed">
                        Delivered
                        </Box>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">17-04-21</TableCell>
                      <TableCell className="grey-color font-13">Barry Kade</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_eight} variant="square" />
                        <p className="m-0 font-13">Eos justo nonumy stet sit</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#12352990666</TableCell>
                      <TableCell className="grey-color font-13">$49,670</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-secondary">
                        <Box className="bg-secondary-transparent status-filed">
                        Online
                        </Box>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">25-01-22</TableCell>
                      <TableCell className="grey-color font-13">Tex Ryta</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_ten} variant="square" />
                        <p className="m-0 font-13">Dolor sea lorem lorem diam</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#41506275962</TableCell>
                      <TableCell className="grey-color font-13">$8,600</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-orange">
                        <Box className="bg-orange-transparent status-filed">
                          Shipped
                        </Box>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">08-02-21</TableCell>
                      <TableCell className="grey-color font-13">Marge Areen</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_eleven} variant="square" />
                        <p className="m-0 font-13">Diam voluptua stet invidunt sed</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#47652758630</TableCell>
                      <TableCell className="grey-color font-13">$1,000</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-primary">
                        <Box className="bg-primary-transparent status-filed">
                        Delivered
                        </Box>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-blue">
                      <TableCell className="grey-color font-13">10-11-2021</TableCell>
                      <TableCell className="grey-color font-13">Santi Argo</TableCell>
                      <TableCell className="d-flex align-items-center grey-color gap-10">
                        <Avatar alt="Remy Sharp" src={img_four} variant="square" />
                        <p className="m-0 font-13">Sed vero et ipsum et</p>
                      </TableCell>
                      <TableCell className="grey-color font-13">#23412858169</TableCell>
                      <TableCell className="grey-color font-13">$18,900</TableCell>
                      <TableCell className="grey-color font-13">Cash On Delivery</TableCell>
                      <TableCell className=" font-13 tx-orange">
                        <Box className="bg-orange-transparent status-filed">
                          Shipped
                        </Box>
                      </TableCell>
                      <TableCell className="grey-color font-13">
                        <Box class="d-flex align-items-center gap-20">
                          <EditCalendarIcon className="grey-color font-20" />
                          <DeleteIcon className="grey-color font-20" />
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>


              </Box>
              {/* <Box className="product-summary">
                <Box style={{ height: 800, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    loop={false}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                  />
                </Box>

              </Box> */}
            </Box>
          </Box>

        </Box>
        <Box class="copy-right-end ">
          <p className=""> Copyright © 2023 <a className="text-primary" href="http://#"> zem</a>. Designed with <FavoriteIcon className="text-danger font-13 py-5" />by <a href="http://#"> Spruko </a> All rights reserved </p>
        </Box>


      </Dashboard>

    </Box>
  );
}

export default Main_content;
