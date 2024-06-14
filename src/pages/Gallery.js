import React from 'react'
import Layout from '../components/Layout/Layout'
import ben from "../image/ben.jpg"
import cons from "../image/cons.png"
import cover from "../image/cover-React.js.png"
import images from "../image/images.png"
import pros from "../image/pros.png"
import rt from "../image/reactjs-features.png"

const Gallery = () => {
  return (
    <Layout>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={ben}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={cover}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={cons}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={pros}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={images}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={rt}/>
        </div>
      </div>
    </div>
  </div>
</section>


        </Layout>
  )
}

export default Gallery