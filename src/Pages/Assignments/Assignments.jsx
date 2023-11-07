import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import AssignmentRow from "./AssignmentRow";


const Assignments = () => {
    const {user} = useContext(AuthContext);
    const [assignment, setAssignment] = useState([]);

    const url = `http://localhost:5000/assignments?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[url])
    return (
        <div>
            <div className="container mx-auto mt-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Assignment Title</th>
                            <th>Difficulty Level</th>
                            <th>Date</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            assignment.map(assign => <AssignmentRow
                            key={assign._id}
                            assign={assign}
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