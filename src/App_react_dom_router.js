// import logo from './logo.svg';
import Header from './Header/Header';
import './App.css';
// import Goods from './Goods';
import About from './About';
import Users from './Users';
import Error from './Error';
import Main from './Main';
import UserId from './UserId';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// const myStyle = {color:'black', fontFamily: 'Arial', fontSize: '32px'};
const headerData = {
  site_name: 'up react',
  nav:[
    {'link': 'about', 'text': 'about'},
    {'link': 'users', 'text': 'users'},
  ]
};
const products = [
  { id: 1, name: 'Товар 1', price: 100 },
  { id: 2, name: 'Товар 2', price: 150 },
  { id: 3, name: 'Товар 3', price: 200 },
];

function App() {
  return (
    <>
    <div>
      <h1>Список товарів</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    {/* <Router>
      <Header data={headerData} />
      <nav>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </nav>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:userName' element={<UserId/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router> */}
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
