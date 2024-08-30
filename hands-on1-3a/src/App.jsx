import logo from './logo.svg';
import './App.css';
import Name from './Component/Name/Name';
import Section from './Component/Section/Section';
import Description from './Component/Description/Description';

function App() {
  const userInformation = {
    firstName: "Ryan Joseph",
    lastName: "Domingo",
    section: "BSIT-3A",
    description: "Poging student From DYCI!"
  }
  return (
    <div className="App">
      <Name firstName={userInformation.firstName} lastName={userInformation.lastName}/>
      <Section section={userInformation.section}/>
      <Description description={userInformation.description}/>
    </div>
  );
}

export default App;
