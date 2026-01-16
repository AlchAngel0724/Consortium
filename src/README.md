# Consortium Source Code

This directory contains the core Consortium implementation.

## Structure

```
src/
├── index.ts              # Main entry point
├── shared/               # Shared utilities
│   ├── logger.ts         # Logging utility
│   ├── data-path.ts      # XDG path helpers
│   └── jsonc-parser.ts   # JSONC parsing
├── types/                # TypeScript type definitions
│   └── messages.ts       # Message protocol types
├── config/               # Configuration (Phase 8)
├── orchestrator/         # Core orchestrator (Phase 1-2)
├── providers/            # AI model providers (Phase 2)
├── agents/               # Agent implementations (Phase 3-5)
└── cli/                  # CLI commands (Phase 7)
```

## Development

See `/planning/05-implementation-roadmap.md` for the development plan.
