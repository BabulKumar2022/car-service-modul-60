import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='container' >
            <h2 >Welcome to Service Detail :{serviceId}</h2>
            <div className='text-centre'>
                    <Link to='/checkout'> <button className='btn btn-primary'>Proceed Checkout</button></Link>

            </div>
            
        </div>
    );
};

export default ServiceDetail;