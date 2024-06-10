import React from 'react'

const Filter = ({filter, setFilter,setSorter}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabetica:</p>
                <button onClick={() => setSorter("Asc")}>Asc</button>
                <button onClick={() => setSorter("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter