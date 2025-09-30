import { DemoControlsComponent } from "./shared/DemoControlsComponent/DemoControlsComponent.types";
import "./App.css";
import RenderWithState from "./shared/DemoForm/RenderWithState.types";
import CodeDescription from "./components/codeDescription/CodeDescription";
import CypressTestComponents from "./shared/CypressTestComponents/CypressTestComponents";

function App() {
  return (
    <div>
      <CodeDescription />
      <DemoControlsComponent
        text="Demo Component"
        isActive={true}
        count={5}
        rangeValue={42}
        color="#4caf50"
        date={new Date()}
        data={{ foo: "bar", num: 123 }}
        items={["Item 1", "Item 2", "Item 3"]}
        variant="primary"
        tags={["tag1", "tag2"]}
      />
      <RenderWithState />
      <CypressTestComponents />
    </div>
  );
}

export default App;
