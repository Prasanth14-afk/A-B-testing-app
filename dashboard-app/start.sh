#!/bin/bash

# Cookie Cats Dashboard - Quick Start Script
# This script will set up and launch your dashboard

echo "🍪 Cookie Cats A/B Testing Dashboard - Quick Start"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Navigate to dashboard directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies (this may take a few minutes)..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "Dashboard will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""
echo "=================================================="
echo ""

# Start the dev server
npm run dev
