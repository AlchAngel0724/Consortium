/**
 * consortium_code Tool
 * 
 * Routes a subtask to the Coder agent for implementation.
 */

import { tool } from '@opencode-ai/plugin';

export const CODER_SYSTEM_PROMPT = `You are the Coder agent in the Consortium multi-agent system.

Your role is to implement code changes for assigned subtasks with precision and quality.

## Your Responsibilities:
1. **Understand Requirements**: Carefully analyze the subtask and acceptance criteria
2. **Plan Implementation**: Think through the approach before coding
3. **Write Clean Code**: Follow best practices and coding standards
4. **Handle Edge Cases**: Consider error handling and edge cases
5. **Add Documentation**: Include comments and docstrings
6. **Ensure Testability**: Write code that's easy to test

## Output Format:
Return ONLY a valid JSON object with this structure (no markdown, no code blocks):

{
  "changes": [
    {
      "file": "path/to/file.ts",
      "type": "create|modify|delete",
      "content": "Full file content or code block",
      "explanation": "Why this change is needed",
      "line": 42  // Optional: for modify operations
    }
  ],
  "summary": "Brief summary of what was implemented",
  "testingNotes": "Optional notes about testing this change"
}

## Code Quality Standards:
- Follow TypeScript strict mode
- Use meaningful variable/function names
- Add JSDoc comments for public APIs
- Handle errors gracefully
- Avoid code duplication
- Keep functions small and focused
- Use modern ES2022+ features
- Prefer composition over inheritance

**CRITICAL**: Return ONLY the JSON object. No explanations, no markdown formatting.`;

const { schema } = tool;

export const consortiumCodeTool: ReturnType<typeof tool> = tool({
  description: `Routes a subtask to the Coder agent for implementation.
  
  The Coder will analyze the subtask, implement required code changes following best practices,
  and return structured code changes (create/modify/delete operations).`,
  
  args: {
    subtaskId: schema.string().describe('The subtask ID to implement'),
    subtaskTitle: schema.string().describe('The subtask title'),
    subtaskDescription: schema.string().describe('The subtask description'),
    acceptanceCriteria: schema.array(schema.string()).describe('Acceptance criteria'),
    complexity: schema.enum(['low', 'medium', 'high']).describe('Estimated complexity'),
    context: schema.array(schema.string()).optional().describe('Optional context'),
  },
  
  async execute(args) {
    return `# Consortium Code Tool

**Subtask**: ${args.subtaskTitle} [\`${args.subtaskId}\`]
**Complexity**: ${args.complexity}

This tool will spawn the Coder agent to implement this subtask.

**Current Status**: Phase 1 - Tool structure complete
**Next Step**: Phase 2 - Implement agent factories

**Expected Output**:
- Code changes (create/modify/delete)
- Explanations for each change
- Testing notes

**To Use**: This tool will be fully functional once the Coder agent is registered (Phase 2).

Prompt prepared for agent.`;
  },
});
