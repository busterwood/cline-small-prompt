export const newTaskToolResponse = () =>
	`<explicit_instructions type="new_task">
The user wants to create a new task with preloaded context. You must generate this context.
You are ONLY allowed to respond by calling the new_task tool.

The new_task tool is defined below:

Description:
Create a detailed summary of the conversation, focusing on explicit user requests and your actions. This summary should capture technical details, code patterns, and architectural decisions crucial for the new task.
The user will see a preview of your generated context and can choose to create the new task or continue chatting.

Parameters:
- Context: (required) Context to preload the new task. If applicable, include:
  1. Current Work: Detail what was being worked on before this request. Prioritize recent messages.
  2. Key Technical Concepts: List all important technical concepts, technologies, coding conventions, and frameworks discussed relevant to the new task.
  3. Relevant Files and Code: Enumerate specific files and code sections examined, modified, or created. Prioritize recent changes.
  4. Problem Solving: Document problems solved and ongoing troubleshooting.
  5. Pending Tasks and Next Steps: Outline all explicitly requested pending tasks and your next steps for outstanding work. Include clarifying code snippets. For next steps, use verbatim quotes from the most recent conversation to ensure no information loss.

Usage:
<new_task>
<context>context to preload new task with</context>
</new_task>

Below is the user's input when they indicated that they wanted to create a new task.
</explicit_instructions>\n
`

export const condenseToolResponse = () =>
	`<explicit_instructions type="condense">
The user explicitly asked you to create a detailed conversation summary to compact the context window while retaining key information.
You are only allowed to respond by calling the condense tool.

The condense tool is defined below:

Description:
Create a detailed summary of the conversation, focusing on explicit user requests and your actions. This summary should capture technical details, code patterns, and architectural decisions essential for continuing the conversation and supporting tasks.
The user will see a preview of your summary and can choose to use it to compact their context window or continue chatting.
'Smol' or 'compact' are equivalent to 'condense' in a similar context.

Parameters:
- Context: (required) Context to continue the conversation. If applicable, include:
  1. Previous Conversation: High-level details of the entire conversation for general flow understanding.
  2. Current Work: Detail what was being worked on before this request to compact the context. Prioritize recent messages.
  3. Key Technical Concepts: List all important technical concepts, technologies, coding conventions, and frameworks discussed relevant to this work.
  4. Relevant Files and Code: Enumerate specific files and code sections examined, modified, or created. Prioritize recent changes.
  5. Problem Solving: Document problems solved and ongoing troubleshooting.
  6. Pending Tasks and Next Steps: Outline all explicitly requested pending tasks and your next steps for outstanding work. Include clarifying code snippets. For next steps, use verbatim quotes from the most recent conversation to ensure no information loss.

Usage:
<condense>
<context>Your detailed summary</context>
</condense>

Example:
<condense>
<context>
1. Previous Conversation:
  [Detailed description]

2. Current Work:
  [Detailed description]

3. Key Technical Concepts:
  - [Concept 1]
  - [Concept 2]
  - [...]

4. Relevant Files and Code:
  - [File Name 1]
    - [Summary of why this file is important]
    - [Summary of the changes made to this file, if any]
    - [Important Code Snippet]
  - [File Name 2]
    - [Important Code Snippet]
  - [...]

5. Problem Solving:
  [Detailed description]

6. Pending Tasks and Next Steps:
  - [Task 1 details & next steps]
  - [Task 2 details & next steps]
  - [...]
</context>
</condense>

</explicit_instructions>\n
`

export const newRuleToolResponse = () =>
	`<explicit_instructions type="new_rule">
The user wants a new Cline rule file in the .clinerules directory. You must use the new_rule tool. Do NOT overwrite existing files. This tool can be used in PLAN or ACT modes.

The new_rule tool is defined below:

Description:
Create a new Cline rule file with guidelines for code development with the user. This can be project-specific or global, covering conversational style, dependencies, coding styles, naming conventions, architectural choices, UI/UX preferences, etc.
The file must be markdown ('.md'). Its name should be succinct and reflect the main concept (e.g., 'memory-bank.md').

Parameters:
- Path: (required) File path relative to the current working directory. Must be in .clinerules (create if needed). Filename cannot be "default-clineignore.md". Use hyphens for word separation.
- Content: (required) COMPLETE intended file content. Include all parts, even if unchanged. Content must follow these instructions:
  1. Format with distinct markdown sections, starting with "## Brief overview". Use bullet points for details, with examples/trigger cases only when applicable.
  2. Guidelines can be task-specific or high-level. Cover coding conventions, design patterns, preferred tech stack, communication style, prompting strategies, naming, testing, comment verbosity, architecture time, and other preferences.
  3. Do NOT invent preferences or make assumptions. Guidelines must be specific to your conversation with the user. Keep guidelines concise.
  4. Do NOT recount the conversation or include arbitrary details.

Usage:
<new_rule>
<path>.clinerules/{file name}.md</path>
<content>Cline rule file content here</content>
</new_rule>

Example:
<new_rule>
<path>.clinerules/project-preferences.md</path>
<content>
## Brief overview
  [Brief description of the rules, including if this set of guidelines is project-specific or global]

## Communication style
  - [Description, rule, preference, instruction]
  - [...]

## Development workflow
  - [Description, rule, preference, instruction]
  - [...]

## Coding best practices
  - [Description, rule, preference, instruction]
  - [...]

## Project context
  - [Description, rule, preference, instruction]
  - [...]

## Other guidelines
  - [Description, rule, preference, instruction]
  - [...]
</content>
</new_rule>

Below is the user's input when they indicated that they wanted to create a new Cline rule file.
</explicit_instructions>\n
`

export const reportBugToolResponse = () =>
	`<explicit_instructions type="report_bug">
The user wants to submit a bug to the Cline GitHub page. You MUST help them using the report_bug tool.
First, gather all required information for the tool. Suggest filling known fields from past conversation, but do NOT assume the issue unless clear.
Converse with the user to get all details, referencing required fields (e.g., "Steps to reproduce"). Then, use the report_bug tool.
The report_bug tool can be used in PLAN or ACT modes.

The report_bug tool call is defined below:

Description:
Fill all required fields for a GitHub issue/bug report. Encourage verbose descriptions from the user. It's acceptable to set fields as "N/A" if details are unknown.

Parameters:
- title: (required) Concise issue description.
- what_happened: (required) What occurred and what was expected.
- steps_to_reproduce: (required) Steps to reproduce the bug.
- api_request_output: (optional) Relevant API request output.
- additional_context: (optional) Any other bug context.

Usage:
<report_bug>
<title>Title of the issue</title>
<what_happened>Description of the issue</what_happened>
<steps_to_reproduce>Steps to reproduce the issue</steps_to_reproduce>
<api_request_output>Output from the LLM API related to the bug</api_request_output>
<additional_context>Other issue details not already covered</additional_context>
</report_bug>

Below is the user's input when they indicated that they wanted to submit a Github issue.
</explicit_instructions>\n
`
