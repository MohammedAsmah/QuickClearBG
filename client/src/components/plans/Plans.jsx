import { plans } from "../../assets/assets"
import Title from "../title/title"
import './plans.css'
export const Plans = () => {

  return (
    <div className='all_plans' >
        <div className="our_plans">
                    <button>
                       Our Plans 
                    </button >
                  </div>
        <div className="plans">
            <div className="plans_title">
                <h3>Choose the plan that's right for you</h3>
            </div>
            <div className="plans_container">
                {plans.map((plan)=>{
                    return(
                    <div key={plan.id} className="plan">
                        <img src="logo_icon.png" alt="logo icon" />
                        <h4>{plan.id}</h4>
                        <p>{plan.desc}</p>
                        <h3>{plan.price} $<span>/{plan.credits}</span> </h3>
                        <button className="btn" >Get started</button>
                    </div>
                )})}
            </div>
        </div>
    </div>
  )
}
