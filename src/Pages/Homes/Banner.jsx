import bannaer from '../../assets/e-learning-banner-online-education-home-schooling-display-with-open-textbook-group-of-various-students-learning-web-courses-tutorials-education-2FMK8K5.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto'>
           <div className="hero lg:h-[80vh] h-auto ">
            <div className=" flex lg:flex-row flex-col-reverse  justify-around gap-10 items-center">
                
                <div className='lg:text-start text-center'> 
                    <h1 className="lg:text-5xl text-3xl  font-bold pb-2 w-11/12 lg:m-0 m-auto">Online study groups & <span className='text-primary'>Assignment submition.</span></h1>
                    <p className="py-6 w-1/2 pb-10 text-lg lg:m-0 m-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut</p>
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline btn-primary ml-5">Learn More</button>
                </div>
                <div>
                <img  src={bannaer} className="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;