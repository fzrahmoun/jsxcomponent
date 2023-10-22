import './App.css';
import product from './products';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className='container'>
      
      <div className='row'>
       {product.map((product) => (
        <div className='col-md-3'>
          <div className='cadre' key={product.id}>
            <Name productName={product.name} />
            <Price productPrice={product.price} />
            <Description productDescription={product.description} />
            <Image productImage={product.image} altText={product.name} />
        </div>
        </div>
      ))}
      </div>
      </div>
      
    </div>
    
  );
}

export default App;
