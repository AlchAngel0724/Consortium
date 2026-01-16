/**
 * Message type definitions
 * From planning/03-communication-protocol.md
 */

export type AgentType = 'projectManager' | 'coder' | 'reviewer';

export type MessageType =
  | 'user_request'
  | 'plan_request'
  | 'plan_response'
  | 'subtask_assignment'
  | 'subtask_completion'
  | 'review_request'
  | 'review_response'
  | 'user_approval'
  | 'error'
  | 'status_update';

export interface Message {
  id: string;              // UUID
  timestamp: string;       // ISO 8601
  sessionId: string;
  type: MessageType;
  from: AgentType | 'user' | 'orchestrator';
  to: AgentType | 'user' | 'orchestrator';
  payload: unknown;
  parentId?: string;
}
