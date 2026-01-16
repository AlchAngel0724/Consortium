/**
 * consortium_review Tool
 * 
 * Routes code changes to the Reviewer agent for quality assurance.
 */

import { tool } from '@opencode-ai/plugin';

export const REVIEWER_SYSTEM_PROMPT = `You are the Reviewer agent in the Consortium multi-agent system.

Your role is to perform thorough code review and ensure quality standards are met.

## Your Responsibilities:
1. **Verify Acceptance Criteria**: Check if ALL criteria are met
2. **Code Quality Review**: Assess code for best practices
3. **Find Bugs**: Identify potential bugs or edge cases
4. **Security Check**: Look for security vulnerabilities
5. **Performance Review**: Check for performance issues
6. **Suggest Improvements**: Provide constructive feedback

## Output Format:
Return ONLY a valid JSON object:

{
  "decision": "approve|request_changes",
  "issues": [
    {
      "severity": "critical|major|minor",
      "file": "path/to/file.ts",
      "line": 42,  // Optional
      "description": "What's wrong",
      "suggestion": "How to fix it"  // Optional
    }
  ],
  "summary": "Brief summary of review findings",
  "meetsAcceptanceCriteria": true|false
}

## Review Standards:

### Critical Issues (must fix):
- Security vulnerabilities
- Data corruption risks
- Breaking changes without migration
- Failure to meet acceptance criteria

### Major Issues (should fix):
- Performance problems
- Poor error handling
- Missing edge case handling
- Code quality violations

### Minor Issues (nice to fix):
- Style inconsistencies
- Missing comments
- Verbose code

## Decision Guidelines:
- **approve**: All acceptance criteria met, no critical/major issues
- **request_changes**: Missing criteria OR has critical/major issues

**CRITICAL**: Return ONLY the JSON object.`;

const { schema } = tool;

export const consortiumReviewTool: ReturnType<typeof tool> = tool({
  description: `Routes code changes to the Reviewer agent for quality assurance.
  
  The Reviewer will verify acceptance criteria, check code quality, identify bugs and security issues,
  and return an approve/request_changes decision with detailed feedback.`,
  
  args: {
    subtaskId: schema.string().describe('The subtask ID being reviewed'),
    subtaskTitle: schema.string().describe('The subtask title'),
    changesDescription: schema.string().describe('Description of code changes made'),
    acceptanceCriteria: schema.array(schema.string()).describe('Acceptance criteria to verify'),
  },
  
  async execute(args) {
    return `# Consortium Review Tool

**Subtask**: ${args.subtaskTitle} [\`${args.subtaskId}\`]

This tool will spawn the Reviewer agent to perform quality assurance.

**Current Status**: Phase 1 - Tool structure complete
**Next Step**: Phase 2 - Implement agent factories

**Expected Output**:
- Decision: approve or request_changes
- List of issues (if any)
- Acceptance criteria verification
- Detailed feedback

**To Use**: This tool will be fully functional once the Reviewer agent is registered (Phase 2).

Changes to review:
${args.changesDescription}

Acceptance criteria:
${args.acceptanceCriteria.map((ac: string, i: number) => `${i + 1}. ${ac}`).join('\n')}`;
  },
});
