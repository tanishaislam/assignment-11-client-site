import PropTypes from 'prop-types';


const AllAssignnentsRow = ({allAsign}) => {
    const {title,difficulty,startDate, mark} = allAsign;
    return (
        <tr>
            <td>{title}</td>
            <td>{difficulty}</td>
            <td>{startDate}</td>
            <td>{mark}</td>
        </tr>
    );
};

AllAssignnentsRow.propTypes = {
    allAsign: PropTypes.object
}

export default AllAssignnentsRow;