import { DemoControlsComponent } from "./shared/DemoControlsComponent/DemoControlsComponent.types";
import "./App.css";
import RenderWithState from "./shared/DemoForm/RenderWithState.types";
import CodeDescription from "./components/codeDescription/CodeDescription";
import CypressTestComponents from "./shared/CypressTestComponents/CypressTestComponents";
import CypressFormTest01 from "./shared/CypressComponents/CypressFormTest01";
import CypressListComponents from "./shared/CypressComponents/CypressListComponents";
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
      <h2>Practice</h2>
      <CypressFormTest01 />
      <CypressListComponents />
    </div>
  );
}

export default App;
