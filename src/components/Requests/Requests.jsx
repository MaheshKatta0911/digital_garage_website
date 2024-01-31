import {React, useState , useEffect} from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import './Requests.css'
import { sliderSettings } from "../../utils/common";

const Requests = () => {
    const [database, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch(`${BACKEND_URL}/getServices`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    const handleSubmit = async (serviceId, status) => {
        event.preventDefault(); // Prevent the default form submission
    
    
        try {
          const response = await fetch(`${BACKEND_URL}/updateServiceRequest/${serviceId}/${status}`,
          {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Adjust the content type if needed
            },
        });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          // Handle the response data
          console.log(data);
        } catch (error) {
          // Handle errors
          console.error('Error:', error);
        }
      };
  return (
<section className="r-wrapper" id='requests'>
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className="primaryText">Requests from users</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons />
            {
               database &&  database.map((card,i)=>(
                    <SwiperSlide key={i}>
                        <div className=" flexColStart r-card">
                            <img style={{width: '25rem', height:'8rem'}} src={card.serviceImage}  alt="home" /> 
                            <span className="secondaryText r-price">
                            <span style={{color:"orange"}}> $ </span> <span>{card.cost} </span>  
                            </span>
                            <span className="primaryText">{card.serviceName}</span>
                            <span className="secondaryText">{card.description}</span>
                            <button className='requestBtn' onClick={()=>handleSubmit(card.serviceId,"accept")} type="submit">Accept</button>
                        </div>      
                </SwiperSlide>
            ))
            }
        </Swiper>

    </div>
</section>  )
}

export default Requests;
const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
<div className="flexCenter r-buttons">
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    
</div>

    );
}