import './App.css';
import Container from './pages/container/Container';
import { ContentContextProvider } from './services/ContentContext';

function App() {
  return (
    <div className="App">
      <ContentContextProvider>
        <Container />
      </ContentContextProvider>
    </div>
  );
}

export default App;
