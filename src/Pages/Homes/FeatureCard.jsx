import PropTypes from 'prop-types';

const FeatureCard = ({feature}) => {
    const {name, img, description} = feature;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-10 h-60 w-full">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-violet-600">{name}</h2>
                <p className="text-gray-400">{description}</p>
                <div className="card-actions">
                <button className="btn btn-primary mt-2 text-white bg-gradient-to-r from-violet-600 to-violet-100 py-2 px-5">View More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    feature: PropTypes.object
}

export default FeatureCard;