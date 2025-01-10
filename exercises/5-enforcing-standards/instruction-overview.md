
### 🤖 Why you should be using custom instructions with GitHub Copilot Chat

Copilot Chat has always been receptive to being *guided* by the user based on feedback given along the way. For example, telling Copilot to generate unit tests using a specific framework. This usually required manual input and consistentcy from the developer in applying these guidelines if persistent context wasn't available.

Moving forward, you can avoid repeating your guidelines to Copilot. Instead define it once in the `.github/copilot-instructions.md` file. This file will contain your default guidelines for Copilot Chat interactions, as well as more specific instructions that Copilot Chat must consider when generating responses. 

When a repository that contains the `copilot-instructions.md` is open in  VS Code and Visual Studio, these guidelines will be recognized and enforced. This is important because not only can you standardize Copilot Chat interactions for just yourself, but also for a project.

After reading this document, you'll be able to:
- understand how to determine what should and shouldn't be included in your instructions
- defining your instructions
- standardizing these Copilot Chat configurations for other contributors of the repository


### 🎯 Determining the standards you want copilot-instructions.md to enforce

When getting started, you should prioritize defining instructions that directly impact your team's daily workflow and code quality. 

This would include code style conventions, common patterns, testing practices, and security requirements. A good series of questions to run through for each topic first would be:

- _What problems are we trying to solve?_
- _What standards do we want to enforce?_
- _What tools or frameworks should be used?_
- _What should be avoided?_

*Tip: If you have trouble getting started, consider the different validations and code quality standards that are part of your code review process.*

The `copilot-instructions.md` file is an opportunity for standardization first and individual preferences second. So it's important to remember each instruction is supplemental information for Copilot Chat. 

**Take aways:**
- Start small, keep it small
- Focus on project/team standards over individual preferences
- Involve the team in the process
- Keep instructions clear and value-focused
- Modify the instructions as team practices evolve 


### Writing effective instructions and what to avoid

Its important to understand what is and isn't referenceable when maintaining your `copilot-instructions.md`.
Things to avoid:
- Chat participants and extensions, such as `@workspace` in VS Code, are not accessible.
- Telling Copilot to reference a specific file path or external resource
- Attempting to have Copilot adopt a specific persona or respond in a certain level of detail

So what does good look like when writing instructions?

#### Keep it simple and short
Each entry in `copilot-instructions.md` should **introduce clear value** rather than unnecessary context. You should keep the `copilot-instructions.md` as **short** and **concise** as possible. The instructions you define will be enforced on every Copilot Chat interaction. So the lengthier the amount of instructions, the less context available to Copilot for the code or question in scope.

Below are examples that demonstrate how specificity and concise instructions will help guide Copilot to produce code according to your standards.

```markdown
# Coding Style and Conventions

*   Follow Airbnb's JavaScript style guide.
*   Use functional components with hooks in React.
*   Strictly type all variables and functions using TypeScript 4.9 or later.


# Tech Stack and Versions

*   **Frontend:** React 18, Redux Toolkit 1.9, Material-UI 5
*   **Backend:** Node.js 18, Express 4.18, TypeScript 4.9+, PostgreSQL 14, Sequelize 6 (ORM)
*   **Testing:** Jest 29, React Testing Library 14, Supertest 6
*   **Linting:** ESLint 8, Prettier 3

# App Logic

*   **Data Model:** Follow the defined data models for tasks, projects, and users (refer to `schemas.ts`). Use Sequelize models and migrations for database interactions.
*   **API Endpoints:**  Adhere to the API specification documented in `api-spec.md`. Use Express Router and middleware for handling requests.
*   **State Management:** Use Redux Toolkit 1.9 with createSlice and createAsyncThunk for managing application state in the React frontend.
*   **Asynchronous Operations:** Use async/await for handling promises and asynchronous operations.

```

### 🏋️ Exercises: Mastering copilot-instructions.md

#### Exercise 1: Basic Setup and Validation
**Objective:** Create a basic copilot-instructions.md file and verify that Copilot Chat follows the instructions.

1. Create a `.github/copilot-instructions.md` file in your repository with these basic styling instructions:
```markdown
# Coding Style
* Use camelCase for variable and function names
* Include JSDoc comments for all functions
* Use const for variables that won't be reassigned

2. Open your repository in VS Code and ask Copilot Chat to create a simple utility function. Compare the responses with and without the instructions file:
 - First, rename or temporarily remove the copilot-instructions.md file and ask:
  - `Create a function that formats a phone number into (XXX) XXX-XXXX format`
3. Then, restore the copilot-instructions.md file and ask the same question
4. Compare the differences in the generated code, particularly noting the naming conventions and documentation

### Exercise 2: Technology Stack Enforcement 🔧

In this exercise, you'll learn how Copilot Chat adapts its responses based on technology stack requirements. You'll see firsthand how defining tech stack specifications influences code generation and recommendations.

#### 📝 Setup Instructions

1. Add the following technology requirements to your `.github/copilot-instructions.md`:

```markdown
# Technology Stack Requirements

## Frontend Framework
* Use React 18+ with TypeScript for all frontend components
* Implement strict TypeScript checks
* Use functional components with hooks
* Follow React best practices for performance optimization
```

2. Test the instructions with these prompts:
- "Create a component that fetches and displays user data"
- "Show me how to implement a loading state"
3. Compare how Copilot Chat's responses align with the specified tech stack.



### 🎓 What You've Learned

Congratulations! You've now mastered the essentials of custom instructions for GitHub Copilot Chat. Here's what you've accomplished:

✅ **Understanding Custom Instructions**
- Learned how to centralize Copilot Chat guidelines using `.github/copilot-instructions.md`
- Discovered how to maintain consistent interactions across your project
- Understood the importance of team-wide standardization

✅ **Best Practices**
- Mastered the art of writing clear, value-focused instructions
- Learned what to include and what to avoid in your instructions
- Understood how to balance team standards with individual preferences


Remember: The key to successful custom instructions is keeping them concise, focused on value, and aligned with your team's standards. Start small, iterate based on team feedback, and watch your development workflow transform! 

---
*Next Steps: Start implementing custom instructions in your own repositories and share this knowledge with your team!*

