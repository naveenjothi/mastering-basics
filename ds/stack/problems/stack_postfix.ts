import { MyStack } from "../stack_using_object";

const evalPostfix = (expression: string[]) => {
  const stack = new MyStack<number>();
  for (const key of expression) {
    if (!isNaN(Number(key))) {
      stack.push(Number(key));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      if (a === undefined || b === undefined)
        throw new Error("Invalid expression");

      switch (key) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
        default:
          throw new Error("Unknown operator " + key);
      }
    }
  }

  if (stack.size() !== 1) throw new Error("Invalid postfix expression");

  return stack.pop();
};

console.log(evalPostfix(["2", "1", "+", "3", "*"]));
