import {  useEffect, useState } from "react";
import AllAssignnentsRow from "./AllAssignnentsRow";


const AllAssignments = () => {

    const [allAssignment, setAllAssignment] = useState([]);

    const url = `http://localhost:5000/assignments`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllAssignment(data))
    },[url])


    return (
        <div className="container mx-auto mt-20">
            <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                <tr className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                    <th>Assignment Title</th>
                    <th>Difficulty Level</th>
                    <th>Date</th>
                    <th>Mark</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    allAssignment.map(allAsign => <AllAssignnentsRow key={allAsign._id} allAsign={allAsign}></AllAssignnentsRow>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllAssignments;