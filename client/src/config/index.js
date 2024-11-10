export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

// export const addProductFormElements = [
//   {
//     label: "Title",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter product title",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter product description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "plates", label: "Plates" },
//       { id: "glasses", label: "Glasses" },
//       { id: "kids", label: "Kids" },
//       { id: "accessories", label: "Accessories" },
//       { id: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     label: "Brand",
//     name: "brand",
//     componentType: "select",
//     options: [
//       { id: "sarda", label: "Sarda" },
//       { id: "rr", label: "RR" },
//       { id: "puma", label: "Puma" },
//       { id: "levi", label: "Levi's" },
//       { id: "zara", label: "Zara" },
//       { id: "h&m", label: "H&M" },
//     ],
//   },
//   {
//     label: "Material",
//     name: "material",
//     componentType: "select",
//     options: [
//       { id: "sarda", label: "Bio-Degradable" },
//       { id: "rr", label: "Conventional Plastics" },
//       { id: "puma", label: "Wood" },
//       { id: "levi", label: "Aluminum" },
//       { id: "zara", label: "Palm Leaf" },
//       { id: "h&m", label: "Foam" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter product price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
// ];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "plates", label: "Plates" },
      { id: "glasses", label: "Glasses" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  // {
  //   label: "Subcategory",  // New field for subcategory
  //   name: "subcategory",
  //   componentType: "select", // Dropdown for subcategories
  //   dependentOn: "category",  // Indicates that it's dependent on category
  //   placeholder: "Select a subcategory",
  //   options: []  // This will be dynamically filled based on the selected category
  // },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sarda", label: "Sarda" },
      { id: "sony", label: "Sony" },
      { id: "vardhaman", label: "Vardhaman" },
      { id: "rr", label: "RR" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Material",
    name: "material",
    componentType: "select",
    options: [
      { id: "biodegradable", label: "Bio-Degradable" },
      { id: "conventionalplastics", label: "Conventional Plastics" },
      { id: "wood", label: "Wood" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];


export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  // {
  //   id: "men",
  //   label: "Men",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "women",
  //   label: "Women",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "kids",
  //   label: "Kids",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "footwear",
  //   label: "Footwear",
  //   path: "/shop/listing",
  // },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const materialOptionsMap = {
  biodegradable: "Bio-Degradable",
  conventionalplastics: "Conventional Plastics",
  wood: "Wood",
  aluminum: "Aluminum",
};

// export const filterOptions = {
//   category: [
//     { id: "plates", label: "Plates" },
//     { id: "glasses", label: "Glasses" },
//     { id: "kids", label: "Kids" },
//     { id: "accessories", label: "Accessories" },
//     { id: "footwear", label: "Footwear" },
//   ],
//   brand: [
//     { id: "sarda", label: "Sarda" },
//     { id: "rr", label: "RR" },
//     { id: "puma", label: "Puma" },
//     { id: "levi", label: "Levi's" },
//     { id: "zara", label: "Zara" },
//     { id: "h&m", label: "H&M" },
//   ],
//   material: [
//     { id: "sarda", label: "Bio-Degradable" },
//     { id: "rr", label: "Conventional Plastics" },
//     { id: "puma", label: "Wood" },
//     { id: "levi", label: "Aluminum" },
//     { id: "zara", label: "Palm Leaf" },
//     { id: "h&m", label: "Foam" },
//   ],
// };

export const filterOptions = {
  category: [
    { 
      id: "plates", 
      label: "Plates",
      // subcategories: [
      //   { id: "dinner-plates", label: "Dinner Plates" },
      //   { id: "salad-plates", label: "Salad Plates" },
      //   { id: "dessert-plates", label: "Dessert Plates" },
      //   { id: "charger-plates", label: "Charger Plates" }
      // ]
    },
    { 
      id: "glasses", 
      label: "Glasses",
      // subcategories: [
      //   { id: "wine-glasses", label: "Wine Glasses" },
      //   { id: "water-glasses", label: "Water Glasses" },
      //   { id: "champagne-flutes", label: "Champagne Flutes" },
      //   { id: "cocktail-glasses", label: "Cocktail Glasses" }
      // ]
    },
    { 
      id: "kids", 
      label: "Kids",
      // subcategories: [
      //   { id: "kids-plates", label: "Plates" },
      //   { id: "kids-cups", label: "Cups" },
      //   { id: "kids-utensils", label: "Utensils" },
      //   { id: "lunch-boxes", label: "Lunch Boxes" }
      // ]
    },
    { 
      id: "accessories", 
      label: "Accessories",
      // subcategories: [
      //   { id: "napkin-rings", label: "Napkin Rings" },
      //   { id: "placemats", label: "Placemats" },
      //   { id: "coasters", label: "Coasters" },
      //   { id: "serving-utensils", label: "Serving Utensils" }
      // ]
    },
    { 
      id: "footwear", 
      label: "Footwear",
      // subcategories: [
      //   { id: "kitchen-shoes", label: "Kitchen Shoes" },
      //   { id: "outdoor-dining-slippers", label: "Outdoor Dining Slippers" },
      //   { id: "anti-slip-socks", label: "Anti-Slip Socks" }
      // ]
    },
  ],
  brand: [
    { id: "sarda", label: "Sarda" },
    { id: "rr", label: "RR" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "vardhaman", label: "Vardhaman" },
  ],
  material: [
    { id: "biodegradable", label: "Bio-Degradable" },
    { id: "conventionalplastics", label: "Conventional Plastics" },
    { id: "wood", label: "Wood" },
    { id: "aluminum", label: "Aluminum" },
    { id: "palm-leaf", label: "Palm Leaf" },
    { id: "foam", label: "Foam" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
