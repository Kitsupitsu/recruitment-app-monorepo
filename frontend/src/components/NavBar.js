//import { makeStyles } from '@mui/styles';
import reactDom from 'react-dom';
import Section from './Section';


// const useStyles = makeStyles({
//     navBar: {
//         background: 'red',
//         height: 100,
//         width: '100%'   
//     },
// })

function NavBar() {
    //const classes = useStyles()


    return(
        <div>
            <Section href='/' name='Home'/>
            <Section href='ranking' name='Add candidate'/>
            <Section href = 'add_candidate' name='View ranking'/>
        </div>
    )
}

export default NavBar