function Section(props) {
    return(
        <h1 onClick={() => changeRoute(props.href)}>
            {props.name}
        </h1>
    )
}

const changeRoute = (href) => {
    window.location = href
}

export default Section