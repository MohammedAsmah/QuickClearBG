import { assets } from '../../assets/assets'
import './result.css'
export const Result_comp = () => {
  return (
    <div className="results_container">
        <div className="results">
          <div className="images_container">
            <div className="with_background">
                <h5>Original</h5>
                <img src={assets.image_w_bg} alt="iamage with bg" />
            </div>
            <div className="without_background">
                  <h5>Background removed</h5>
                  <div className="bckground_layer">
{/*                 <img src={assets.image_wo_bg} alt="iamage without bg" />
 */}                {/* <div className="preloader_container">
  <img className="preloader" src={assets.preloader} alt="preloader" />
</div> */}
                </div>
                </div>
                
                </div>
                <div className="res_controlers">
                  <div className='empty' ></div>
                  <div className='cont' >
                  <div className="try_other">
                    <button>
                       Try another image 
                    </button >
                  </div>
                  <div className="download">
                  <a  href=" ">Download image</a>
                  </div></div>
                </div>
            </div>
    </div>
  )
}
