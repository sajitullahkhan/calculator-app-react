const BtnContainer = ({ onBtnClick }) => {
  const btnNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.', '=']
  return (
    <main className="grid grid-rows-6 grid-cols-3 w-44 gap-1">
      {btnNames.map((names) => {
        return <button key={names} className="btn rounded-sm" onClick={onBtnClick}>{names}</button>
      })}

    </main>
  )
}

export default BtnContainer;