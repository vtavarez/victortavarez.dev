export default function Field(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <div className="field">
      <input {...props} />
    </div>
  );
}
