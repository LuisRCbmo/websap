import './Input.css';
function Input({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}
export default Input;