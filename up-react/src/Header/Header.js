import { Link } from "react-router-dom";

function Header(props){
    return(
        <>
        <header>
            <h1>{props.data.site_name}</h1>
            <Nav mynav={props.data.nav} />
        </header>
        </>
    );
}

function Nav(props){
    let data = props.mynav;
    // const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
    const listItem = data.map(item => <li key={item.link}> <Link to="{item.link}">{item.text}</Link></li>);
    return(
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header;