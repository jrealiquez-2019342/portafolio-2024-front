import React from 'react'
import { useState } from 'react'
import { getTask } from '../../services/api'
import toast from 'react-hot-toast';

export const useGetTasks = () => {
    const [ tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getTasks = async () => {
        setIsLoading(true);
        const response = await getTask();
        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response?.err?.data?.message ||
                response?.err?.response?.data?.message ||
                response?.err?.message ||
                'Error al obtener las tareas'
            )
        }

        console.log(response);//ver como viene la informacion
        setTasks(response.data.tasks);
    }

    return {
        tasks,
        getTasks,
        isLoading
    }

}
