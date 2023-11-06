import exilen from '../../assets/klsol.jpg'
import { BsCheck2Square } from 'react-icons/bs';


const ExilentService = () => {
    return (
        <div>
            <div className="text-center py-10 pt-16">
                <h2 className="text-lg font-semibold text-violet-500">EXCELLENT SERVICE</h2>
                <h1 className="text-3xl font-semibold text-gray-700"><span className="">Edocoda Online Learning!</span></h1>
            </div>
            <div>
            <div className=''>
                <div className="hero h-auto container mx-auto py-10">
                    <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center gap-20 items-center">
                        <div>
                            <img  src={exilen} className="rounded-lg" />
                        </div>
                        <div className='text-start py-10'> 
                            <h1 className="lg:text-4xl text-3xl  font-bold pb-2 text-violet-900">dissertaion Writion service</h1>
                            <p className="py-6 w-10/12 pb-10 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.</p>
                            <ul className='space-y-2 pb-7 text-violet-700'>
                                <li className='flex gap-2 items-center'><span><BsCheck2Square></BsCheck2Square></span> Nuns egesta sodalist congee sit amen neue sed auctors.</li>
                                <li className='flex gap-2 items-center'><span><BsCheck2Square></BsCheck2Square></span> Aeneas premium neue eger massa quia semper.</li>
                                <li className='flex gap-2 items-center'><span><BsCheck2Square></BsCheck2Square></span> Crash id utricles ex, et congee torpor.</li>
                                <li className='flex gap-2 items-center'><span><BsCheck2Square></BsCheck2Square></span> Maurist at placenta Nullo consenter dui sed ligula auctors.</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ExilentService;