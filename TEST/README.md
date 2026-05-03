# Robot Framework tests

Install Python 3.10+ and dependencies (recommended: virtualenv on macOS/Homebrew Python):

```bash
python3 -m venv .venv-robot
source .venv-robot/bin/activate
pip install -r TEST/requirements.txt
```

Start the Next.js app (`yarn dev` or `yarn build && yarn start`), then:

```bash
BASE_URL=http://localhost:3000 robot --outputdir TEST/results TEST/tests
```

Artifacts (`log.html`, `report.html`, `output.xml`) are written to `TEST/results/` — see `TEST/.gitignore`.

See **`devplan.md`** for the FE / BE / INFRA / CONTAINER matrix and negative-test intent.
