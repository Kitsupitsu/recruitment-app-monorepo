import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    text: {
        color: 'white',
        fontWeight: 'lighter',
    },

    div: {
        width: 'calc(100%/3)',
        "&:hover": {
            background: 'darkred',
        }
    }

})

function Section(props) {
    const classes = useStyles()

    return(
        <div className={classes.div}  onClick={() => changeRoute(props.href)}>
            <h1 className={classes.text}>
                {props.name}
            </h1>
        </div>
    )
}

const changeRoute = (href) => {
    window.location = href
}

export default Section