
# Car LoanHub - Italian Auto Finance Application

## Overview

Car LoanHub is a comprehensive web application designed to streamline the car financing process for Italian customers. The application guides users through a seamless journey from application to approval, providing competitive loan offers from leading Italian banks.

## Features

- **User-friendly Application Process**: Simple step-by-step flow from customer details to offer selection
- **Finance Calculator**: Interactive tool to calculate loan terms based on car price, down payment, income, and preferred term
- **Multiple Offer Comparison**: Compare offers from top Italian banks including Santander, UniCredit, and BNP Paribas
- **SPID Integration**: Secure authentication using Italy's digital identity system
- **Responsive Design**: Optimized experience across all device sizes

## Technology Stack

This project is built with modern web technologies:

- **React**: Front-end library for building the user interface
- **TypeScript**: Type-safe JavaScript for improved development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For handling navigation between pages
- **React Query**: For efficient data fetching and state management
- **Shadcn UI**: Component library for consistent design elements

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd car-loanhub

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:8080

## Project Structure

```
car-loanhub/
├── public/           # Static assets including bank logos
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   └── App.tsx       # Main application component
└── README.md         # Project documentation
```

## Application Flow

1. **Homepage**: Introduction to the service
2. **Customer Details**: Collect personal information with SPID verification
3. **Finance Calculator**: Configure loan parameters
4. **Offers**: Compare loan offers from different banks
5. **Terms and Conditions**: Review and accept loan agreement
6. **Success**: Confirmation of application submission

## Deployment

The application can be deployed to any static hosting service:

```bash
# Build the application
npm run build

# The build output will be in the 'dist' directory
# Deploy these files to your hosting service
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
