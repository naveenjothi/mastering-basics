import { MyStack } from "../stack_using_object";

const removeAdjacentDuplicates = (expression: string) => {
  const stack = new MyStack();
  for (const char of expression) {
    if (char !== stack.peek()) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  let result = "";
  while (!stack.isEmpty()) {
    result = stack.pop() + result;
  }

  return result;
};

console.log(removeAdjacentDuplicates("abbaca")); // ca
