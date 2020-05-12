import React, { useEffect, useState } from "react";
import "./App.css";
// import { Values } from "./components/Values";
import { Columns } from "./components/Columns/Columns";
// import { ValueForm } from "./components/filter_form";
import { LineChart } from "./components/line_chart";
// import { ColumnCheckboxes } from "./components/Checkboxes";
import { Header, Container } from "semantic-ui-react";
import { FileUpload } from "./components/fileUpload/fileUpload";

function App() {
  const [values, setValues] = useState([]);
  const [file, setFile] = useState([]);

  useEffect(() => {
    fetch("/simple_chart").then((response) =>
      response.json().then((data) => {
        setValues(data);
      })
    );
  }, []);
  console.log(values);
  // console.log(values);
  return (
    <div className="App">
      <Header as="h1" style={{ marginTop: 50, textAlign: "center" }}>
        Data Visualizer
      </Header>
      <FileUpload
        file={file}
        values={file}
        onNewFile={(data) => setFile(data)}
      />
      {/* <ColumnCheckboxes values={values} /> */}
      <Container style={{ marginTop: 50 }}>
        {/* <ValueForm onNewFilter={(data) => setValues(data)} /> */}
        {values.length > 0 && (
          <Columns
            values={values}
            onNewFilter={(data) => setValues(data)}
            style={{ textAlign: "center" }}
          />
        )}
        <LineChart values={values} />
        {/* <Values values={values} /> */}
      </Container>
    </div>
  );
}

export default App;
