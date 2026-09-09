import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";

const STORAGE_KEY = "brezora_rooms";


// =====================================================
// DEFAULT ROOMS
// =====================================================

const defaultRooms = [
  {
    id: 1,

    title: "Single Room / Brezora I",

    time: "Check-out 10:00 AM",

    price: "₹2000 / Day",

    // HOME PAGE IMAGE
    image: Image1,

    // ROOM DETAILS SLIDER
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image7,
      Image8
    ],

    desc: "Perfect for solo travelers.",

    available: true,
  },


  {
    id: 2,

    title: "Single Room / Brezora II",

    time: "Check-out 10:00 AM",

    price: "₹2000 / Day",
     image: null,

    gallery: [
      
    ],

    desc: "Premium interiors with view.",

    available: true,
  },


  {
    id: 3,

    title: "2BHK Villa",

    time: "Check-out 10:00 AM",

    price: "₹4000 / Day",

    image: null,

    gallery: [],

    desc: "Perfect for families.",

    available: true,
  },


  {
    id: 4,

    title: "3BHK Villa",

    time: "Check-out 10:00 AM",

    price: "₹6000 / Day",

    image: null,

    gallery: [],

    desc: "Luxury stay with scenic view.",

    available: true,
  },


  {
    id: 5,

    title: "4BHK Villa",

    time: "Check-out 10:00 AM",

    price: "₹8000 / Day",

    image: null,

    gallery: [],

    desc: "Best for large groups.",

    available: true,
  },
];


// =====================================================
// GET ROOMS
// =====================================================

export const getRooms = () => {

  const savedRooms =
    localStorage.getItem(STORAGE_KEY);


  // ---------------------------------------------------
  // FIRST LOAD
  // ---------------------------------------------------

  if (!savedRooms) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultRooms)
    );

    return defaultRooms;
  }


  // ---------------------------------------------------
  // LOAD SAVED ROOMS
  // ---------------------------------------------------

  try {

    const parsedRooms =
      JSON.parse(savedRooms);


    if (!Array.isArray(parsedRooms)) {

      throw new Error(
        "Invalid room data"
      );
    }


    // -------------------------------------------------
    // MERGE SAVED DATA WITH DEFAULT DATA
    // -------------------------------------------------

    const updatedRooms =
      defaultRooms.map(
        (defaultRoom) => {

          const savedRoom =
            parsedRooms.find(
              (room) =>
                room.id === defaultRoom.id
            );


          // No saved room
          if (!savedRoom) {

            return defaultRoom;
          }


          return {

            ...defaultRoom,


            // -----------------------------------------
            // KEEP SAVED TEXT DATA
            // -----------------------------------------

            title:
              savedRoom.title ||
              defaultRoom.title,

            time:
              savedRoom.time ||
              defaultRoom.time,

            price:
              savedRoom.price ||
              defaultRoom.price,

            desc:
              savedRoom.desc ||
              defaultRoom.desc,


            // -----------------------------------------
            // KEEP SAVED AVAILABILITY
            // -----------------------------------------

            available:
              savedRoom.available !== undefined
                ? savedRoom.available
                : defaultRoom.available,


            // -----------------------------------------
            // ALWAYS USE DEFAULT IMAGE
            // -----------------------------------------

            image:
              defaultRoom.image,


            // -----------------------------------------
            // ALWAYS USE DEFAULT GALLERY
            // -----------------------------------------

            gallery:
              defaultRoom.gallery,
          };
        }
      );


    // Save updated rooms

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedRooms)
    );


    return updatedRooms;

  } catch (error) {

    console.error(
      "Error loading rooms:",
      error
    );


    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultRooms)
    );


    return defaultRooms;
  }
};


// =====================================================
// SAVE ROOMS
// =====================================================

export const saveRooms = (rooms) => {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(rooms)
  );


  window.dispatchEvent(
    new Event("roomsUpdated")
  );
};


// =====================================================
// RESET ROOMS
// =====================================================

export const resetRooms = () => {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultRooms)
  );


  window.dispatchEvent(
    new Event("roomsUpdated")
  );


  return defaultRooms;
};


// =====================================================
// EXPORT DEFAULT ROOMS
// =====================================================

export { defaultRooms };