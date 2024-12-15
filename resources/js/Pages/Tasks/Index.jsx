import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index({ tasks }) {
    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <Link
                href={route('tasks.create')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Create New Task
            </Link>
            <ul className="mt-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center border-b py-2"
                    >
                        <span>{task.title}</span>
                        <div className="space-x-2">
                            <Link
                                href={route('tasks.edit', task.id)}
                                className="text-blue-500"
                            >
                                Edit
                            </Link>
                            <Link
                                href={route('tasks.destroy', task.id)}
                                method="delete"
                                as="button"
                                className="text-red-500"
                            >
                                Delete
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}