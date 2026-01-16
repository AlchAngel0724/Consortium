# Consortium

> **Multi-Agent AI System for Automated Software Development**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-in%20development-orange)](https://github.com/AlchAngel0724/Consortium)

---

## Overview

**Consortium** is an intelligent multi-agent system that orchestrates specialized AI agents to automate software development workflows. It coordinates three distinct agents—Project Manager, Coder, and Reviewer—to handle task planning, implementation, and quality assurance with minimal human intervention.

### Key Features

- **🤖 Multi-Agent Orchestration** - Three specialized AI agents working in harmony
- **🎯 Smart Task Decomposition** - Automatically breaks complex requests into manageable subtasks
- **✅ Quality Assurance** - Built-in code review and verification before completion
- **🔄 Iterative Refinement** - Coder and Reviewer collaborate until quality standards are met
- **⚡ Magic Keyword Mode** - Type `consortium` to activate maximum performance mode
- **💾 Persistent Sessions** - Resume work even after crashes or interruptions

---

## Agents

### Project Manager (Claude Opus)
- Analyzes user requests
- Creates detailed execution plans
- Coordinates workflow between agents
- Makes strategic decisions

### Coder (OpenAI Codex)
- Implements features and fixes
- Writes clean, maintainable code
- Follows project conventions
- Handles edge cases

### Reviewer (Google Gemini)
- Reviews code for quality and correctness
- Verifies acceptance criteria
- Identifies bugs and issues
- Suggests improvements

---

## Status

🚧 **Currently in Development** - Phase 3: Core Implementation

We're building Consortium using a unique approach: we write the core infrastructure manually, then Consortium will build its own advanced features using its own agents!

### Development Roadmap

- [x] **Phase 1**: Research & Architecture (Complete)
- [x] **Phase 2**: Planning & Documentation (Complete)
- [ ] **Phase 3**: Core Development (In Progress)
  - [ ] Foundation & Utilities
  - [ ] Orchestrator & Message Protocol
  - [ ] Model Provider Abstraction
  - [ ] Agent Implementations
  - [ ] CLI Interface
- [ ] **Phase 4**: Advanced Features (Consortium builds itself!)

---

## Installation

> Coming soon! Consortium is not yet ready for installation.

Once released, installation will be:

```bash
npm install -g consortium
consortium init
consortium run "your task here"
```

---

## Magic Keyword: `consortium`

Include the keyword `consortium` in your request to activate maximum performance mode:

```bash
consortium run "consortium: add authentication system with JWT"
```

This enables:
- Unlimited iteration cycles
- Aggressive parallel processing
- Strict verification requirements
- 100% completion guarantee (no shortcuts)

---

## Architecture

Consortium uses a **hub-and-spoke** communication pattern:

```
User → Orchestrator → Project Manager
                ├─→ Coder
                └─→ Reviewer
```

All agents communicate through a central orchestrator, ensuring:
- Clear audit trails
- Centralized state management
- Easy debugging and monitoring

---

## Technology Stack

- **Runtime**: Node.js (migrating to Bun)
- **Language**: TypeScript (strict mode)
- **AI Models**: Claude Opus, OpenAI Codex, Google Gemini
- **CLI**: Commander.js + @clack/prompts
- **Testing**: Bun test
- **Build**: Bun bundler

---

## Contributing

Consortium is currently in early development. Contribution guidelines will be published once we reach v1.0.

For now, watch this space! ⭐

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Inspired by [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode) and built with insights from production multi-agent systems.

---

## Contact

**Project Maintainer**: [AlchAngel0724](https://github.com/AlchAngel0724)

**Repository**: [github.com/AlchAngel0724/Consortium](https://github.com/AlchAngel0724/Consortium)

---

Built with ❤️ by humans and AI working together.
