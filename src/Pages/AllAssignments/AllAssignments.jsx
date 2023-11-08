import {  useEffect, useState } from "react";
import AllAssignnentsRow from "./AllAssignnentsRow";


const AllAssignments = () => {

    const [allAssignment, setAllAssignment] = useState([]);
    const [displayAssignment, setDisplayAssignment] = useState([]);

    const handleAssignFilter = filter =>{
        if(filter === 'All'){
            setDisplayAssignment(allAssignment)
        }else if (filter === 'Hard'){
            const hardAssign = allAssignment.filter(allAssign => allAssign.difficulty === 'hard')
            setDisplayAssignment(hardAssign)
        }else if (filter === 'Mediam'){
            const mediumAssign = allAssignment.filter(allAssign => allAssign.difficulty === 'medium')
            setDisplayAssignment(mediumAssign)
        }else if (filter === 'Easy'){
            const easyAssign = allAssignment.filter(allAssign => allAssign.difficulty === 'easy')
            setDisplayAssignment(easyAssign)
        }
    }

    const url = `http://localhost:5000/assignments`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAllAssignment(data)
            setDisplayAssignment(data)
        })
    },[url])


    return (
        <div className="container mx-auto mt-10">
            <div className="flex mb-10">
                <div className="dropdown dropdown-bottom dropdown-end ">
                <label tabIndex={0} className="btn border-solid bordered border-indigo-600 text-indigo-600 bg-white m-1">Assignemnt Level </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleAssignFilter('All')}><a>All</a></li>
                    <li onClick={()=>handleAssignFilter('Hard')}><a>Hard</a></li>
                    <li onClick={()=>handleAssignFilter('Mediam')}><a>Mediam</a></li>
                    <li onClick={()=>handleAssignFilter('Easy')}><a>Easy</a></li>
                </ul>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                <tr className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 ">
                    <th>Assignment Title</th>
                    <th>Difficulty Level</th>
                    <th>Date</th>
                    <th>Mark</th>
                    <th>view</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    displayAssignment.map(allAsign => <AllAssignnentsRow key={allAsign._id} allAsign={allAsign}></AllAssignnentsRow>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllAssignments;