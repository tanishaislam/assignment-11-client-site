import { useContext, useState } from 'react';
import logoImg from '../../assets/logos.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Providers/AuthProviders';
import toast from 'react-hot-toast';


const CreateAssaignment = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    
    // const [title, setTitle] = useState('');
    // const [imgURL, setImgURL] = useState('');
    // const [mark, setMark] = useState(0);
    // const [discription, setDiscription] = useState('');
    // const [difficulty, setDifficulty] = useState('easy');
    // console.log(title, startDate, imgURL,mark,difficulty, discription)

    const handleCreateAssignment = (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const imgURL = e.target.ImgURL.value;
        const mark = e.target.marks.value;
        const difficulty = e.target.difficulty.value;
        const discription = e.target.description.value;
        const order = {
            title, 
            imgURL,
            mark,
            difficulty,
            discription, 
            startDate, 
            email: user?.email,
        }
        console.log(order)
        fetch('https://assaignment-11-server-beige.vercel.app/assignments',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Assignment is Successfully Created !')
            }
        })
    }
    return (
        <div>
            <div className="">
            <div>
            <form onSubmit={handleCreateAssignment}>
                <div className="flex justify-center items-center flex-col bg-gradient-to-b from-white to-violet-300 pb-5">                   
                    <div className="text-center pt-6">
                        <img className="h-16 m-auto" src={logoImg} alt="" />
                        <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold text-violet-600 pb-5 pt-5">Create Assignment</h1>
                        <p className="text-md text-gray-500 font-semibold w-4/5 m-auto pb-10"> Facere atque debitis blanditiis incidunt qui? amet consectetur adipisicing.</p>
                    </div>
                    <div className="flex gap-5 flex-col justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Assignment Title</span>
                            </label>
                            <label className="">
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="Assignment Title" 
                                    className="input lg:w-96 md:w-96 w-auto rounded-sm bordered border-violet-300" 
                                    required 
                                    // onBlur={(e)=>setTitle(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Thumbnail Image URL</span>
                            </label>
                            <label className="">
                                <input 
                                    type="text" 
                                    name="ImgURL" 
                                    placeholder="Thumbnail Image URL" 
                                    className="input lg:w-96 md:w-96 w-auto rounded-sm bordered border-violet-300" 
                                    // onBlur={(e)=>setImgURL(e.target.value)}
                                    required 
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Marks</span>
                            </label>
                            <label className="">
                                <input 
                                    type="number" 
                                    name="marks" 
                                    placeholder="Marks" 
                                    className="input lg:w-96 md:w-96 w-auto rounded-sm bordered border-violet-300"
                                    // onBlur={(e)=>setMark(e.target.value)} 
                                    required 
                                />
                            </label>
                        </div>
                        <div className='flex gap-4 lg:flex-row md:flex-row flex-col'>
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Assignment Difficulty Level:</span>
                        </label>
                        {/* onBlur={(e)=>setDifficulty(e.target.value)} */}
                            <select name="difficulty" id="difficulty" className='pl-2 w-32 bordered border-violet-300'>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className='flex gap-10 lg:flex-row md:flex-row flex-col'>
                            <label className="label-text font-semibold text-lg"> Due Date:</label>
                            <DatePicker className='pl-4 lg:w-64 py-1 bordered border-violet-300' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg ">Description</span>
                            </label>
                            <label className="">
                                {/* onBlur={(e)=>setDiscription(e.target.value)} */}
                            {/* <textarea  name="description" value='description' placeholder="Description" id="description" cols="27" rows="4" className='lg:pr-40 md:pr-44 pl-2 bordered border-violet-300' required></textarea> */}
                            <input type="text" name="description" placeholder="Short description" className="input lg:w-96 w-auto h-20" required />
                            </label>
                        </div>
                    </div>
                   <div className="pb-5">
                    <input type="submit" value='add Assignment' className="py-3 bg-violet-500 text-white px-8 rounded-lg font-bold mt-8"/>
                    </div>          
                </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default CreateAssaignment;