#!/bin/bash

echo "🚀 Setting up Cookie Cats A/B Testing Dashboard..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo ""
    echo "   npm run dev       # Start development server"
    echo "   npm run build     # Build for production"
    echo "   npm start         # Start production server"
    echo ""
    echo "🌐 Dashboard will be available at: http://localhost:3000"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
