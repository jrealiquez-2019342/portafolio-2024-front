import { CardsList } from '../../components/Card/CardsList';
import './dashboard.css';
import React from 'react'
import { useEffect } from 'react'
import { PacmanLoader } from 'react-spinners'
import { useGetTasks } from '../../Shared/hooks/useGetTasks'

export const Dashboard = () => {

  const { isLoading, tasks, getTasks } = useGetTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (isLoading) {
    return (
      <div className='container d-flex align-items-center justify-content-center vw-100'>
        <PacmanLoader color='#FFeb37' />
      </div>
    )
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="header">
        </div>
        <CardsList cardsApi={tasks} />
      </div>
    </>
  )
}
