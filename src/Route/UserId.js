import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




function UserId(){
    const products = [
        { id: 1, name: 'Товар 1', price: 100 },
        { id: 2, name: 'Товар 2', price: 150 },
        { id: 3, name: 'Товар 3', price: 200 },
    ];
    const product = products.find((p) => p.id === Number(id));
    let {id} = useParams();
    // let {userName} = useParams();
    return(
        <>
        <div>
            <Link to="/users">Назад</Link>
            <h1>USER:{userName}</h1>
        </div>
        </>
    );
}
export default UserId;