# ExecPlans

When implementing complex features or large refactors for the GeorgeMato luxury real estate site, create and follow an ExecPlan. ExecPlans are living design documents defined in `.agent/PLANS.md`. They guide you from high‑level purpose to concrete steps, ensuring that even a novice developer or a stateless agent can execute the work from start to finish.

To create a new plan, add a markdown file under `.agent/execplans/<feature-name>.md`. Use the specification in `PLANS.md` to structure your plan. Fill out all sections, including Purpose, Progress, Surprises & Discoveries, Decision Log, Outcomes & Retrospective, Context, Plan of Work, Concrete Steps, Validation and Acceptance Criteria, Idempotence, Artifacts, and Interfaces.

During implementation, update the Progress checklist and Decision Log as you complete tasks. Capture any surprises or important decisions. Once the feature is complete, summarize the outcomes and update the retrospective.

ExecPlans enable persistence and transparency when collaborating with Codex or other agents in VS Code. They ensure long-running tasks remain organized and reproducible.
