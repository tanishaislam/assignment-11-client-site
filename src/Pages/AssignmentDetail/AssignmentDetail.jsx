import { useLoaderData } from "react-router-dom";

const AssignmentDetail = () => {
    const assignmentDetail = useLoaderData();
    const {discription, title,difficulty,startDate} = assignmentDetail;


    return (
        <div>
            <div className="w-5/12 mx-auto border-2 border-violet-600 mt-20">
                <h1 className="text-center text-4xl font-bold pb-5 pt-20">Assignment Details Page</h1>
                <div className="border-b-2 w-28 m-auto "></div>
                <h1 className="text-center text-3xl font-bold pt-3">{title}</h1>
                <h3 className="text-center py-3"><span className="font-semibold">Assignment Date :</span>{startDate}</h3>
                <p className="text-center pb-5"><span className="font-semibold">Assignment Difficulty Level :</span>{difficulty}</p>
                <div className="border-b-2 w-28 m-auto "></div>
                <p className="pt-20 px-20 pb-20"><span className="font-semibold">Assignment Details:</span> {discription}</p>
                <p className="text-center mb-16 cursor-pointer">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-violet-600 text-white" onClick={()=>document.getElementById('my_modal_2').showModal()}>Take Assignment</button>
                    <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                    <h3 className="font-bold text-lg">Assignment Mark</h3>
                        <form action="">
                            <div className="form-control">
                                <label className="label ml-10 mt-5">
                                    <span className="label-text font-semibold text-lg">Marks</span>
                                </label>
                                <label className="">
                                    <input 
                                        type="number" 
                                        name="marks" 
                                        placeholder="Marks" 
                                        className="input lg:w-96 md:w-96 w-auto rounded-sm bordered border-violet-300"
                                        required 
                                    />
                                </label>                          
                            </div>
                            <div className="form-control">
                            <label className="label ml-10">
                                <span className="label-text font-semibold text-lg ">Feedback</span>
                            </label>
                            <label className="">
                            <input type="text" name="description" placeholder="Short description" className="input lg:w-96 w-auto h-12 rounded-sm bordered border-violet-300" required />
                            </label>
                        </div>
                        <div className="pb-5">
                            <input  type="submit" value='Submit' className="py-3 bg-violet-500 text-white px-8 rounded-lg font-bold mt-8"/>
                        </div>   

                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                    </dialog>
                </p>
            </div>
        </div>
    );
};

export default AssignmentDetail;