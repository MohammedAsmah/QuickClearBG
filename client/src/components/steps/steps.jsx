import { assets } from "../../assets/assets"
import './steps.css'
export const Steps = () => {
  return (
    <div className="steps" >
        <div className="step">
            <div className="step_inf">
                <img src={assets.upload} alt="" />
                <h4>Upload imnage</h4>
            </div>
            <div className="step_desc">
              <p>Select and upload the image you want to edit. Start your journey effortlessly.</p>
            </div>
        </div>
        <div className="step">
            <div className="step_inf">
                <img src={assets.remove} alt="" />
                <h4>Remove Background</h4>
            </div>
            <div className="step_desc">
              <p>Remove the background instantly and make your image stand out with just one click.</p>
            </div>
        </div>
        <div className="step">
            <div className="step_inf">
                <img src={assets.download} alt="" />
                <h4> Download Image</h4>
            </div>
            <div className="step_desc">
              <p>Download your beautifully edited image in high quality and share it anywhere.</p>
            </div>
        </div>
    </div>
  )
}
