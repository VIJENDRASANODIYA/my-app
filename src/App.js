// import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
  <>
  <header className='header'>
      <h2 className='head-p'>About Us</h2>
  </header>
    <p style= {{textAlign:'center',fontSize:'20px'}}>At Zappos.com,our purpose is simple: to live and deliver WOW. </p>
    <div className='middle'>
      <p className='middle-p' >Twenty years ago, we began as a small online retailer that only sold shoes. Today , we still sell shoes --as well as clothing handbags, accessories and more. That "more" is providing very best customer service customer experience , and company culture. We aim to inspire the world by showing it;s possible to simultaneously deliver happiness to customer , employees, vendors shareholders and the community in a long-term, sustainable way.</p>
    </div>
    <div className='bottom' >
      <p className='bottom-p'>we hope that in the future people won't even realilze we started selling shoes online. instead they'll know Zappos as a service company that  just happens to sell <span style={{fontWeight:'800'}}>_______.</span>  </p>
    </div>
  </>  
  );
}

export default App;
