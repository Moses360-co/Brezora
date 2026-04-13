// servicesData.js

const servicesData = {
  header: {
    title: "Our Services",
    description:
      "Breezora provides thoughtfully curated services to elevate your stay in Kodaikanal, offering comfort, tranquility, and a memorable experience surrounded by nature’s beauty.",
  },

  contact: {
    phone: "918124582703", // WhatsApp number with country code
  },

  services: [
    {
      id: 1,
      title: "Cottage Booking",
      description:
        "Easily discover and book cozy, well-maintained cottages with transparent pricing, smooth reservations, and a completely stress-free stay experience.",
    },
    {
      id: 2,
      title: "Home-Style Food",
      description:
        "Fresh, hygienic, and lovingly prepared homemade meals served daily for a comforting dining experience.",
      menu: [
        { id: 1, item: "Tea", price: 15 },
        { id: 2, item: "Coffee", price: 20 },
        { id: 3, item: "Milk", price: 15 },
        { id: 4, item: "Idly(2)", price: 30 },
        { id: 5, item: "Dosa", price: 45 },
        { id: 6, item: "Pongal", price: 60 },
        { id: 7, item: "Poori Masal(2)", price: 60 },
        { id: 8, item: "Rava Kichadi", price: 60 },
        { id: 9, item: "Onion Dosa", price: 60 },
        { id: 10, item: "Egg Dosa", price: 60 },
        { id: 11, item: "Uthappam", price: 30 },
        { id: 12, item: "Vada", price: 15 },
        { id: 13, item: "Chappathi(2)", price: 50 },
        { id: 14, item: "Veg Meals", price: 150 },
        { id: 15, item: "Veg Biryani", price: 120 },
        { id: 16, item: "Chicken Biryani", price: 190 },
        { id: 17, item: "Fish Curry 1Kg", price: 850 },
        { id: 18, item: "Omelette", price: 20 },
        { id: 19, item: "Chicken Curry 1Kg", price: 800 },
        { id: 20, item: "Chicken 65 1Kg", price: 850 },
        { id: 21, item: "Mutton Curry 1Kg", price: 1800 },
        { id: 22, item: "Pepper Chicken 1Kg", price: 800 },
      ],
    },
    {
      id: 3,
      title: "Travel Assistance",
      description:
        "Safe, comfortable, and reliable travel services including local sightseeing, airport pickup, and drop facilities.",
    },
    {
      id: 4,
      title: "Off-Road Jeep Ride",
      description:
        "Enjoy an adventurous off-road jeep ride through misty hills, dense forests, and breathtaking natural landscapes.",
    },
  ],
};

export default servicesData;
