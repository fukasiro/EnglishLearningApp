export default function Input({ type = 'text', placeholder, value, onChange, required = false }) {
  return (
    <div className="common-input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="common-input"
      />
    </div>
  );
}