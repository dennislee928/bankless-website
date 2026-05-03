# Robot Framework devplan — bankless-website

Tests live under `TEST/tests/` and target **positive** (happy path) and **negative** (failure / absence) scenarios across layers.

## Scope matrix

| Layer | Suite | Positive examples | Negative examples |
|--------|--------|-------------------|-------------------|
| **FE** (HTTP acceptance of rendered routes) | `tests/fe/http_home.robot` | GET `/` returns 200 and HTML | GET bogus path returns 404 |
| **BE** (Pages Router API routes) | `tests/be/api_negotiation.robot` | Markdown/HTML negotiation on `/api/test-negotiation` | Missing API route returns 404 |
| **INFRA** (repo + CI invariants) | `tests/infra/repository_layout.robot` | Critical files exist (`package.json`, `next.config.js`) | — |
| **CONTAINER** | `tests/container/docker_optional.robot` | Skipped when no `Dockerfile` (documented) | — |

## Execution

- **Local (against running Next.js):**  
  `BASE_URL=http://localhost:3000 pip install -r TEST/requirements.txt && robot --outputdir TEST/results TEST/tests`
- **CI:** `.github/workflows/robot-framework.yml` builds and starts the app, then runs Robot against `http://localhost:3000`.

## Future extensions

- **FE browser:** Add `robotframework-browser` + Playwright for true UI flows (parallel job).
- **BE:** Extend with authenticated `/functions/api/*` once secrets are available in CI.
- **API2:2019 Broken User Authentication**: Skipped for now as the application does not have user authentication.
- **API3:2019 Excessive Data Exposure**: Skipped for now as there are no obvious cases of excessive data exposure.
- **API6:2019 Mass Assignment**: Skipped for now as the API is read-only.
- **CONTAINER:** When a `Dockerfile` is added, replace skip with image build + smoke `curl`.

