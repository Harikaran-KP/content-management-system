import './App.css';
import Container from './pages/container/Container';
import { AddContextProvider } from './services/AddContentContext';
import { ContentContextProvider } from './services/ContentContext';
import { DeleteContextProvider } from './services/DeleteContentContext';
import { LoginContextProvider } from './services/LoginContext';
import { UpdateContextProvider } from './services/UpdateContentContext';

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <ContentContextProvider>
          <DeleteContextProvider>
            <UpdateContextProvider>
              <AddContextProvider>
                <Container />
              </AddContextProvider>
            </UpdateContextProvider>
          </DeleteContextProvider>
        </ContentContextProvider>
      </LoginContextProvider>
    </div >
  );
}

export default App;
