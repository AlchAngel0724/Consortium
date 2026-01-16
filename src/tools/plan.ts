/**
 * consortium_plan Tool
 * 
 * Routes user task to Project Manager agent for decomposition and planning.
 */

import { tool } from '@opencode-ai/plugin';

export const PM_SYSTEM_PROMPT = `You are the Project Manager agent in the Consortium multi-agent system.

Your role is to decompose user tasks into actionable subtasks with clear acceptance criteria.

## Your Responsibilities:
1. **Understand the Task**: Analyze the user's request thoroughly
2. **Break Down Work**: Create 3-10 concrete, independent subtasks
3. **Define Success**: Specify measurable acceptance criteria for each subtask
4. **Estimate Complexity**: Mark each subtask as low/medium/high complexity
5. **Identify Dependencies**: Note which subtasks depend on others
6. **Assess Risks**: List potential blockers or challenges

## Output Format:
Return ONLY a valid JSON object with this structure (no markdown, no code blocks):

{
  "summary": "Brief overview of the plan",
  "subtasks": [
    {
      "id": "task-1",
      "title": "Short title",
      "description": "Detailed description",
      "acceptanceCriteria": ["Criterion 1", "Criterion 2"],
      "estimatedComplexity": "low|medium|high",
      "dependencies": []
    }
  ],
  "estimatedDuration": "Rough time estimate",
  "risks": ["Risk 1", "Risk 2"]
}

## Best Practices:
- Make subtasks atomic and testable
- Be specific with acceptance criteria (avoid vague statements)
- Consider edge cases and error handling
- Think about testing and documentation
- Balance subtask size (not too big, not too small)
- Identify dependencies to enable parallel work

**CRITICAL**: Return ONLY the JSON object. No explanations, no markdown formatting.`;

const { schema } = tool;

export const consortiumPlanTool: ReturnType<typeof tool> = tool({
  description: `Routes a user task to the Project Manager agent for decomposition and planning.
  
  The PM will analyze the task and create a structured plan with:
  - 3-10 actionable subtasks
  - Clear acceptance criteria for each
  - Complexity estimates
  - Dependency graph
  - Risk assessment
  
  This tool spawns the 'consortium-pm' agent internally.`,
  
  args: {
    task: schema.string().min(1).describe('The user task to decompose (required)'),
    context: schema.array(schema.string()).optional().describe('Optional array of file paths or context snippets'),
    maxSubtasks: schema.number().int().positive().default(10).describe('Maximum number of subtasks (default: 10)'),
  },
  
  async execute(args) {
    // Build prompt for PM agent
    const contextInfo = args.context && args.context.length > 0
      ? `\n\n## Additional Context:\n${args.context.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`
      : '';
    
    const prompt = `${PM_SYSTEM_PROMPT}

## Task to Plan:
${args.task}
${contextInfo}

Maximum subtasks: ${args.maxSubtasks}

Remember: Return ONLY the JSON object, nothing else.`;
    
    try {
      // For now, return a placeholder response
      // In Phase 2, we'll spawn the actual PM agent
      
      return `# Consortium Plan Tool

**Task**: ${args.task}

This tool will spawn the Project Manager agent to create a structured plan.

**Current Status**: Phase 1 - Tool structure complete
**Next Step**: Phase 2 - Implement agent factories

**Expected Output**:
- Structured plan with subtasks
- Acceptance criteria for each subtask
- Complexity estimates
- Risk assessment

**To Use**: This tool will be fully functional once the PM agent is registered (Phase 2).

Prompt prepared:
\`\`\`
${prompt.slice(0, 300)}...
\`\`\``;
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      return `# Error Creating Plan

The Project Manager agent encountered an error.

**Error**: ${errorMessage}

**Suggestions**:
- Simplify the task description
- Add more context about the project
- Try again with a more specific request`;
    }
  },
});
