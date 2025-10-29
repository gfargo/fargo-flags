export function TestingSection() {
  return (
    <section id="testing">
      <h2 className="text-2xl font-bold mb-4">8. Testing</h2>

      <h3 className="text-lg font-semibold mb-2">Unit Tests</h3>
      <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
        {`import { render } from "@testing-library/react";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";
import MyComponent from "./MyComponent";

test("shows new feature when flag is enabled", () => {
  render(
    <FlagsTestProvider overrides={{ "my-feature": true }}>
      <MyComponent />
    </FlagsTestProvider>
  );
  
  expect(screen.getByText("New Feature")).toBeInTheDocument();
});`}
      </pre>

      <h3 className="text-lg font-semibold mb-2">Storybook</h3>
      <pre className="bg-muted p-4 rounded-lg text-sm">
        {`// MyComponent.stories.tsx
export const WithFeatureEnabled = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{ "my-feature": true }}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};

export const WithFeatureDisabled = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{ "my-feature": false }}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};`}
      </pre>
    </section>
  );
}