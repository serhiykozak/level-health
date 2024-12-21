#!/bin/bash

# Script to set up and deploy a React website to GitHub Pages

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to display error messages
error() {
    echo "Error: $1" >&2
    exit 1
}

# Check for required commands
echo "Checking prerequisites..."
command_exists node || error "Node.js is not installed"
command_exists npm || error "npm is not installed"
command_exists git || error "git is not installed"

# Get user input
read -p "Enter your GitHub username: " github_username
read -p "Enter the repository name: " repo_name
read -p "Enter your email for Git config: " git_email

# Configure Git
echo "Configuring Git..."
git config --global user.email "$git_email"

# Create React app and install dependencies
echo "Creating React app..."
npx create-react-app "$repo_name"
cd "$repo_name" || error "Failed to create project directory"

# Install required dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps lucide-react @tailwindcss/forms tailwindcss postcss autoprefixer gh-pages

# Initialize Tailwind CSS
echo "Setting up Tailwind CSS..."
npx tailwindcss init -p

# Create/update configuration files
echo "Creating configuration files..."

# Update tailwind.config.js
cat > tailwind.config.js << EOL
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
EOL

# Update index.css
cat > src/index.css << EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Create reportWebVitals.js
cat > src/reportWebVitals.js << EOL
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
EOL

# Update package.json
npm pkg set homepage="https://$github_username.github.io/$repo_name"

# Initialize Git repository
echo "Initializing Git repository..."
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
echo "Creating GitHub repository..."
echo "Please create a new repository named '$repo_name' on GitHub"
echo "Visit: https://github.com/new"
read -p "Press Enter after creating the repository..."

# Add remote and push
echo "Pushing to GitHub..."
git remote add origin "https://github.com/$github_username/$repo_name.git"
git branch -M main
echo "Please enter your GitHub Personal Access Token:"
read -s github_token
git remote set-url origin "https://$github_username:$github_token@github.com/$github_username/$repo_name.git"
git push -u origin main

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Setup complete! Your website will be available at: https://$github_username.github.io/$repo_name/"
echo "Note: It might take a few minutes for the site to become available."
echo "Don't forget to:"
echo "1. Configure GitHub Pages in your repository settings"
echo "2. Select 'gh-pages' branch as the source"
echo "3. Replace the contents of src/App.js with your website code"

