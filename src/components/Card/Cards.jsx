import React from 'react'

export const Cards = ({ imagen, nameTask, description, bimester, week, linkTask, habilities, course, user }) => {
    const imgStyle = {
        width: '100%',
        height: '12rem',
        objectFit: 'cover',
    };
    return (
        <div className="card" style={{ width: '18rem', marginRight: '10px', backgroundColor: 'aliceblue' }}>
            <img className="card-img-top" src={imagen} alt="Imagen del card." style={imgStyle} />
            <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center' }}>{nameTask}</h5>
                <h6><i>{course}</i> - {user}</h6>
                <p className="card-text" style={{ textAlign: 'justify' }}>{description}</p>
                <p className='card-text'><b>Bimestre:</b> {bimester} &nbsp;
                    <b>Semana:</b> {week}
                </p>
                <p className="card-text">
                    <b>Habilities:</b> <br />
                    <small>{habilities}</small></p>
            </div>
            <div className="card-footer">
                <a href={linkTask} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">Ver tarea</a>
            </div>
        </div>
    )
}
