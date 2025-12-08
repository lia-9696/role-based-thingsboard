# Navigate to project folder
cd C:\Users\ABC\role-based-thingsboard

# Remove old modules and lock file
if (Test-Path node_modules) { rm -r node_modules }
if (Test-Path package-lock.json) { rm package-lock.json }

# Clean npm cache
npm cache clean --force

# Install correct react-scripts locally
npm install react-scripts@5.0.1 --save

# Install all other dependencies
npm install

# Install ESLint locally to avoid conflicts
npm install --save-dev eslint eslint-config-react-app

# Start the development server
npx react-scripts start
