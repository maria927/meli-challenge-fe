# Angular Marketplace

This is an Angular 16.2.12 marketplace application that displays product details with routing support.

## Features

- **Dynamic Routing**: Navigate to products using URL parameters (`/product/:id`)
- **API Integration**: Fetches product data from backend API with fallback to mock data
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays error messages with retry functionality
- **Related Products**: Click on related products to navigate to them

## API Integration

The application is configured to call a backend API with the following endpoint:

### Get Product by ID
```
GET /api/products/{id}
```

Expected response format:
```json
[{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": {
    "currency": "string",
    "amount": number,
    "decimals": number
  },
  "discount": number,
  "pictures": ["string"],
  "condition": "string",
  "soldQuantity": number,
  "stock": number,
  "rating": number,
  "reviewCount": number,
  "installments": {
    "count": number,
    "amount": number,
    "currency": "string",
    "interestFree": boolean
  },
  "paymentMethods": {
    "credit": ["string"],
    "debit": ["string"],
    "cash": ["string"]
  },
  "seller": {
    "id": "string",
    "name": "string",
    "reputation": "string",
    "salesCount": number,
    "location": "string"
  },
  "characteristics": ["string"],
  "specifications": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "shipping": {
    "freeShipping": boolean,
    "estimatedDelivery": "string"
  }
}]
```

## Configuration

1. **Update API URL**: Edit the `apiUrl` in `src/app/services/product.service.ts`
2. **Environment Configuration**: You can create environment files for different API URLs

## Usage

1. **Navigate by URL**: Go to `/product/[your-product-id]` in the browser. You can test with the following ids: "ML1", "ML2"
2. **Default Route**: The app redirects to `/product/ML1` by default
3. **Related Products**: Click on any related product to navigate to it
4. **Error Handling**: If the API fails, the app shows an error message

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).