#!/bin/bash

echo "🔍 Running pre-commit checks..."

# Run TypeScript type checking
echo "📝 Checking TypeScript types..."
npm run type-check
if [ $? -ne 0 ]; then
  echo "❌ TypeScript type check failed"
  exit 1
fi

# Run ESLint
echo "🔧 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ ESLint check failed"
  exit 1
fi

# Run build test
echo "🏗️ Testing production build..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

echo "✅ All checks passed! Ready to commit."
