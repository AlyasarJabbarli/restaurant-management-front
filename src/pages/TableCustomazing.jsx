import { PlusIcon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getTableById } from '../action/MainAction';
import { connect } from 'react-redux';

export class TableCustomazing extends Component {
    state = {
        tableName: '',
        category: '',
        id: null
    };
    handleSubmit = () => {

    }


    handleChange = () => {

    }

    componentDidMount() {
        const array = window.location.href.split("/")
        const lastElement = array[array.length - 1]
        if (lastElement !== 'table-customazing') {
            this.props.getTableById(lastElement)
        }
    }


    render() {
        const {id} = this.state
        const {title, category_id} = this.props
        return (
            <main>
                <div className='max-w-screen-xl mx-auto mt-6 bg-white p-2 shadow-md rounded-md'>
                    <div className='w-full border-b-[1px] border-b-[#00000033] pb-2'>
                        <div className='flex items-center lg:w-[40%] justify-between flex-col space-y-2 sm:flex-row'>
                            <h2 className='font-bold '>Masa Tənzimləmələri</h2>
                            <NavLink to={"/table-customazing"}
                                type="button"
                                className="flex w-full flex-wrap sm:w-fit items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                                data-autofocus
                            >
                                <PlusIcon className="inline-block h-3 w-3 mr-1" aria-hidden="true" />
                                Yeni masa əlavə et
                            </NavLink>
                        </div>
                    </div>

                    <div className='lg:w-[50%] mt-4 p-3 bg-[#c3d6ff32] rounded'>
                        <form className="space-y-4 " onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="tableName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Masa adı
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="tableName"
                                        name="tableName"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                        onChange={this.handleChange}
                                        value={`${id ? title : ""}`}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                    Qrup
                                </label>
                                <div className="mt-2">
                                    <select name="category" id="category"
                                        required
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                        onChange={this.handleChange}
                                    >
                                        <option value="1">Qrup seçin</option>
                                        <option value="2">Zal</option>
                                        <option value="3">Teras</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="flex items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                                data-autofocus
                            >
                                Yadda Saxla
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state) => ({
    tableDetail: state.Data.tableDetail,
});

const mapDispatchToProps = {
    getTableById,
};


export default connect(mapStateToProps, mapDispatchToProps)(TableCustomazing)