import logo from './logo.png'
import logo_icon from './logo_icon.svg'
import arrow from './arrow.png' 
import arrow_icon from './arrow_icon.svg' 
import header_img from './header_image_2.jpg'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import black_download_icon from './download_icon.png'
import white_download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import user_1 from './user-1.png'
import user_2 from './user-2.png'
import user_3 from './user-3.png'
import user_4 from './user-4.png'
import credit_icon from './credit_icon.png'
import remove from './remove.png'
import upload from './upload.png'
import download from './download.png'
import preloader from './Loading_2.gif'


export const assets = {
  preloader,
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    arrow,
    remove_bg_icon,
    upload_icon,
    black_download_icon,
    white_download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon,
    remove,
    upload,
    download,
    user_1,
    user_2,
    user_3,
    user_4
}
export const testimonials = [
        {
            name: "Sarah Chen",
            role: "Photographer",
            image: assets.user_1,
            quote: "QuickClearBG has revolutionized my workflow. I can process photos for my clients in seconds rather than minutes. The edge detection is remarkably accurate, saving me hours of manual editing time."
        },
        {
            name: "Marcus Thompson",
            role: "E-commerce Manager",
            image: assets.user_2,
            quote: "As someone who manages hundreds of product photos weekly, this tool is a game-changer. The batch processing feature is incredibly efficient, and the results are consistently professional."
        },
        {
            name: "Olivia Rodriguez",
            role: "Social Media Influencer",
            image: assets.user_3,
            quote: "I've tried many background removal tools, but QuickClearBG is by far the most user-friendly. Perfect for creating consistent, clean content for my social media posts"
        },
        {
            name: "David Park",
            role: "Graphic Designer",
            image: assets.user_4,
            quote: "The precision of QuickClearBG is impressive. Whether it's hair strands or complex edges, the AI handles it beautifully. It's become an essential part of my design toolkit."
        }]


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]