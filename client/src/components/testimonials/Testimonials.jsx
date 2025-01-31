import { assets } from '../../assets/assets';
import './testimonials.css';
import { useState, useEffect } from 'react';

export default function Testimonials() {
    const [move, setMove] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 850);
    const testimonials = [
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
    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth > 850;
            setIsLargeScreen(isLarge);

            if (move < -50 && isLarge) {
                setMove(-50);
            } else if (move < -75 && !isLarge) {
                setMove(-75);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [move]);

    const goBack = () => {
        if (move < 0) {
            setMove(prev => prev + 25);
        }
    };

    const goNext = () => {
        if (window.innerWidth < 850) {
            if (move > -75) {
                setMove(prev => prev - 25);
            }
        } else {
            if (move > -50) {
                setMove(prev => prev - 25);
            }
        }
    };

    return (
        <div name="Testimonials" className='testimonials container'>
            <button className='back' onClick={goBack}>
                <img src={assets.arrow} alt="Back icon" />
            </button>
            <button className='next' onClick={goNext}>
                <img src={assets.arrow} alt="Next icon" />
            </button>
            <div className="allsl">
              
                <div className="test_slider" style={{ transform: `translateX(${move}%)` }}>
                    {testimonials.map((test, index) => (
                        <div className="testimonial" key={index}>
                            <div className="info">
                                <img src={test.image} alt={`${test.name}'s profile`} />
                                <div className="name">
                                    <h4>{test.name}</h4>
                                    <p className="role">{test.role}</p>
                                </div>
                            </div>
                            <p>{test.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}