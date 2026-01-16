/**
 * Tests for tool parameter schemas
 */

import { describe, it, expect } from 'vitest';
import {
  PlanToolParamsSchema,
  SubtaskSchema,
  PlanSchema,
  PlanToolResponseSchema,
  CodeToolParamsSchema,
  CodeChangeSchema,
  CodeToolResponseSchema,
  ReviewToolParamsSchema,
  ReviewIssueSchema,
  ReviewToolResponseSchema,
} from '../src/types/schemas';

describe('PlanToolParamsSchema', () => {
  it('should validate valid plan params', () => {
    const valid = {
      task: 'Add dark mode to application',
      context: ['src/theme.ts', 'src/App.tsx'],
      maxSubtasks: 5,
    };
    
    expect(() => PlanToolParamsSchema.parse(valid)).not.toThrow();
  });
  
  it('should validate minimal plan params', () => {
    const minimal = { task: 'Simple task' };
    const result = PlanToolParamsSchema.parse(minimal);
    
    expect(result.context).toEqual([]);
    expect(result.maxSubtasks).toBe(10);
  });
  
  it('should reject empty task', () => {
    const invalid = { task: '' };
    
    expect(() => PlanToolParamsSchema.parse(invalid)).toThrow();
  });
});

describe('SubtaskSchema', () => {
  it('should validate valid subtask', () => {
    const valid = {
      id: 'task-1',
      title: 'Create theme provider',
      description: 'Implement ThemeProvider component with dark/light modes',
      acceptanceCriteria: ['Component renders children', 'Provides theme context'],
      estimatedComplexity: 'medium' as const,
      dependencies: [],
    };
    
    expect(() => SubtaskSchema.parse(valid)).not.toThrow();
  });
  
  it('should set default dependencies to empty array', () => {
    const subtask = {
      id: 'task-1',
      title: 'Test',
      description: 'Desc',
      acceptanceCriteria: ['Criterion'],
      estimatedComplexity: 'low' as const,
    };
    
    const result = SubtaskSchema.parse(subtask);
    expect(result.dependencies).toEqual([]);
  });
});

describe('PlanSchema', () => {
  it('should validate valid plan', () => {
    const valid = {
      summary: 'Add dark mode support',
      subtasks: [
        {
          id: 'task-1',
          title: 'Theme provider',
          description: 'Create provider',
          acceptanceCriteria: ['Works'],
          estimatedComplexity: 'low' as const,
          dependencies: [],
        },
      ],
      estimatedDuration: '2 hours',
      risks: ['Browser compatibility'],
    };
    
    expect(() => PlanSchema.parse(valid)).not.toThrow();
  });
});

describe('CodeChangeSchema', () => {
  it('should validate create operation', () => {
    const valid = {
      file: 'src/components/ThemeProvider.tsx',
      type: 'create' as const,
      content: 'export const ThemeProvider = ...',
      explanation: 'Created theme provider component',
    };
    
    expect(() => CodeChangeSchema.parse(valid)).not.toThrow();
  });
  
  it('should validate delete operation without content', () => {
    const valid = {
      file: 'src/old-theme.ts',
      type: 'delete' as const,
      explanation: 'Removed deprecated theme file',
    };
    
    expect(() => CodeChangeSchema.parse(valid)).not.toThrow();
  });
  
  it('should validate modify operation with line number', () => {
    const valid = {
      file: 'src/App.tsx',
      type: 'modify' as const,
      content: 'Updated import',
      explanation: 'Added theme import',
      line: 5,
    };
    
    expect(() => CodeChangeSchema.parse(valid)).not.toThrow();
  });
});

describe('ReviewIssueSchema', () => {
  it('should validate critical issue', () => {
    const valid = {
      severity: 'critical' as const,
      file: 'src/api.ts',
      line: 42,
      description: 'SQL injection vulnerability',
      suggestion: 'Use parameterized queries',
    };
    
    expect(() => ReviewIssueSchema.parse(valid)).not.toThrow();
  });
  
  it('should validate issue without line or suggestion', () => {
    const valid = {
      severity: 'minor' as const,
      file: 'src/utils.ts',
      description: 'Missing JSDoc comment',
    };
    
    expect(() => ReviewIssueSchema.parse(valid)).not.toThrow();
  });
});

describe('ReviewToolResponseSchema', () => {
  it('should validate approval with no issues', () => {
    const valid = {
      decision: 'approve' as const,
      issues: [],
      summary: 'All acceptance criteria met',
      meetsAcceptanceCriteria: true,
    };
    
    expect(() => ReviewToolResponseSchema.parse(valid)).not.toThrow();
  });
  
  it('should validate request_changes with issues', () => {
    const valid = {
      decision: 'request_changes' as const,
      issues: [
        {
          severity: 'major' as const,
          file: 'src/main.ts',
          description: 'Missing error handling',
        },
      ],
      summary: 'Found major issues',
      meetsAcceptanceCriteria: false,
    };
    
    expect(() => ReviewToolResponseSchema.parse(valid)).not.toThrow();
  });
});
