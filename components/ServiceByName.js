import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getServiceDetails} from '../store/actions/GetAllServicesActions'

function ServiceByName(){

    const serviceByName=useSelector(state=>state.serviceReducer.serviceByName)

    const {sname}=useParams();
    const dispatch=useDispatch();

    const fetchServiceByName=()=>{
        dispatch(getServiceDetails(sname));
    }

    useEffect(fetchServiceByName,[sname]);


    return(
        <div>

            <div className='container'>
                <h2>Service Details</h2>
                <p>Servce Id :{serviceByName.serviceId} </p>
                <p>Service Name :{serviceByName.serviceName}</p>
                <p>Service Cost Rs :{serviceByName.price}</p>
            </div>

        </div>
    )
}

export default ServiceByName;