#!/bin/bash

# Deployment script for GitHub Pages
# This script builds the project and prepares it for GitHub Pages deployment

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Create .nojekyll file to prevent Jekyll processing
echo "📝 Creating .nojekyll file..."
touch out/.nojekyll

# Add all files to git
echo "📁 Adding files to git..."
git add out/

# Commit the changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git subtree push --prefix out origin gh-pages

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://joebaarath.github.io"


