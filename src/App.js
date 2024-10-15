import './App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-area">
        <SearchBar />
        <MainContent />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
