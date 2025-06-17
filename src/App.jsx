// import Exercise from './Exercise'
import CounterContainer from './containers/CounterComtainer'
import TodosContainer from './containers/TodosContainer'

function App() {
  return (
    <>
      <div style={{padding: '1rem'}}>
        {/* <Exercise /> */}
        <CounterContainer />
      </div>
      <hr />
      <div style={{padding: '1rem'}}>
        <TodosContainer />
      </div>
      <hr />
    </>
  )
}

export default App
