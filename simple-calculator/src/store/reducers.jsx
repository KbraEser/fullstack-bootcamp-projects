import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CALCULATE_TOTAL,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  input: '0',
  previous: null,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num2 === 0 ? 0 : num1 / num2;
    default:
      return num1;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER: {
      const digit = String(action.payload);
      const nextInput = state.input === '0' ? digit : state.input + digit;

      return {
        ...state,
        input: nextInput,
        total: Number(nextInput),
      };
    }

    case CHANGE_OPERATION:
      return {
        ...state,
        previous: Number(state.input),
        operation: action.payload,
        input: '0',
        total: 0,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        input: '0',
        previous: null,
        operation: '+',
      };

    case CALCULATE_TOTAL: {
      if (state.previous === null) {
        return {
          ...state,
          total: Number(state.input),
        };
      }

      const result = calculateResult(
        state.previous,
        Number(state.input),
        state.operation
      );

      return {
        ...state,
        total: result,
        input: String(result),
        previous: null,
        operation: '+',
      };
    }

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.memory + Number(state.input),
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
        input: String(state.memory),
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
