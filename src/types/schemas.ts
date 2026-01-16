/**
 * Tool Parameter Schemas
 * 
 * Zod schemas for validating tool parameters for:
 * - consortium_plan
 * - consortium_code
 * - consortium_review
 */

import { z } from 'zod';

// ============================================================================
// consortium_plan schemas
// ============================================================================

export const PlanToolParamsSchema = z.object({
  task: z.string().min(1, 'Task description is required'),
  context: z.array(z.string()).optional().default([]),
  maxSubtasks: z.number().int().positive().optional().default(10),
});

export type PlanToolParams = z.infer<typeof PlanToolParamsSchema>;

export const SubtaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  acceptanceCriteria: z.array(z.string()),
  estimatedComplexity: z.enum(['low', 'medium', 'high']),
  dependencies: z.array(z.string()).default([]), // IDs of other subtasks
});

export type Subtask = z.infer<typeof SubtaskSchema>;

export const PlanSchema = z.object({
  summary: z.string(),
  subtasks: z.array(SubtaskSchema),
  estimatedDuration: z.string().optional(),
  risks: z.array(z.string()).default([]),
});

export type Plan = z.infer<typeof PlanSchema>;

export const PlanToolResponseSchema = z.object({
  plan: PlanSchema,
  approved: z.boolean().default(false),
  feedback: z.string().optional(),
});

export type PlanToolResponse = z.infer<typeof PlanToolResponseSchema>;

// ============================================================================
// consortium_code schemas
// ============================================================================

export const CodeToolParamsSchema = z.object({
  subtask: SubtaskSchema,
  context: z.array(z.string()).optional().default([]),
  plan: PlanSchema.optional(), // Full plan for context
});

export type CodeToolParams = z.infer<typeof CodeToolParamsSchema>;

export const CodeChangeSchema = z.object({
  file: z.string(),
  type: z.enum(['create', 'modify', 'delete']),
  content: z.string().optional(), // Not needed for delete
  explanation: z.string(),
  line: z.number().int().positive().optional(), // For modify
});

export type CodeChange = z.infer<typeof CodeChangeSchema>;

export const CodeToolResponseSchema = z.object({
  changes: z.array(CodeChangeSchema),
  summary: z.string(),
  testingNotes: z.string().optional(),
});

export type CodeToolResponse = z.infer<typeof CodeToolResponseSchema>;

// ============================================================================
// consortium_review schemas
// ============================================================================

export const ReviewToolParamsSchema = z.object({
  changes: z.array(CodeChangeSchema),
  subtask: SubtaskSchema,
  acceptanceCriteria: z.array(z.string()),
});

export type ReviewToolParams = z.infer<typeof ReviewToolParamsSchema>;

export const ReviewIssueSchema = z.object({
  severity: z.enum(['critical', 'major', 'minor']),
  file: z.string(),
  line: z.number().int().positive().optional(),
  description: z.string(),
  suggestion: z.string().optional(),
});

export type ReviewIssue = z.infer<typeof ReviewIssueSchema>;

export const ReviewToolResponseSchema = z.object({
  decision: z.enum(['approve', 'request_changes']),
  issues: z.array(ReviewIssueSchema).default([]),
  summary: z.string(),
  meetsAcceptanceCriteria: z.boolean(),
});

export type ReviewToolResponse = z.infer<typeof ReviewToolResponseSchema>;
