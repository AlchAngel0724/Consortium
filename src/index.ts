/**
 * Consortium - Multi-Agent AI System for Automated Software Development
 * 
 * OpenCode Plugin that provides three specialized agents:
 * - Project Manager: Task decomposition and planning
 * - Coder: Implementation specialist
 * - Reviewer: Quality assurance and validation
 * 
 * Activate max-performance mode by including "consortium" in your message.
 */

import type { Plugin } from '@opencode-ai/plugin';
import { consortiumPlanTool } from './tools/plan';
import { consortiumCodeTool } from './tools/code';
import { consortiumReviewTool } from './tools/review';

/**
 * Consortium Plugin
 * 
 * Provides tools and agents for multi-agent software development workflow.
 */
const ConsortiumPlugin: Plugin = async () => {
  // TODO: Phase 2 - Implement agent factories
  // - createProjectManagerAgent(): Returns AgentConfig for PM (uses Claude Opus)
  // - createCoderAgent(): Returns AgentConfig for Coder (uses OpenAI Codex)
  // - createReviewerAgent(): Returns AgentConfig for Reviewer (uses Gemini)
  
  // TODO: Phase 3 - Implement keyword detection hook
  // - Detect "consortium" keyword in user messages
  // - Inject max-performance prompt
  // - Remove iteration limits
  
  return {
    // Custom tools (Phase 1) ✅
    tool: {
      consortium_plan: consortiumPlanTool,
      consortium_code: consortiumCodeTool,
      consortium_review: consortiumReviewTool,
    },
    
    // Agent factories (Phase 2) - Coming next
    agent: {
      // 'consortium-pm': createProjectManagerAgent(),
      // 'consortium-coder': createCoderAgent(),
      // 'consortium-reviewer': createReviewerAgent(),
    },
    
    // Keyword detection hook (Phase 3) - Coming later
    // 'tool.execute.before': async (input, output) => {
    //   // TODO: Implement keyword detector
    //   // const message = input.args?.message || '';
    //   // const pattern = /\b(consortium)\b/i;
    //   // 
    //   // if (pattern.test(message)) {
    //   //   output.message += MAX_PERFORMANCE_PROMPT;
    //   //   output.maxIterations = Infinity;
    //   // }
    // },
  };
};

export default ConsortiumPlugin;

// Type exports for external use
export type {
  PlanToolParams,
  Plan,
  Subtask,
  PlanToolResponse,
  CodeToolParams,
  CodeChange,
  CodeToolResponse,
  ReviewToolParams,
  ReviewIssue,
  ReviewToolResponse,
} from './types/schemas';
