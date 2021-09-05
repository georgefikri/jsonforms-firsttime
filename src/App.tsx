import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import schema from "./schema.json";
import uischema from "./uischema.json";

import { myAppTester } from "./AppTester";
import AppRenderer from "./AppRenderer";
import { materialRenderers } from "@jsonforms/material-renderers";

const initialData = {
  name: "",
  address: "",
  rating: null,
  exampleRadioEnum: "",
};

const renderers = [
  ...materialRenderers,
  {
    tester: myAppTester,
    renderer: AppRenderer,
  },
];

function App() {
  const [data, setData] = useState(initialData);
  console.log("data", data);
  return (
    <div className="App">
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        // cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
    </div>
  );
}

export default App;
