import { makeStyles } from '@mui/styles';
import reactDom from 'react-dom';
import Section from './Section';


const useStyles = makeStyles({
    navBar: {
        background: 'red',
        height: 100,
        align: 'center',
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'space-evenly',
    },
})

function NavBar() {
    const classes = useStyles()


    return(
        <div className={classes.navBar}>
            <Section href='/' name='Home'/>
            <Section href='add_candidate' name='Add candidate'/>
            <Section href = 'ranking' name='View ranking'/>
        </div>
    )
}

export default NavBar