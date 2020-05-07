const propertyData = [{
    id: "1",
    name: "Morgan Palace",
    price: 34590,
    isAvaliable: false,
    city: "Patna",
    parking: false,
    ownerId: "1"
  },
  {
    id: "2",
    name: "Singh's Villa",
    price: 345990,
    isAvaliable: false,
    city: "Chandigarh",
    ownerId: "2"
  },
  {
    id: "3",
    name: "Gupta's House",
    price: 345990,
    isAvaliable: false,
    city: "Chandigarh",
    ownerId: "1"
  },
  {
    id: "4",
    name: "Amaan's Villa",
    price: 345990,
    isAvaliable: false,
    city: "Mohali",
    ownerId: "3"
  }
];

const ownerData = [{
  id: "1",
  name: "Rahul",
  contactNum: 989987889,
  email: "rr13@gmail.com"
}, {
  id: "2",
  name: "Rahul Raj",
  contactNum: 91298788,
  email: "rzz13@gmail.com"
}, {
  id: "3",
  name: "Gaurav Raj",
  contactNum: 298788,
  email: "raj13@gmail.com"
}]

const cityData = [{
    name: "Patna"
  },
  {
    name: "Chandigarh"
  },
  {
    name: "Mohali"
  }
]

const db = {
  propertyData,
  ownerData,
  cityData
}
 export default  db;