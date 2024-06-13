import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppContainer, Container, MainContent } from "./components/styledComponents";
import AdicionarContato from "./features/contatos/AdicionarContato";
import ListaContatos from "./features/contatos/ListaContatos";
import React from "react";
import Sidebar from "./components/SideBar";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Provider store={store}>
      <AppContainer>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent sidebarOpen={sidebarOpen}>

        <Container>
          <h1>Lista de contatos</h1>
          <AdicionarContato />
          <ListaContatos />
          </Container>
          </MainContent>
      </AppContainer>
    </Provider>
  );
}

export default App;
