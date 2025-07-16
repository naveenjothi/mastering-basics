import { MyStack } from "../stack_using_object";

const validParanthesis = (expression: string) => {
  const mapper: Record<string, string> = {
    "{": "}",
    "(": ")",
    "[": "]",
    "<": ">",
  };
  const stack = new MyStack();
  for (const char of expression) {
    if (mapper[char]) {
      stack.push(mapper[char]);
    } else {
      if (char !== stack.pop()) return false;
    }
  }
  return stack.size() == 0;
};

console.log(validParanthesis("(}"));
