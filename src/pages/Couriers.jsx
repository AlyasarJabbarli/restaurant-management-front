import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Couriers() {
    const couriers = useSelector(state => state.couries);
    const restaurant = useSelector(state => state.restaurant);

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getCouries())
    }, [])

    const handleClick = () =>{
        
    }


    return (
        <main>
            <div className="max-w-screen-2xl mx-auto mt-10">
                <div className='w-full border-b-[1px] border-b-[#00000033] pb-2'>
                    <div className='flex items-center  justify-between flex-col space-y-2 sm:flex-row'>
                        <h2 className='font-bold '>Kuryerlər</h2>

                        <NavLink to={"/courier-customazing"}
                            type="button"
                            className="flex w-full flex-wrap sm:w-fit items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                            data-autofocus
                        >
                            <PlusIcon className="inline-block h-3 w-3 mr-1" aria-hidden="true" />
                            Yeni kuryer əlavə et
                        </NavLink>
                    </div>
                </div>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Ad Soyad</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Nömrə</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Adres</th>
                                <th className="px-6 py-3">Detal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {couriers?.map((courier, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{courier?.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{courier?.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{courier?.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <NavLink to={`/courier-customazing/${restaurant.id}/${courier.id}`} className="rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4]">Düzəliş et</NavLink>
                                        <button onClick={()=>handleClick(restaurant.id, courier.id)} className="rounded-md bg-[#d63939] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#b63030]">Sil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    );
}

export default Couriers;