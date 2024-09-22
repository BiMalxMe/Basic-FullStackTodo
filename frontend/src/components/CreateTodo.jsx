import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    return <div>
        <input style={{margin:10,padding:10}}
        onChange={function(e){
            const valueTitle=e.target.value
            setTitle(valueTitle)
        }}
        type="text"  placeholder="Enter the title here"/><br></br>
        <input style={{margin:10,padding:10}}
        onChange={function(e){
            const valueDesc=e.target.value;
            setDescription(valueDesc)
        }}
        type="text" placeholder="Enter the description here" /><br></br>
        {
        <button style={{ margin: 10, padding: 10 }} onClick={() => {
        fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(async (res) => {
            if (res.ok) {
                const json = await res.json();
                alert('Todo added');
            } else {
                alert('Error adding Todo');
            }
        })
        .catch((error) => {
            alert('Network error: ' + error.message);
        });
    }}>
    Add a Todo
</button>

        }
    </div>
}