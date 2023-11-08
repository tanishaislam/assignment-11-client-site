import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import AssignmentRow from "./AssignmentRow";
import toast from "react-hot-toast";


const Assignments = () => {
    const {user} = useContext(AuthContext);
    const [assignment, setAssignment] = useState([]);

    const url = `https://assaignment-11-server-beige.vercel.app/assignments?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[url])

    const handleDelete = id =>{
            fetch(`https://assaignment-11-server-beige.vercel.app/assignments/${id}`,  {credentials: 'include'}, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully')
                    const remaining = assignment.filter(assignmen => assignmen._id !== id)
                    setAssignment(remaining)
                }
            })
    }


    return (
        <div>
            <div className="container mx-auto mt-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Assignment Title</th>
                            <th>Difficulty Level</th>
                            <th>Date</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                            {
                                assignment.map(assign => <AssignmentRow
                                key={assign._id}
                                assign={assign}
                                handleDelete={handleDelete}
                                ></AssignmentRow>)
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assignments;