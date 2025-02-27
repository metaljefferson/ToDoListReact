import React, { useState } from 'react'


function ListForm({ addTodo }) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <div className='list-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o titulo' onChange={(e) => setValue(e.target.value)} value={value} />
                <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default ListForm