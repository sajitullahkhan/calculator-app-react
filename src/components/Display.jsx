function Display({ displayValue }) {
  return (
    <div>
      <input className="mt-6 mb-2 text-black" id='display' type="text" value={displayValue} readOnly />
    </div>
  )
}

export default Display;