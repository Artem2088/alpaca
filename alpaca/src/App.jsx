import '../src/stylesheet/app.scss';
import { Header, Modal } from './components/index.js';

function App() {

  const modalOpen = () => {
    let page = document.querySelector('.page');
    let overlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('.mobile-nav');
    page.classList.toggle('open');
    overlay.classList.toggle('show');
    page.classList.contains('open') ? modal.setAttribute('style', 'transform: translateX(0);') : modal.removeAttribute('style');
   }
 
  return (
    <div className="page">
      <div className="wrapper">
        <Header modalOpen={modalOpen}/>
        <body></body>
        <footer>
          <Modal modalOpen={modalOpen}/>
        </footer>
      </div>
    </div>
  )
}

export default App
