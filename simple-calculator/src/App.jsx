import React from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import { useReducer } from 'react';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  calculateTotal,
  memoryAdd,
  memoryRecall,
  memoryClear,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (e) => {
    dispatch(applyNumber(Number(e.currentTarget.value)));
  };

  const handleOperationClick = (e) => {
    const operation = String(e.currentTarget.value);

    switch (operation) {
      case 'CE':
        dispatch(clearDisplay());
        break;
      case '=':
        dispatch(calculateTotal());
        break;
      case 'M+':
        dispatch(memoryAdd());
        break;
      case 'MR':
        dispatch(memoryRecall());
        break;
      case 'MC':
        dispatch(memoryClear());
        break;
      default:
        dispatch(changeOperation(operation));
        break;
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.input} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton onClick={handleOperationClick} value={'M+'} />
              <CalcButton onClick={handleOperationClick} value={'MR'} />
              <CalcButton onClick={handleOperationClick} value={'MC'} />
            </div>
            <div className="row">
              <CalcButton onClick={handleNumberClick} value={1} />
              <CalcButton onClick={handleNumberClick} value={2} />
              <CalcButton onClick={handleNumberClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={4} />
              <CalcButton onClick={handleNumberClick} value={5} />
              <CalcButton onClick={handleNumberClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={7} />
              <CalcButton onClick={handleNumberClick} value={8} />
              <CalcButton onClick={handleNumberClick} value={9} />
            </div>
            <div className="row">
              <CalcButton onClick={handleOperationClick} value={'+'} />
              <CalcButton onClick={handleNumberClick} value={0} />
              <CalcButton onClick={handleOperationClick} value={'-'} />
            </div>
            <div className="row">
              <CalcButton onClick={handleOperationClick} value={'*'} />
              <CalcButton onClick={handleOperationClick} value={'/'} />
              <CalcButton onClick={handleOperationClick} value={'CE'} />
            </div>

            <div className="row eq_button">
              <CalcButton onClick={handleOperationClick} value={'='} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
