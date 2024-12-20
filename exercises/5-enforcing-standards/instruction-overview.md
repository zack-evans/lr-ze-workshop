
### 🤖 Why you dhould be using custom instructions with GitHub Copilot Chat

Copilot Chat has always been receptive to being *guided* by the user based on feedback given along the way. For example, telling Copilot to generate unit tests using a specific framework. This usually required manual input and consistentcy from the developer in applying these guidelines if persistent context wasn't available.

Moving forward, you can avoid repeating your guidelines to Copilot. Instead define it once in the `.github/copilot-instructions.md` file. This file will contain your default guidelines for Copilot Chat interactions, as well as more specific instructions that Copilot Chat must consider when generating responses. 

When a repository that contains the `copilot-instructions.md` is open in  VS Code and Visual Studio, these guidelines will be recognized and enforced. This is important because not only can you standardize Copilot Chat interactions for just yourself, but also for a project.

We'll be covering how you can use `copilot-instructions.md` to:
- understanding the priorities and guardrails that will be formed based application, workflows, and coding standards
- defining your instructions
- standardizing these Copilot Chat configurations for other contributors of the repository


### 🎯 Determining the standards you want copilot-instructions.md to enforce

When getting started, you should prioritize defining instructions that directly impact your team's daily workflow and code quality. 

This would include code style conventions, common patterns, testing practices, and security requirements. Then, gradually expand your instructions to include project-specific optimizations and team collaboration guidelines. A good series of questions to run through for each topic first would be:

- _What are our current practices for this topic?_
- _What problems are we trying to solve?_
- _What standards do we want to enforce?_
- _What tools or frameworks should be used?_
- _What should be avoided?_

*Hint: If you have trouble getting started, consider the different validations and standards that are part of your code review process.*

The `copilot-instructions.md` file is an opportunity for standardization first and individual preferences second. So it's important to remember each instruction is supplemental information for Copilot Chat. As a result, each entry in `copilot-instructions.md` should **introduce clear value** rather than unnecessary context.

Take aways:
- Focus on team-wide standards over individual preferences
- Start small, explore topic by topic
- Involve the team in the process
- Keep instructions clear and value-focused
- Update instructions as team practices evolve


### Writing effective instructions and what to avoid

Using the lessons learned from the prompt exercises will be relevant when defining the instructions in your `copilot-instructions.md` file.

