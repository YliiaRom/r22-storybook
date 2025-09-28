export interface DemoFormComponentProps {
  name: string;
  age: number;
  isAgreed: boolean;
  onNameChange: (value: string) => void;
  onAgeChange: (value: number) => void;
  onAgreementChange: (value: boolean) => void;
  onSubmit: () => void;
}
