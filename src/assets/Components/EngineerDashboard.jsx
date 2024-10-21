import React from 'react'

const EngineerDashboard = () => {
    return (
        <div className="w-full h-full p-6 bg-gray-100">


            {/* Performance and Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Completed Projects */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Completed Projects</h3>
                    <div className="text-center">
                        <span className="text-5xl font-bold text-green-500">24</span>
                        <p className="text-gray-500">Projects</p>
                    </div>
                </div>

                {/* Ongoing Projects */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Ongoing Projects</h3>
                    <div className="text-center">
                        <span className="text-5xl font-bold text-yellow-500">5</span>
                        <p className="text-gray-500">Projects</p>
                    </div>
                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                            <div className="bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
                        </div>
                        <p className="text-sm text-gray-500">Project Alpha (80% completed)</p>
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Certifications</h3>
                    <ul>
                        <li className="mb-2">AWS Certified Solutions Architect</li>
                        <li className="mb-2">PMP Certified</li>
                        <li className="mb-2">Scrum Master Certified (SMC)</li>
                    </ul>
                </div>
            </div>

            {/* Recent Projects with Progress Bars */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Recent Projects</h3>
                <div className="space-y-4">
                    <div>
                        <p className="text-lg font-semibold">Project Alpha</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                            <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div>
                        </div>
                        <p className="text-sm text-gray-500">80% Completed</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Project Beta</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                            <div className="bg-green-500 h-2.5 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-sm text-gray-500">50% Completed</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Project Gamma</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                            <div className="bg-yellow-500 h-2.5 rounded-full w-1/4"></div>
                        </div>
                        <p className="text-sm text-gray-500">25% Completed</p>
                    </div>
                </div>
            </div>

            {/* To-Do List Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">To-Do List</h3>
                <ul className="space-y-2">
                    <li className="flex justify-between">
                        <span>Complete final testing for Project Alpha</span>
                        <button className="text-green-500">Mark as Done</button>
                    </li>
                    <li className="flex justify-between">
                        <span>Update documentation for Project Beta</span>
                        <button className="text-green-500">Mark as Done</button>
                    </li>
                    <li className="flex justify-between">
                        <span>Plan architecture for Project Gamma</span>
                        <button className="text-green-500">Mark as Done</button>
                    </li>
                </ul>
            </div>

        
        </div>
    )
}

export default EngineerDashboard
