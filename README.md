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
```bash
git clone <repository-url>
cd tatami-react-example
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

- `/src/types/tatami.d.ts` - TypeScript definitions for Tatami Canvas API
- `/src/components/` - React components for brush controls
- `/src/App.tsx` - Main application component
- `/docs/` - Tatami Canvas API documentation

## Usage

The example demonstrates:

```typescript
// Initialize Tatami Canvas
useEffect(() => {
  window.tatami.api.initCommands()
}, [])

// Use Tatami Canvas in JSX
<tatami-canvas
  paper-width="1024"
  paper-height="1024"
  paper-color="#ffffff"
></tatami-canvas>
```

## Available Controls

- **Brush Size**: Slider to control brush size using Tatami attributes
- **Color Picker**: Color input to change brush color using Tatami API

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tatami Canvas](https://tatami.art/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
