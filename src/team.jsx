import { useState } from "react"

export default function Team() {

    const [Team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = Team + 1;
        setTeam(newTeam)
    }

    const handleRemove = () => {
        setTeam(Team - 1);
    }

    const TeamStyle = {
        border: '2px solid  purple',
        margin: '15px',
        padding: '20px',
        borderRadious: '10px'
    }

    return (

        <div style={TeamStyle}>
            <h3>players: {Team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>



    )

}