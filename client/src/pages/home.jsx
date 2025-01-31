import { assets } from '../assets/assets'
import { Bg_slider } from '../components/bg_slider/Bg_slider'
import { Header } from '../components/header/header'
import { Steps } from '../components/steps/steps'
import  Testimonials  from '../components/testimonials/Testimonials'
import  Title  from '../components/title/title'

export default function Home () {
  return (
    <div>
      <Header/>
      <Title title="Steps to remove background image in seconds" />
      <Steps/>
      <Title title="Remove Background With High Quality and Accuracy" />
      <Bg_slider/>
      <Title title="Customer Testimonials" />
      <Testimonials/>
      <Title title="See the magic. Try now" />
      <div className='last_sec' >
         <input type="file" id="apload2" hidden/>
                    <label className="btn" htmlFor="apload2">
                        
                        <img src={assets.upload_btn_icon} alt="" />
                        <p>Upload your image</p>
                    </label >
      </div>
    </div>
  )
}
