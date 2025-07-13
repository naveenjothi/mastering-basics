import { MyStack } from "../stack_using_object";

const str = "naveen";

const reverseString = (str: string): string => {
  const stack = new MyStack<string>();
  for (const char of str) {
    stack.push(char);
  }

  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
};

console.log(reverseString(str));
