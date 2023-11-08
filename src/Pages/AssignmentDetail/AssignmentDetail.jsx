import { useLoaderData } from "react-router-dom";

const AssignmentDetail = () => {
    const assignmentDetail = useLoaderData();
    const {_id,discription, title,difficulty,startDate, mark} = assignmentDetail;
    return (
        <div>
            <div className="w-5/12 mx-auto border-2 border-violet-600 mt-20">
                <h1 className="text-center text-4xl font-bold pb-5 pt-20">Assignment Details Page</h1>
                <div className="border-b-2 w-28 m-auto "></div>
                <h1 className="text-center text-3xl font-bold pt-3">{title}</h1>
                <h3 className="text-center py-3"><span className="font-semibold">Assignment Date :</span>{startDate}</h3>
                <p className="text-center pb-5"><span className="font-semibold">Assignment Difficulty Level :</span>{difficulty}</p>
                <div className="border-b-2 w-28 m-auto "></div>
                <p className="pt-20 px-20 pb-20">{discription}</p>
                <p className="text-center pb-10"><span className="bg-violet-600 text-white py-2 px-5 font-semibold">Take Assignment</span></p>
            </div>
        </div>
    );
};

export default AssignmentDetail;