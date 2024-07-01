import { ChevronDoubleLeftIcon, EllipsisVerticalIcon, Bars3Icon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class TableOrder extends Component {
    render() {
        return (
            <main>
                <section className='bg-white'>
                    <div>
                        <div className="max-w-screen-2xl mx-auto mt-10">
                            <div className='w-full border-b-[1px] border-b-[#00000033] pb-2'>
                                <div className='flex items-center  justify-between flex-col space-y-2 sm:flex-row'>
                                    <div className='flex items-center space-x-2'>
                                        <NavLink to={"/restaurant-customazing"}
                                            type="button"
                                            className="flex w-full flex-wrap sm:w-fit items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                                            data-autofocus
                                        >
                                            <ChevronDoubleLeftIcon className="inline-block h-3 w-3 mr-1" aria-hidden="true" />
                                            Masalar
                                        </NavLink>

                                        <h2 className='font-bold'>Masa - 1</h2>

                                    </div>

                                    <button
                                        className="flex w-full flex-wrap sm:w-fit items-center justify-center rounded-md bg-[#17a2b8] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:text-[#fafbfc] hover:bg-[#148a9c]"
                                        data-autofocus
                                    >
                                        <EllipsisVerticalIcon className="inline-block h-6 w-6 mr-1" aria-hidden="true" />
                                        Yeni restoran əlavə et
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Ad</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Adres</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Nömrə</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="even:bg-gray-50">
                                            <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <button>
                                                    <Bars3Icon className="inline-block h-6 w-6 mr-1" aria-hidden="true" />Natural Soklar
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className='flex [&_button]:text-center [&_button]:rounded-sm border-[1px] border-[#d9dbde] w-fit py-2'>
                                                    <button
                                                        className="flex w-6 h-6 flex-wrap  items-center justify-center rounded-md bg-[#d63939] text-sm font-semibold text-white shadow-sm  hover:text-[#fafbfc] hover:bg-[#b63030] opacity-75"
                                                        data-autofocus
                                                    >-</button>
                                                    <p>3 Ədəd</p>
                                                    <button
                                                        className="flex w-6 h-6 flex-wrap  items-center justify-center rounded-md bg-[#2fb344] text-sm font-semibold text-white shadow-sm  hover:text-[#fafbfc] hover:bg-[#28983a] opacity-75"
                                                        data-autofocus
                                                    >+</button>                                                
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </section>
            </main>
        )
    }
}

export default TableOrder