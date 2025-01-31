import { useState } from "react"
import { assets } from "../../assets/assets"
import './bg_slider.css'
export const Bg_slider = () => {
    const [sliderposition,setSliderposition]=useState(50)
  return (
    <div className="bg_slider" >
        <div className="bg_container">

    <img className="with_bg"  style={{clipPath:`inset(0 ${100.2-sliderposition}% 0 0)`}} src={assets.image_w_bg} alt="" />

    <img className="without_bg" style={{clipPath:`inset(0 0 0 ${sliderposition}% )`}} src={assets.image_wo_bg} alt="" />

<input className="slider" type="range" value={sliderposition} onChange={(e)=>setSliderposition(e.target.value)} name="" id="" />
   </div> </div>
  )
}
