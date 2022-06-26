import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import contacts from './data/contacts.json'

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className='contacts'>
        {
          contacts.map((contact, index) => (
            <Contact key={index} data={contact} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
