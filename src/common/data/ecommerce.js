/** Product 1 */
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";
import product3 from "../../assets/images/products/img-3.png";
import product4 from "../../assets/images/products/img-4.png";
import product5 from "../../assets/images/products/img-5.png";
import product6 from "../../assets/images/products/img-6.png";
import product7 from "../../assets/images/products/img-7.png";
import product8 from "../../assets/images/products/img-8.png";
import product9 from "../../assets/images/products/img-9.png";
import product10 from "../../assets/images/products/img-10.png";

import img10 from "../../assets/images/small/img-10.jpg";
import img11 from "../../assets/images/small/img-11.jpg";
import img12 from "../../assets/images/small/img-12.jpg";

import company1 from "../../assets/images/companies/img-1.png";
import company2 from "../../assets/images/companies/img-2.png";
import company3 from "../../assets/images/companies/img-3.png";
import company4 from "../../assets/images/companies/img-4.png";
import company5 from "../../assets/images/companies/img-5.png";
import company6 from "../../assets/images/companies/img-6.png";
import company7 from "../../assets/images/companies/img-7.png";
import company8 from "../../assets/images/companies/img-8.png";

const productsData = [
  {
    id: 1,
    image: product1,
    name: "Half Sleeve Round Neck T-Shirts",
    username: "12",
    email: 115,
    gender: "published",
    birthday: "12 Oct, 2021"
  },
  {
    id: 2,
    image: product2,
    name: "Urban Ladder Pashe Chair",
    username: "06",
    email: 160,
    gender: "unpublished",
    birthday: "06 Jan, 2021"
  },
  {
    id: 3,
    image: product3,
    name: "350 ml Glass Grocery Container",
    username: "10",
    email: 25,
    gender: "unpublished",
    birthday: "26 Mar, 2021"
  },
  {
    id: 4,
    image: product4,
    name: "Fabric Dual Tone Living Room Chair",
    username: "15",
    email: 140,
    gender: "unpublished",
    birthday: "19 Apr, 2021"
  },
  {
    id: 5,
    image: product5,
    name: "Crux Motorsports Helmet",
    username: "08",
    email: 135,
    gender: "unpublished",
    birthday: "30 Mar, 2021"
  },
  {
    id: 6,
    image: product6,
    name: "Half Sleeve T-Shirts (Blue)",
    username: "15",
    email: 125,
    gender: "unpublished",
    birthday: "12 Oct, 2021"
  },
  {
    id: 7,
    image: product7,
    name: "Noise Evolve Smartwatch",
    username: "12",
    email: 95,
    gender: "published",
    birthday: "15 May, 2021"
  },
  {
    id: 8,
    image: product8,
    name: "Sweatshirt for Men (Pink)",
    username: "20",
    email: 120,
    gender: "published",
    birthday: "21 Jun, 2021"
  },
  {
    id: 9,
    image: product9,
    name: "Reusable Ecological Coffee Cup",
    username: "14",
    email: 125,
    gender: "published",
    birthday: "15 Jan, 2021"
  },
  {
    id: 10,
    image: product10,
    name: "Travel Carrying Pouch Bag",
    username: "20",
    email: 115,
    gender: "published",
    birthday: "15 Jun, 2021"
  },
  {
    id: 11,
    image: product1,
    name: "Half Sleeve Round Neck T-Shirts",
    username: "12",
    email: 115,
    gender: "published",
    birthday: "12 Oct, 2021"
  },
  {
    id: 12,
    image: product2,
    name: "Urban Ladder Pashe Chair",
    username: "06",
    email: 160,
    gender: "published",
    birthday: "06 Jan, 2021"
  },
];

// Ecommerce > Product Details
const productDetailsWidgets = [
  {
    id: 1,
    icon: "ri-money-dollar-circle-fill",
    label: "email",
    labelDetail: "$120.40",
  },
  {
    id: 2,
    icon: "ri-file-copy-2-fill",
    label: "No. of Orders",
    labelDetail: "2,234",
  },
  {
    id: 3,
    icon: "ri-stack-fill",
    label: "Available usernames",
    labelDetail: "1,230",
  },
  {
    id: 4,
    icon: "ri-inbox-archive-fill",
    label: "Total Revenue",
    labelDetail: "$60,645",
  },
];

const reviews = [
  {
    id: 1,
    comment: "Superb sweatshirt. I loved it. It is for winter.",
    name: "Henry",
    date: "12 Jul, 21",
    subitem: [
      { id: 1, img: img12 },
      { id: 2, img: img11 },
      { id: 3, img: img10 },
    ],
  },
  {
    id: 2,
    comment: "Great at this email, Product quality and look is awesome.",
    name: "Nancy",
    date: "06 Jul, 21",
  },
  {
    id: 3,
    comment: "Good product. I am so happy.",
    name: "Joseph",
    date: "06 Jul, 21",
  },
  {
    id: 4,
    comment: "Nice Product, Good Quality.",
    name: "Jimmy",
    date: "24 Jun, 21",
  },
];

// Ecommerce > Orders

const orders = [
  {
    id: 1,
    orderId: "#VZ2101",
    customer: "Frank Hook",
    productname: "Puma Tshirt",
    orderDate: "20 Dec, 2021",
    ordertime: "02:21 AM",
    amount: "$654",
    payment: "Mastercard",
    status: "Pending",
    statusClass: "warning",
  },
  {
    id: 2,
    orderId: "#VZ2102",
    customer: "Rickey Teran",
    productname: "Adidas Sneakers",
    orderDate: "16 Dec, 2021",
    ordertime: "03:41 PM",
    amount: "$354",
    payment: "Paypal",
    status: "Cancelled",
    statusClass: "danger",
  },
  {
    id: 3,
    orderId: "#VZ2103",
    customer: "James email",
    productname: "350 ml Glass Grocery Container",
    orderDate: "28 Nov, 2021",
    ordertime: "11:33 AM",
    amount: "$829",
    payment: "Visa",
    status: "Inprogress",
    statusClass: "secondary",
  },
  {
    id: 4,
    orderId: "#VZ2104",
    customer: "Nettie Deloatch",
    productname: "American egale outfitters Shirt",
    orderDate: "22 Nov, 2021",
    ordertime: "10:19 PM",
    amount: "$142",
    payment: "COD",
    status: "Pending",
    statusClass: "warning",
  },
  {
    id: 5,
    orderId: "#VZ2105",
    customer: "Thomas Taylor",
    productname: "Galaxy Watch4",
    orderDate: "12 Nov, 2021",
    ordertime: "11:47 AM",
    amount: "$408",
    payment: "Mastercard",
    status: "Pickups",
    statusClass: "info",
  },
  {
    id: 6,
    orderId: "#VZ2106",
    customer: "James email",
    productname: "Apple iPhone 12",
    orderDate: "05 Nov, 2021",
    ordertime: "11:47 AM",
    amount: "$1240",
    payment: "Visa",
    status: "Inprogress",
    statusClass: "secondary",
  },
  {
    id: 7,
    orderId: "#VZ2107",
    customer: "Nancy Martino",
    productname: "Funky Prints T-shirt",
    orderDate: "31 Oct, 2021",
    ordertime: "08:55 PM",
    amount: "$180",
    payment: "COD",
    status: "Returns",
    statusClass: "primary",
  },
  {
    id: 8,
    orderId: "#VZ2108",
    customer: "Alexis Clarke",
    productname: "USB Flash Drive Personalized with 3D Print",
    orderDate: "25 Oct, 2021",
    ordertime: "05:33 AM",
    amount: "$247",
    payment: "Paypal",
    status: "Delivered",
    statusClass: "success",
  },
  {
    id: 9,
    orderId: "#VZ2109",
    customer: "Donald Palmer",
    productname: "Oxford Button-Down Shirt",
    orderDate: "19 Oct, 2021",
    ordertime: "12:43 AM",
    amount: "$373",
    payment: "Visa",
    status: "Pickups",
    statusClass: "info",
  },
  {
    id: 10,
    orderId: "#VZ2110",
    customer: "Henry Baird",
    productname: "Classic Short Sleeve Shirt",
    orderDate: "13 Oct, 2021",
    ordertime: "01:20 PM",
    amount: "$342",
    payment: "Mastercard",
    status: "Inprogress",
    statusClass: "secondary",
  },
  {
    id: 11,
    orderId: "#VZ2111",
    customer: "Diana Kohler",
    productname: "Half Sleeve T-Shirts (Blue)",
    orderDate: "01 Oct, 2021",
    ordertime: "03:08 AM",
    amount: "$874",
    payment: "Visa",
    status: "Delivered",
    statusClass: "success",
  },
  {
    id: 12,
    orderId: "#VZ2112",
    customer: "Alexis Clarke",
    productname: "Noise Evolve Smartwatch",
    orderDate: "29 Sep, 2021",
    ordertime: "04:24 AM",
    amount: "$1021",
    payment: "Mastercard",
    status: "Cancelled",
    statusClass: "danger",
  },
];

// Ecommerce > Order Details

const productDetails = [
  {
    id: 1,
    img: product8,
    name: "Sweatshirt for Men (Pink)",
    color: "Pink",
    size: "M",
    email: "$119.99",
    quantity: "02",
    amount: "$239.98",
  },
  {
    id: 2,
    img: product7,
    name: "Noise NoiseFit Endure Smart Watch",
    color: "Black",
    size: "32.5mm",
    email: "$94.99",
    quantity: "01",
    amount: "$94.99",
  },
  {
    id: 3,
    img: product3,
    name: "350 ml Glass Grocery Container",
    color: "White",
    size: "350 ml",
    email: "$24.99",
    quantity: "01",
    amount: "$24.99",
  },
];

// Ecommerce > Customers

const customerList = [
  {
    id: 1,
    customerId: "#VZ2101",
    customer: "Mary Cousar",
    email: "marycousar@velzon.com",
    phone: "580-464-4694",
    date: "06 Apr, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 2,
    customerId: "#VZ2102",
    customer: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    phone: "863-577-5537",
    date: "15 Feb, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 3,
    customerId: "#VZ2103",
    customer: "Robert McMahon",
    email: "robertmcmahon@velzon.com",
    phone: "786-253-9927",
    date: "12 Jan, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 4,
    customerId: "#VZ2104",
    customer: "Michael Morris",
    email: "michaelmorris@velzon.com",
    phone: "805-447-8398",
    date: "19 May, 2021",
    status: "Block",
    statusClass: "danger",
  },
  {
    id: 5,
    customerId: "#VZ2105",
    customer: "Kevin Dawson",
    email: "kevindawson@velzon.com",
    phone: "213-741-4294",
    date: "14 Apr, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 6,
    customerId: "#VZ2106",
    customer: "Carolyn Jones",
    email: "carolynjones@velzon.com",
    phone: "414-453-5725",
    date: "07 Jun, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 7,
    customerId: "#VZ2107",
    customer: "Glen Matney",
    email: "glenmatney@velzon.com",
    phone: "515-395-1069",
    date: "02 Nov, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 8,
    customerId: "#VZ2108",
    customer: "Charles Kubik",
    email: "charleskubik@velzon.com",
    phone: "231-480-8536",
    date: "25 Sep, 2021",
    status: "Block",
    statusClass: "danger",
  },
  {
    id: 9,
    customerId: "#VZ2109",
    customer: "Herbert Stokes",
    email: "herbertstokes@velzon.com",
    phone: "312-944-1448",
    date: "20 Jul, 2021",
    status: "Block",
    statusClass: "danger",
  },
  {
    id: 10,
    customerId: "#VZ21010",
    customer: "Timothy Smith",
    email: "timothysmith@velzon.com",
    phone: "973-277-6950",
    date: "13 Dec, 2021",
    status: "Active",
    statusClass: "success",
  },
  {
    id: 11,
    customerId: "#VZ21011",
    customer: "Johnny Evans",
    email: "johnnyevans@velzon.com",
    phone: "407-645-1767",
    date: "01 Oct, 2021",
    status: "Block",
    statusClass: "danger",
  },
  {
    id: 12,
    customerId: "#VZ21012",
    customer: "Kevin Dawson",
    email: "kevindawson@velzon.com",
    phone: "213-741-4294",
    date: "14 Apr, 2021",
    status: "Active",
    statusClass: "success",
  },
];

// Ecommerce > Shopping Cart

const shoppingCart = [
  {
    id: 1,
    img: product8,
    name: "Sweatshirt for Men (Pink)",
    color: "Pink",
    size: "M",
    data_attr: 1,
    email: "119.99",
    total: "239.98",
  },
  {
    id: 2,
    img: product7,
    name: "Noise NoiseFit Endure Smart Watch",
    color: "Black",
    size: "32.5mm",
    data_attr: 1,
    email: "94.99",
    total: "94.99",
  },
  {
    id: 3,
    img: product3,
    name: "350 ml Glass Grocery Container",
    color: "White",
    size: "350 ml",
    data_attr: 1,
    email: "24.99",
    total: "24.99",
  },
];

// Ecommerce > Checkout

const orderSummary = [
  {
    id: 1,
    img: product8,
    name: "Sweatshirt for Men (Pink)",
    email: 119.99,
    quantity: 2,
    total: 239.98
  },
  {
    id: 2,
    img: product7,
    name: "Noise Evolve Smartwatch",
    email: 94.99,
    quantity: 1,
    total: 94.99
  },
  {
    id: 3,
    img: product3,
    name: "350 ml Glass Grocery Container",
    email: 24.99,
    quantity: 1,
    total: 24.99
  },
];

// Ecommerce > Sellers

const sellersList = [
  {
    id: 1,
    isTrending: true,
    img: company1,
    label: "Force Medicines",
    name: "David Marshall",
    username: "452",
    chartdata: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    color: "#f06548",
    balance: "$45,415",
  },
  {
    id: 2,
    isTrending: false,
    img: company2,
    label: "Micro Design",
    name: "Katia Stapleton",
    username: "784",
    chartdata: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89],
    color: "#0ab39c",
    balance: "$97,642",
  },
  {
    id: 3,
    isTrending: false,
    img: company3,
    label: "Nesta Technologies",
    name: "Harley Fuller",
    username: "320",
    chartdata: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
    color: "#f7b84b",
    balance: "$27,102",
  },
  {
    id: 4,
    isTrending: true,
    img: company4,
    label: "iTest Factory",
    name: "Oliver Tyler",
    username: "159",
    chartdata: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50],
    color: "#0ab39c",
    balance: "$14,933",
  },
  {
    id: 5,
    isTrending: false,
    img: company5,
    label: "Meta4Systems",
    name: "Zoe Dennis",
    username: "363",
    chartdata: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16],
    color: "#f7b84b",
    balance: "$73,426",
  },
  {
    id: 6,
    isTrending: true,
    img: company6,
    label: "Digitech Galaxy",
    name: "John Roberts",
    username: "412",
    chartdata: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49],
    color: "#0ab39c",
    balance: "$34,241",
  },
  {
    id: 7,
    isTrending: true,
    img: company7,
    label: "Syntyce Solutions",
    name: "Demi Allen",
    username: "945",
    chartdata: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35],
    color: "#f06548",
    balance: "$17,200",
  },
  {
    id: 8,
    isTrending: false,
    img: company8,
    label: "Zoetic Fashion",
    name: "James Bowen",
    username: "784",
    chartdata: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
    color: "#f7b84b",
    balance: "$97,642",
  },
];

// Ecommerce > Seller Details > Revenue

const revenueWidgets = [
  {
    id: 1,
    counter: "7585",
    label: "Orders",
    decimals: 0,
    prefix: "",
    separator: "",
    suffix: ""
  },
  {
    id: 2,
    counter: "22.89",
    label: "Earnings",
    decimals: 2,
    prefix: "$",
    separator: ",",
    suffix: "k"
  },
  {
    id: 3,
    counter: "367",
    label: "Refunds",
    decimals: 1,
    prefix: "$",
    separator: ",",
    suffix: ""
  },
  {
    id: 4,
    counter: "18.92",
    counterClass: "text-success",
    label: "Conversation Ratio",
    decimals: 2,
    prefix: "",
    separator: "",
    suffix: "%"
  },
];


// Ecommerce > Seller Details > Products Review

const productsReview = [
  {
    id: 1,
    img: company1,
    caption: "Great product and looks great, lots of features.",
    name: "Force Medicines",
    subItem: [
      { id: 1, icon: "ri-star-fill" },
      { id: 2, icon: "ri-star-fill" },
      { id: 3, icon: "ri-star-fill" },
      { id: 4, icon: "ri-star-fill" },
      { id: 5, icon: "ri-star-fill" },
    ],
  },
  {
    id: 2,
    img: product3,
    caption: "Amazing template, very easy to understand and manipulate.",
    name: "Henry Baird",
    subItem: [
      { id: 1, icon: "ri-star-fill" },
      { id: 2, icon: "ri-star-fill" },
      { id: 3, icon: "ri-star-fill" },
      { id: 4, icon: "ri-star-fill" },
      { id: 5, icon: "ri-star-half-fill" },
    ],
  },
  {
    id: 3,
    img: company8,
    caption: "Very beautiful product and Very helpful customer service.",
    name: "Zoetic Fashion",
    subItem: [
      { id: 1, icon: "ri-star-fill" },
      { id: 2, icon: "ri-star-fill" },
      { id: 3, icon: "ri-star-fill" },
      { id: 4, icon: "ri-star-line" },
      { id: 5, icon: "ri-star-line" },
    ],
  },
  {
    id: 4,
    img: product2,
    caption: "The product is very beautiful. I like it.",
    name: "Nancy Martino",
    subItem: [
      { id: 1, icon: "ri-star-fill" },
      { id: 2, icon: "ri-star-fill" },
      { id: 3, icon: "ri-star-fill" },
      { id: 4, icon: "ri-star-half-fill" },
      { id: 5, icon: "ri-star-line" },
    ],
  },
];

export { productsData, productDetailsWidgets, reviews, orders, productDetails, customerList, shoppingCart, orderSummary, sellersList, revenueWidgets, productsReview };