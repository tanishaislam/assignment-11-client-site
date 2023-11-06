import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/studyCard')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])

    return (
        <div>
            <div className="text-center py-10">
                <h1 className="text-4xl font-semibold ">Our <span className="text-violet-600">Features</span> Area</h1>
                <p className="w-4/12 m-auto pt-4 pb-10 text-gray-500">consectetur adipisicing elit. Magni a veniam velit quo nam assumenda incidunt veritatis nobis pariatur animi.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 gap-7 container mx-auto pb-10">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;