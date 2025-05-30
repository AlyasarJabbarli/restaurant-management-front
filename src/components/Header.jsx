import React, { Component } from 'react';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    AdjustmentsHorizontalIcon,
    WalletIcon,
    UserIcon,
    BookOpenIcon,
    PresentationChartBarIcon,
} from '@heroicons/react/24/outline';
import { NavLink, Navigate } from 'react-router-dom';
import DateTimeDisplay from './DateTimeDisplay';
import { connect } from 'react-redux';
import { logOut } from '../action/MainAction';

const navigation = [
    { name: 'Masalar', href: '/dashboard', id: 'dashboard', icon: PresentationChartBarIcon },
    { name: 'Siparişlər', href: '/orders', id: 'orders', icon: BookOpenIcon },
    { name: 'Müştərilər', href: '/customers', id: 'customers', icon: UserIcon },
    { name: 'Kassa', href: '/cash-register', id: 'cash-register', icon: WalletIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

class Header extends Component {
    state = {
        activeTab: 'dashboard',
    }
    handleNavLinkClick = (id) => {
        this.setState({ activeTab: id });
    };
    handleClick = async () => {
        await this.props.logOut();
        return <Navigate to={"/"} />;
    };

    render() {
        const { activeTab } = this.state;

        if (!this.props.token) {
            return null;
        }
        return (
            <Disclosure as="nav" className="mb-[40px] border-b-[1px] border-[#00000025] shadow-md bg-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        activeTab === item.id
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-[#206BC4] bg-[#206BC40D] hover:bg-gray-700 hover:text-white border-[#c2deff] border-[1px]',
                                                        'rounded-md px-3 py-2 text-sm font-medium flex'
                                                    )}
                                                    aria-current={activeTab ? 'page' : undefined}
                                                    onClick={() => this.handleNavLinkClick(item.id)}
                                                >
                                                    {item.icon && React.createElement(item.icon, { className: 'h-5 w-5 mr-2' })}
                                                    {item.name}

                                                </NavLink>
                                            ))}
                                            <div>

                                            </div>
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <MenuButton
                                                        className='text-[#206BC4] bg-[#206BC40D] hover:bg-gray-700 hover:text-white border-[#c2deff] border-[1px] rounded-md px-3 py-2 text-sm font-medium flex'
                                                    >
                                                        <AdjustmentsHorizontalIcon className="block h-5 w-5 mr-2" aria-hidden="true" />

                                                        Tənzimləmələr
                                                    </MenuButton>
                                                </div>
                                                <Transition
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <MenuItem>
                                                                <NavLink
                                                                    to="/couriers"
                                                                    className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                                                                >
                                                                    Kuryerlər
                                                                </NavLink>
                                                        </MenuItem>
                                                    
                                                    </MenuItems>
                                                </Transition>
                                            </Menu>
                                            <DateTimeDisplay />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </MenuButton>
                                        </div>
                                        <Transition
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <NavLink
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </NavLink>
                                                    )}
                                                </MenuItem>
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <NavLink
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </NavLink>
                                                    )}
                                                </MenuItem>
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <button
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            onClick={() => this.handleClick()}
                                                        >
                                                            Sign out
                                                        </button>
                                                    )}
                                                </MenuItem>
                                            </MenuItems>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <DisclosurePanel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}



                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.Data.token,
});

const mapDispatchToProps = {
    logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
