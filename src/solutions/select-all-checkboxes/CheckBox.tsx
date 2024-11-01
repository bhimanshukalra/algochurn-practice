type CheckBoxProps = {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export function CheckBox({ checked, onChange, label }: CheckBoxProps) {
  return (
    <>
      <input
        type="checkbox"
        onChange={onChange}
        className="me-2"
        checked={checked ?? false}
      />
      {label}
    </>
  );
}
