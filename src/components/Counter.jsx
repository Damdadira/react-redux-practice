function Counter({number, diff, onIncrease, onDecrease, onSetDiff}){
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10));
  }

  return(
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min='1' onChange={onChange} style={{marginRight: '1rem'}} />
        <button onClick={onIncrease} style={{marginRight: '8px'}}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter;