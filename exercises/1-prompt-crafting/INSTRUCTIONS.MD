# 🎯 Prompt Crafting Workshop Exercises

## Overview
In this section we'll be applying the skills we learned from the prompt crafting session to see how just a little more effort with prompts can go a long way.

For each exercise, you should:
- write the first prompt and evaluate Copilot's suggestion
- identify opportunities for where the prompt could be improved
- iterate on the prompt and compare the suggestions of the different prompt versions

---

### 📝 Exercise 1: Function Implementation
**Task**: Write prompts for implementing the same function in three different ways, with increasing specificity:

- Basic prompt: "Write a function to validate a phone number"
- Better prompt: "Create a Python function that validates international phone numbers with country codes"
- One-shot prompt: "Write a Python function named validate_phone_number that takes a string parameter and returns true if the number matches E.164 format (e.g. +12345678900). The function should:
  - Validate string starts with + symbol
  - Ensure 1-15 digits after the + symbol
  - Handle null/empty inputs 
  - Strip spaces and special characters before validation
  - Return boolean true/false"



### 📚 Exercise 2: Documentation Generation
**Task**: Practice writing prompts that generate documentation for existing code.

Write three different prompts requesting documentation:
1. "Add documentation for this function"
2. "Create JSDoc comments explaining the parameters, return value, and purpose of this function"
3. "Generate comprehensive documentation including @param, @returns, @throws, and usage examples for this function"

### ♻️ Exercise 3: Code Refactoring
**Task**: Write prompts to refactor code with specific goals.

Take a simple but poorly written function and write prompts to improve it focusing on:
1. Performance optimization
2. Error handling
3. Making it more maintainable

Compare how different prompt phrasings lead to different results.

### 🧪 Exercise 4: Test Case Generation
**Task**: Practice writing prompts for test case creation.

Start with a function's signature and write increasingly specific prompts:
1. "Write tests for this function"
2. "Create unit tests covering edge cases for this function"
3. "Generate Jest test cases that check null inputs, valid inputs, and boundary conditions for this function"

### 🔍 Exercise 5: Context-Aware Prompting
**Task**: Practice providing relevant context in prompts.

Write prompts with increasing context:
1. "Write a data validation function"
2. "Write a data validation function for user registration" 
3. "Write a data validation function for a healthcare application's user registration that must comply with HIPAA requirements"

### 🐛 Exercise 6: Debugging Practice
**Task**: Practice writing effective prompts for debugging.

Start with a piece of code that has a bug and write prompts that:
1. Ask for general debugging help
2. Specify the exact error message  
3. Include the context of when the error occurs
4. Provide relevant environment information



### 🎓 Key Takeaways
- The importance of being specific and clear
- How to provide proper context
- The value of iterative refinement
- The impact of different prompt structures on results
- How to effectively communicate technical requirements


### Additional Resources
- [Example Prompts for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat)



