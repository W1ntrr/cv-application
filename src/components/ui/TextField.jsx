export default function TextField({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  onChangeField,
}) {
  return (
    <div>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChangeField(e, id)}
        placeholder={placeholder}
        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
        required
      />
    </div>
  );
}
