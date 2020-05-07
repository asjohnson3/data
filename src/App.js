import React, {useEffect, useState} from 'react';
import './App.css';
// import { Values } from "./components/Values";
import { Columns } from "./components/columns";
import { ValueForm } from "./components/filter_form";
import { LineChart } from "./components/line_chart";
import { ColumnCheckboxes } from "./components/Checkboxes";
import { Header, Container } from "semantic-ui-react";

function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch('/simple_chart').then(response =>
      response.json().then(data => {
        setValues(data);
      })
    );
  }, [])
  ;

  // console.log(values);
  return (
    <div className="App">
    <Header as='h1' style={{marginTop : 50}}>
      Data Visualizer
    </Header>
    <Columns values = {values} />
    <ColumnCheckboxes values={values}/>
    <Container style={{marginTop : 50}}>
      <ValueForm onNewFilter={data => setValues(data)} />
      <LineChart values={values}/>
      {/* <Values values={values} /> */}
    </Container>


    </div>
  );
}

export default App;
