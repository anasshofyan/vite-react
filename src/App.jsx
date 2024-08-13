import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { List } from "./components/List";
import ViteLogo from "/vite.svg";
import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <List />
      <Card>
        <Avatar src={ViteLogo} />
        <h6>Vite JS</h6>
        <p>Build tooling for modern web development</p>
      </Card>
      <Footer />
    </>
  );
}

export default App;
