import { makeStyles } from '@mui/styles'

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

    const useStyles = makeStyles({
        mainDiv: {
            width: '100%',
            justifyContent: 'space-evenly'
        },

        divs: {
            width: '30%'
        },

        left: {
            width: 'calc(100%/3*2)',
            justifyContent: 'space-evenly',
        },

        right: {
            width: 'calc(100%/3)',
            display: 'inline-flex',
            justifyContent: 'space-evenly',
        },

        letterDiv: {
            width: '60%'
        },

        text: {
            height: 250
        },

        fields: {
            display: 'inline-flex',
            width: '100%',
            justifyContent: 'space-evenly'
        },

        form: {
            display: 'inline-flex',
            justifyContent: 'space-evenly',
            width: '100%',
        },

        letterField: {
            height: 400,
            width: '100%',
            verticalAlign: 'top'
        },

        textField: {
            width: '100%',
            padding: 5
        },

        fieldLabel: {
            fontWeight: 'normal'
        }
    })

    const classes = useStyles()

    return(
        <div className={classes.mainDiv}>
            <form className={classes.form} onSubmit={() => handleSubmit()}>
                <div className={classes.left}>
                    <div className={classes.text}>
                        <p>avpjcpsvjpsjv</p>
                    </div>
                    <div className={classes.fields}>
                        <div className={classes.divs}>
                            <h3 className={classes.fieldLabel}>Name</h3>
                            <input className={classes.textField} id='name' type='text' value={name} onChange={(e) => updateField(e)}/>
                            <h3 className={classes.fieldLabel}>Surname</h3>
                            <input className={classes.textField} id='surname' type='text' value={surname} onChange={(e) => updateField(e)}/>
                            <h3 className={classes.fieldLabel}>E-Mail</h3>
                            <input className={classes.textField} id='eMail' type='text' value={eMail} onChange={(e) => updateField(e)}/>
                        </div>
                        <div className={classes.divs}>
                            <h3 className={classes.fieldLabel}>Country</h3>
                            <input className={classes.textField} id='country' type='text' value={country} onChange={(e) => updateField(e)}/>
                            <h3 className={classes.fieldLabel}>City</h3>
                            <input className={classes.textField} id='city' type='text' value={city} onChange={(e) => updateField(e)}/>
                            <h3 className={classes.fieldLabel}>Department</h3>
                            <input className={classes.textField} id='department' type='text' value={department} onChange={(e) => updateField(e)}/>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.letterDiv}>
                        <h3 className={classes.fieldLabel}>Years spent in EESTEC</h3>
                        <input className={classes.textField} id='years' type='number' min='0' value={years} onChange={(e) => updateField(e)}/>
                        <h3 className={classes.fieldLabel}>Motivational letter</h3>
                        <textarea className={classes.letterField} id='letter' type='text' value={letter} onChange={(e) => updateField(e)}/>
                    </div>  
                </div>              
            </form>
        </div>
    )
}

export default AddCandidate