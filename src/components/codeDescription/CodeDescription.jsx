function CodeDescription() {
  return (
    <div>
      <h1>npm create storybook@latest</h1>
      <h2>
        Для interactions тестів: <br /> npm install --save-dev
        @storybook/testing-library @storybook/jest @testing-library/user-event
      </h2>
      <h3>npm run storybook</h3>
      <div>
        📁 XComponent --&gt; <br />
        📄 XComponent.tsx <br />
        📄 XComponent.types.ts <br />
        📄 XComponent.stories.tsx <br />
      </div>

      <div className="storybookRule">
        <div>
          <p>📄 XComponent.tsx</p>
          <p>
            export const XComponent:<mark> React.FC&lt;</mark>
            XComponentProps<mark>&gt;</mark> = (&#123; props <br />
            &#125;) =&gt; &#123; <br />
            return &lt;&gt; <br />
            &lt;form ....
          </p>
        </div>
        <div>
          <p> 📄 XComponent.types.ts </p>
          <p>
            <mark>export interface </mark>DemoFormComponentProps{" "}
            <mark>&#123;</mark> <br />
            a: string;
            <br />
            b: number;
            <br />
            c: boolean;
            <br />
            onAChange: (value: string) =&gt; void;
            <br />
            onBChange: (value: number) =&gt; void;
            <br />
            onCChange: (value: boolean) =&gt; void;
            <br />
            onSubmit: () =&gt; void;
            <br />
            <mark> &#125;</mark>
          </p>
        </div>
        <div>
          <p> 📄 XComponent.stories.tsx</p>

          <p>
            import type &#123;(<mark>Meta, StoryObj</mark>)&#125; from
            "@storybook/react-vite"; <br />
            <br />
          </p>
          <p>
            import <mark>userEvent </mark>from "@testing-library/user-event";
          </p>
          <p>
            import &#123;<mark>within </mark>&#125; from
            "@storybook/testing-library";
          </p>
          <p>
            import &#123;<mark>expect </mark>&#125; from "@storybook/jest";
          </p>
          <p>
            1. const <mark>meta</mark>:<mark> Meta&lt;</mark>typeof
            RenderWithState
            <mark>&gt;</mark> = &#123;
            <br />
            <br />
            <mark> title:</mark> "Shared/DemoForm",
            <br />
            <mark> component:</mark> XComponent,
            <br />
            <mark> tags: </mark>["autodocs"],
            <br />
            <mark> parameters: </mark>&#123;
            <br />
            layout: "centered",
            <br />
            &#125;,
            <br />
            <mark> argTypes: &#123;</mark>
            <br />
            onAChange: &#123; action: "a changed" &#125;,
            <br />
            onBChange: &#123; action: "b changed" &#125;,
            <br />
            onCChange: &#123; action: "c changed" &#125;,
            <br />
            onSubmit: &#123; action: "submitted" &#125;,
            <br />
            &#125;,
            <br />
            &#125;;
            <br />
            <mark> export default meta;</mark>
            <br />
            <br />
            <br />
            2.<mark>type Story</mark> = StoryObj<mark>&lt;typeof </mark>
            XComponent;&gt; <br />
            <br />
            3. export const <mark>Default:</mark> <mark>Story </mark>= &#123;{" "}
            <br />
            <mark> args: &#123;</mark> <br />
            a: "true",
            <br />
            b: 0,
            <br />
            c: false,
            <br />
            &#125;,
            <br />
            <br />
            4. import &#123;<mark> within </mark>&#125; from
            "@storybook/testing-library";
            <br />
            <br />
            export const Interactive: Story = &#123; <br />
            <mark>render:</mark> XComponent <br />
            <br />
            <mark> play:</mark> async (&#123; canvasElement &#125;) =&gt; &#123;
            const canvas =<mark> within</mark>(canvasElement); <br /> <br />
            const inputX = canvas<mark>.getBy...Text</mark>("Xxxx"); <br />
            <br />
            await
            <mark> userEvent.</mark>
            <mark>clear(</mark>inputX); <br />
            await<mark> userEvent.type</mark>(inputX, "xxx");
            <br />
            <br />
            //--результат перевірити <br /> const result = await canvas.
            <mark>findByTestId("result")</mark>;
            <br /> await <mark>expect(result)</mark>.
            <mark>toHaveTextContent</mark>("Name: xxx");
            <br /> await <mark>expect(result)</mark>.toHaveTextContent("Age:
            111");
            <br /> await <mark>expect(result)</mark>.toHaveTextContent("Agreed:
            yes");
            <br />
            &#125; <br />
            &#125;
          </p>
        </div>
        <div>
          <a
            href="https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy"
            target="_blank"
          >
            title / шлях до конпонента
          </a>
          <a href="https://storybook.js.org/docs/writing-docs/autodocs">
            tags: ['autodocs'] / auto документація
          </a>
          <a href="https://storybook.js.org/docs/api/arg-types">
            argTypes: &#123; &#125; / Опис типа
          </a>
          <a href="https://storybook.js.org/docs/writing-stories/parameters">
            parametrs/ управління поведінкую функцій / параметри
          </a>
          <a href="">title / шлях до конпонента</a>
          <a
            href="https://storybook.js.org/docs/writing-stories/stories-for-multiple-components"
            target="_blank"
          >
            List &gt; item / subcomponents:
          </a>
          <br />
          <br />
          <a href="https://storybook.js.org/docs/writing-tests/interaction-testing">
            test / By...
          </a>
          <a href="https://storybook.js.org/docs/writing-stories/play-function">
            play/ шляхи взаємодії
          </a>
        </div>
      </div>
    </div>
  );
}

export default CodeDescription;
