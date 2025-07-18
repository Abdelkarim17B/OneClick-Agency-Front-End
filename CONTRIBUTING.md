# Contributing to OneClick Agency Frontend

Thank you for your interest in contributing to this project! 🎉

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/Abdelkarim17B/OneClick-Agency-Front-End.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

## Development Workflow

### Branch Naming Convention
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring

### Commit Messages
We follow conventional commits:
- `feat: add new parallax animation`
- `fix: resolve mobile responsiveness issue`
- `docs: update README with new instructions`
- `style: improve button hover effects`

### Code Style
- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Use Tailwind CSS for styling
- Keep components small and focused
- Add meaningful comments for complex logic

### Testing
- Run `npm run lint` to check code style
- Run `npm run type-check` to verify TypeScript
- Test your changes across different screen sizes
- Verify parallax animations work smoothly

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with clear, focused commits
3. Update documentation if needed
4. Run all checks: `npm run lint && npm run type-check`
5. Create a pull request with:
   - Clear title and description
   - Screenshots/videos if visual changes
   - Reference any related issues

## Areas for Contribution

### High Priority
- **Mobile Responsiveness**: Improve mobile experience
- **Portfolio Section**: Add previous works showcase
- **Performance**: Optimize animations for slower devices
- **Accessibility**: Add ARIA labels and keyboard navigation

### Medium Priority
- **SEO**: Meta tags and structured data
- **Animation Polish**: Smooth out edge cases
- **Code Splitting**: Implement lazy loading
- **Error Boundaries**: Better error handling

### Nice to Have
- **Dark Mode**: Theme switching capability
- **Internationalization**: Multi-language support
- **Analytics**: Usage tracking integration
- **PWA**: Progressive web app features

## Development Tips

### Responsive Design
This project uses a unique zoom-responsive approach. Instead of traditional breakpoints, we detect zoom levels:
```typescript
const getResponsiveSize = () => {
  if (zoom <= 0.67) return 'text-[2rem]';
  if (zoom <= 0.90) return 'text-[1.8rem]';
  // ... etc
};
```

### Parallax Animations
We use `@react-spring/parallax` for smooth scrolling. Key principles:
- Keep layer counts reasonable (we use 5 layers)
- Use `sticky` props for consistent positioning
- Test on different devices for performance

### Component Structure
```
ComponentName/
├── ComponentName.tsx     # Main component
├── SubComponent.tsx      # Related sub-components
└── index.ts             # Export barrel
```

## Questions?

Feel free to open an issue for:
- Feature requests
- Bug reports
- Questions about the codebase
- Suggestions for improvements

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Keep discussions focused and professional

Happy coding! 🚀
