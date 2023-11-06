import bannaer from '../../assets/e-learning-banner-online-education-home-schooling-display-with-open-textbook-group-of-various-students-learning-web-courses-tutorials-education-2FMK8K5.jpg'
import { TbUserHeart } from 'react-icons/tb';
import { BsArrowRight, BsBookHalf } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';
import { PiChatCircleTextFill } from 'react-icons/pi';


const Banner = () => {
    return (
       <div>
         <div className=' bg-gradient-to-b from-transparent via-transparent to-violet-200'>
           <div className="hero lg:h-[85vh] h-auto container mx-auto">
            <div className=" flex lg:flex-row flex-col-reverse  justify-around gap-10 items-center">
                
                <div className='lg:text-start text-center py-10'> 
                    <h1 className="lg:text-5xl text-3xl  font-bold pb-2 w-11/12 lg:m-0 m-auto">Online study groups & <span className='text-violet-600'>Assignment submition.</span></h1>
                    <p className="py-6 w-1/2 pb-10 text-lg lg:m-0 m-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. </p>
                    <button className="btn btn-primary bg-violet-600 text-white">Get Started</button>
                    <button className="btn btn-outline btn-primary ml-5">Learn More</button>
                </div>
                <div>
                <img  src={bannaer} className="rounded-lg" />
                </div>
            </div>
            </div>
        </div>

        <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 container mx-auto lg:-mt-12 px-5 pb-16'>
            <div className='bg-white rounded-md shadow-xl text-center p-4'>
                <p className='text-4xl pt-2 pb-2 m-auto flex justify-center hover:text-violet-600' ><TbUserHeart></TbUserHeart></p>
                <h1 className='text-2xl font-semibold pb-2 '>Exclusive Advisor</h1>
                <p className='font-semibold text-gray-400 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae!</p>
                <button className='text-lg font-semibold text-violet-600 flex items-center gap-3 m-auto'>Get Started <BsArrowRight></BsArrowRight></button>
            </div>
            <div className='bg-white rounded-md shadow-xl text-center p-4'>
                <p className='text-4xl pt-2 pb-2 m-auto flex justify-center hover:text-violet-600'><BsBookHalf></BsBookHalf></p>
                <h1 className='text-2xl font-semibold pb-2'>Digital Library</h1>
                <p className='font-semibold text-gray-400 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae!</p>
                <button className='text-lg font-semibold text-violet-600 flex items-center gap-3 m-auto'>Get Started <BsArrowRight></BsArrowRight></button>
            </div>
            <div className='bg-white rounded-md shadow-xl text-center p-4'>
                <p className='text-4xl pt-2 pb-2 m-auto flex justify-center hover:text-violet-600'><MdComputer></MdComputer></p>
                <h1 className='text-2xl font-semibold pb-2'>Online Toturing</h1>
                <p className='font-semibold text-gray-400 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae!</p>
                <button className='text-lg font-semibold text-violet-600 flex items-center gap-3 m-auto'>Get Started <BsArrowRight></BsArrowRight></button>
            </div>
            <div className='bg-white rounded-md shadow-xl text-center p-4'>
                <p className='text-4xl pt-2 pb-2 m-auto flex justify-center hover:text-violet-600'><PiChatCircleTextFill></PiChatCircleTextFill></p>
                <h1 className='text-2xl font-semibold pb-2'>Study Group</h1>
                <p className='font-semibold text-gray-400 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae!</p>
                <button className='text-lg font-semibold text-violet-600 flex items-center gap-3 m-auto'>Get Started <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Banner;