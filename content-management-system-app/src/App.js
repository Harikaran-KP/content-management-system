import './App.css';
import Container from './pages/container/Container';
import { AddContextProvider } from './services/AddContentContext';
import { ContentContextProvider } from './services/ContentContext';
import { DeleteContextProvider } from './services/DeleteContentContext';
import { UpdateContextProvider } from './services/UpdateContentContext';

function App() {
  return (
    <div className="App">
      <DeleteContextProvider>
        <AddContextProvider>
          <UpdateContextProvider>
            <ContentContextProvider>
              <Container />
            </ContentContextProvider>
          </UpdateContextProvider>
        </AddContextProvider>
      </DeleteContextProvider>
    </div>
  );
}

export default App;
