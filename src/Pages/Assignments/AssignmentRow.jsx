import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentRow = ({assign, handleDelete}) => {
    const {_id, title, imgURL,difficulty,startDate, } = assign;

    
    return (
        <tr className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
        <th>
          <label>
          <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-xs bg-white text-violet-700 bordered border-violet-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {imgURL? <img src={imgURL} alt="Avatar Tailwind CSS Component" />: <img src='https://i.ibb.co/wCJscsg/download.png' alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>
          {difficulty}
        </td>
        <td>{startDate}</td>
        <th>
          <Link to={`/update/${_id}`}>
                <button className="btn btn-ghost btn-xs btn-outline border-violet-600">Update</button>
          </Link>
        </th>
      </tr>
    );
};

AssignmentRow.propTypes = {
    assign: PropTypes.object,
    handleDelete: PropTypes.func
}

export default AssignmentRow;