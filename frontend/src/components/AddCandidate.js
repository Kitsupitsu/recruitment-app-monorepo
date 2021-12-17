const axios = require('axios')
const { useState, useEffect } = require('react')

function AddCandidate() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [eMail, setEMail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [department, setDepartment] = useState("")
    const [years, setYears] = useState(0)
    const [letter, setLetter] = useState("")

    const updateField = (e) => {
        switch(e.target.id) {
            case 'name':
                setName(e.target.value)
                break;
            case 'surname':
                setSurname(e.target.value)
                break;
            case 'eMail':
                setEMail(e.target.value)
                break;
            case 'country':
                setCountry(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'department':
                setDepartment(e.target.value)
                break;
            case 'years':
                setYears(e.target.value)
                break;
            case 'letter':
                setLetter(e.target.value)
                break;
            default:

        }
    }

    const handleSubmit = () => {
        
    }

    useEffect(() => {

    })



    return(
        <div>
            <form onSubmit={() => handleSubmit()}>
                <h3>Name</h3>
                <input id='name' type='text' value={name} onChange={(e) => updateField(e)}/>
                <h3>Surname</h3>
                <input id='surname' type='text' value={surname} onChange={(e) => updateField(e)}/>
                <h3>E-Mail</h3>
                <input id='eMail' type='text' value={eMail} onChange={(e) => updateField(e)}/>
                <h3>Country</h3>
                <input id='country' type='text' value={country} onChange={(e) => updateField(e)}/>
                <h3>City</h3>
                <input id='city' type='text' value={city} onChange={(e) => updateField(e)}/>
                <h3>Department</h3>
                <input id='department' type='text' value={department} onChange={(e) => updateField(e)}/>
                <h3>Years spent in EESTEC</h3>
                <input id='years' type='text' value={years} onChange={(e) => updateField(e)}/>
                <h3>Motivational letter</h3>
                <input id='letter' type='text' value={letter} onChange={(e) => updateField(e)}/>
            </form>
        </div>
    )
}

export default AddCandidate