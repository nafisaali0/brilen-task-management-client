import { Link } from 'react-router-dom';
import bgImage from '../../../assets/image/Background/bg-3.jpg'
import image from '../../../assets/image/Background/image-remove-1.png'
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen flex items-center" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-content container mx-auto text-neutral-content">
                    <div className='flex flex-col lg:flex-row items-center text-black'>
                        <div className="flex-1 lg:w-1/2 lg:text-left">
                            <h1 className="mb-5 text-5xl font-bold">Save time and get more done</h1>
                            <p className="mb-5">Get everyone working in a single platform designed to manage any type of work.</p>
                            <Link to="/signin"><button className="btn bg-black text-white">Explore</button></Link>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full' src={image} alt="Large Image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Banner;