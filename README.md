# Tatami Canvas - React/TypeScript Example

This project demonstrates how to use Tatami Canvas in a React application with TypeScript support. It showcases basic drawing functionality with brush size and color controls.

## Features

- Full TypeScript support for Tatami Canvas API
- Brush size control using Tatami attributes
- Color picker with real-time brush color updates
- Tailwind CSS for styling
- Vite for fast development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
```bash
yarn
```

3. Start the development server
```bash
yarn dev
```

## Project Structure

- `/src/types/tatami.d.ts` - TypeScript definitions for Tatami Canvas API
- `/src/components/` - React components for brush controls
- `/src/App.tsx` - Main application component

## Usage

The example demonstrates basic usage of Tatami Canvas.

```typescript
<tatami-canvas
  paper-width="1920"
  paper-height="1080"
  paper-color="#ffffff"
></tatami-canvas>
```

## Built With

- [Tatami Canvas](https://tatami.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
