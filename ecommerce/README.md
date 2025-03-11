# ShoppyGlobe E-commerce Application

A modern, feature-rich e-commerce application built with React, Redux, and JavaScript.


## Features

- 🛍️ Browse products with dynamic search
- 🔍 Detailed product views
- 🛒 Shopping cart management
- 💫 Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Performance optimized with code splitting

## Tech Stack

- **Frontend Framework**: React 18 with JavaScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: DummyJSON Products API

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/harshu-789/shoppy-globe.git
cd shoppy-globe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   └── ProductList.jsx
├──              # Route components
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
├── store/             # Redux store configuration
│   ├── index.js
│   └── cartSlice.js
├── hooks/             # Custom React hooks
│   └── useProducts.js
└── App.jsx            # Root component
```

## Key Features

### Product Browsing
- Grid layout for products
- Search functionality
- Product details view
- Rating display
- Price information

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Total calculation
- Persistent cart state
- Cart item count in header

### User Interface
- Loading states
- Error handling
- Responsive design
- Smooth transitions
- Clear navigation

## Performance Optimizations

- Code splitting with React.lazy
- Component lazy loading
- Redux state optimization
- Image optimization

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build


### Code Quality


- React best practices enforcement
- Consistent code style


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Product data provided by [DummyJSON](https://dummyjson.com)
- Icons by [Lucide](https://lucide.dev)
- UI components styled with [Tailwind CSS](https://tailwindcss.com)

- Github: 