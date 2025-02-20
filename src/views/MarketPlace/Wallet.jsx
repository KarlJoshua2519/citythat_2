import React from 'react';
import add from '../../assets/images/add.png'
import missionappcoin from '../../assets/images/missionappcoin.png'


const Wallet = () => {
    return (
        <div className="min-h-screen flex mt-20 flex-col">
            
            <div className="min-h-screen flex flex-row w-full">
                <aside className="w-1/4 bg-gray-800 text-white p-6 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-10">My Wallet</h2>
                    <button className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg mb-4 hover:bg-blue-600 transition duration-200">
                        Add Funds
                    </button>
                    <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200">
                        Withdraw
                    </button>
                    <div className="mt-10">
                        <p className="text-lg font-semibold">Account ID:</p>
                        <p className="text-sm mt-2 text-gray-400">1234-5678-9101</p>
                    </div>
                    <div className="mt-6">
                        <p className="text-lg font-semibold">Last Access:</p>
                        <p className="text-sm mt-2 text-gray-400">Nov 11, 2024</p>
                    </div>
                </aside>


                <main className="w-3/4 p-8">

                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Wallet Balance</h3>
                            <p className="text-3xl font-bold text-primary mt-2">$1,250.00</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Total Credits</h3>
                            <p className="text-3xl font-bold text-primary mt-2">+ $500.00</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Total Debits</h3>
                            <p className="text-3xl font-bold text-red-500 mt-2">- $300.00</p>
                        </div>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold text-gray-700">Transaction History</h3>
                            <select className="bg-gray-50 border rounded-lg px-4 py-2 text-gray-600">
                                <option value="all">All Transactions</option>
                                <option value="credit">Credits</option>
                                <option value="debit">Debits</option>
                                <option value="this_month">This Month</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 font-semibold">Lorem Ipsum</p>
                                    <p className="text-sm text-gray-400">Oct 10, 2024</p>
                                </div>
                                <span className="text-red-500 font-bold">- $150.00</span>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 font-semibold">Lorem Ipsum</p>
                                    <p className="text-sm text-gray-400">Oct 9, 2024</p>
                                </div>
                                <span className="text-primary font-bold">+ $50.00</span>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 font-semibold">Lorem Ipsum</p>
                                    <p className="text-sm text-gray-400">Oct 8, 2024</p>
                                </div>
                                <span className="text-red-500 font-bold">- $200.00</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    );
};

export default Wallet;
