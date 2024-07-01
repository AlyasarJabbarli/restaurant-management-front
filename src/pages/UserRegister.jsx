import { PlusIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function UserRegister({id, title}) {

    let handleSubmit = () => {

    }


    let handleChange = () => {

    }

    // UseEffect() {
    //     const array = window.location.href.split("/")
    //     const lastElement = array[array.length - 1]
    //     if (lastElement !== 'user-customazing') {
    //         this.props.getUserById(lastElement)
    //     }
    // }

    return (
        <main>
            <div className='max-w-screen-xl mx-auto mt-6 bg-white p-2 shadow-md rounded-md'>
                <div className='w-full border-b-[1px] border-b-[#00000033] pb-2'>
                    <div className='flex items-center lg:w-[40%] justify-between flex-col space-y-2 sm:flex-row'>
                        <h2 className='font-bold '>Istifadəçi Tənzimləmələri</h2>
                        <NavLink to={"/user-customazing"}
                            type="button"
                            className="flex w-full flex-wrap sm:w-fit items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                            data-autofocus
                        >
                            <PlusIcon className="inline-block h-3 w-3 mr-1" aria-hidden="true" />
                            Yeni istifadəçi əlavə et
                        </NavLink>
                    </div>
                </div>

                <div className='lg:w-[50%] mt-4 p-3 bg-[#c3d6ff32] rounded'>
                    <form className="space-y-4 " onSubmit={handleSubmit}>
                        <div>   
                            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                İstifadəçi adı
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={`${id ? title : ""}`}
                                />
                            </div>
                        </div>
                        <div>   
                            <label htmlFor="userEmail" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userEmail"
                                    name="userEmail"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={`${id ? title : ""}`}
                                />
                            </div>
                        </div>
                        <div>   
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Şifrə
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={`${id ? title : ""}`}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center rounded-md bg-[#206bc4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-bg-[#2059c4] hover:bg-[#2059c4] "
                            data-autofocus

                        >
                            Yadda Saxla
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default UserRegister;