import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TableCard from '../components/TableCard';
import Tabs from '../components/Tabs';
import { getTables } from '../action/TableActions';

function Dashboard() {
    const token = useSelector((state) => state.Data.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tables = useSelector(state => state.tables);
    const [category, setCategory] = useState('');

    useEffect(() => {
        dispatch(getTables({ category_id: category }));
    }, [category, dispatch]);

    useEffect(() => {
      if (!token) {
        navigate('/');
      }
    });

    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <main>
            <div className='max-w-7xl mx-auto'>
            <Tabs handleCategoryChange={handleCategoryChange} />
                <div className='mt-6'>
                    {
                        tables?.map((t, i ) => <TableCard key={i} title={"Salam"} staff={"Nicat Babayev"} total={"118.99"}/>)
                    }

                </div>
            </div>
        </main>
    );
}

export default Dashboard;