# origin-energy-assessment

## Overview

I focused exclusively on the frontend due to limited time. My priority was to build clean, maintainable, and reusable components—things that could scale well beyond this assessment (e.g., modal handling, form logic, API integration). These shared utilities are placed under the `common` module.

### Code Structure

- Files are organized by domain for clarity and modularity.
- Within each domain, code is grouped by type (components, hooks, services, etc.).

## How to Run the Project

1. **Start the frontend**  
   From the `frontend` directory, run:
   ```bash
   npm run dev
   ```

2. **Mock the backend API**  
   Install JSON Server (if not already installed):
   ```bash
   npm install -g json-server
   ```
   Then, from the project root, start the mock server:
   ```bash
   json-server --watch mock-data.json --port 4000
   ```
