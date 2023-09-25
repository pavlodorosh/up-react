import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Users(){
   let url = useLocation();
   console.log(url);


   return(
      <>
      <h1>Users</h1>
      <ul>
         <li><Link to={`${url.pathname}/user1`}>User1</Link></li>
         <li><Link to={`${url.pathname}/user2`}>User2</Link></li>
      </ul>
      </>
   );
}
export default Users;