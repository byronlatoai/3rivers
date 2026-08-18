# 3Rivers — Restoration Management Platform (Prototype)

Navigable prototype of the AI-powered restoration management platform built for
**3Rivers General Contracting**, covering **Phase 1 (Intake & Lead Management)**
and **Phase 2 (Estimation & Job Structuring)**.

> **This is a wireframe prototype, not the final design.**
> It exists to define modules, screens, tables, fields, states and rules.
> Visual design, component library and interaction polish are the development
> team's work and are expected to differ from what is shown here.

## Pages

| File | What it is |
|---|---|
| `index.html` | The full platform — one menu, all modules |
| `dashboard.html` | The dashboard on its own |

## Running it

It must be served over HTTP — the runtime loads its own template with `fetch()`,
which browsers block on `file://`.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Static site, no build step. Vercel serves it from the repository root as-is.

## Scope

Phases 3, 4 and 5 appear in the menu and are intentionally not switched on.
They are shown so the full shape of the platform is visible from the start.

---
LATO AI · Project Management
