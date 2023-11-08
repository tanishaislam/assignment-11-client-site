import PropTypes from 'prop-types';


const AllAssignnentsRow = ({allAsign}) => {
    const {title,difficulty,startDate, mark} = allAsign;
    return (
        <tr className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5'>
            <td>{title}</td>
            <td>{difficulty}</td>
            <td>{startDate}</td>
            <td>{mark}</td>
            <th>
            <button className='btn btn-ghost btn-xs btn-outline border-violet-600'>view assignment</button>
            </th>
            
        </tr>
    );
};

AllAssignnentsRow.propTypes = {
    allAsign: PropTypes.object
}

export default AllAssignnentsRow;