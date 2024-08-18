import React from 'react'
import HomeAmbience from './CustomizableHome/sections/HomeAmbience.customizable'
export default function Test() {


  return (
    <div className='w-full text-black  py-80 absolute top-0 left-0 '>
      <HomeAmbience />

    </div>
  )
}


// import React from 'react'
// import StatsCarousel from '../components/StatsCarousel'
// import axios from 'axios';
// import { IoMdPhotos } from "react-icons/io";

// export default function Test() {

//   const [image, setImage] = React.useState("");

//   const uploadImage = (files) => {
//     const formData = new FormData();

//     formData.append("file", files[0]);
//     formData.append("upload_preset", "test2test");
//     fetch(
//       "https://api.cloudinary.com/v1_1/dw2d5lgfk/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setImage(data.secure_url);
//         console.log(data.secure_url)
//       });
//   };







//   return (
//     <div className='w-full h-screen bg-zinc-800 absolute top-0 left-0 '>

//       <input type="file" onChange={(e) => uploadImage(e.target.files)} />
//       <img
//         src={image}
//         alt="uploaded image"
//       />


//     </div>
//   )
// }

