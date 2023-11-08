import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AllAssignnentsRow = ({allAsign}) => {
    const {_id, title,difficulty,startDate, mark} = allAsign;
    return (
        <tr className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5'>
            <td>{title}</td>
            <td>{difficulty}</td>
            <td>{startDate}</td>
            <td>{mark}</td>
            <th>
            <Link to={`/details/${_id}`}>
                <button className='btn btn-ghost btn-xs btn-outline border-violet-600'>view assignment</button>
            </Link>
            </th>
            
        </tr>
    );
};

AllAssignnentsRow.propTypes = {
    allAsign: PropTypes.object
}

export default AllAssignnentsRow;