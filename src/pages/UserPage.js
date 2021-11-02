export default function UserPage(props) {
    const user = props.location.state.user
    console.log(user)
    //console.log(user.login)

    return(
        <span>
            RENDERED
        </span>
    );
}
