import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({number, diff, onIncrease, onDecrease, onSetDiff}){
  return(
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  )
}

/**
 * 리덕스 스토어의 상태를 조회해서 어떤 것들을 prop로 넣어줄지 정의
 * 현재 리덕스 상태를 파라미터로 받아옴
  */
const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff
});

/**
 * 액션을 디스패치하는 함수를 만들어서 prop로 넣어줌
 * dispatch를 파라미터로 받아옴
 */
const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: diff => dispatch(setDiff(diff))
});

/**
 * connect함수에 인자 넣기
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
