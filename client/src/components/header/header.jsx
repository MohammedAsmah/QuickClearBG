import { assets } from "../../assets/assets"
import "./header.css"
export const Header = () => {
  return (
    <div className="header" >
        <div className="right" >
            {/* right side */}
            <h2 className="header_title" >Effortlessly Remove <span>Backgrounds</span>  with AI-Powered Precision</h2>
            <p className="paragraph" >Experience the magic of AI technology. Instantly remove image backgrounds with just one click—no technical skills required! Perfect for businesses, designers, and creators looking for fast, accurate results.</p>
            <input type="file" id="apload1" hidden/>
            <label className="btn" htmlFor="apload1">
                
                <img src={assets.upload_btn_icon} alt="" />
                <p>Upload your image</p>
            </label >
        </div>
        <div  className="left">
            {/* left side */}
            <img src={assets.header_img} alt="header pic" />
        </div>
        
    </div>
  )
}
