# Solace Advocates - Project Discussion

## Project Overview

This is a Next.js app built for Solace’s candidate assignment. It lets you browse, search, and filter advocates with a clean interface and real-time data updates.

## Introduction

This project lays the groundwork for a advocates directory built with modern web tech. It's kind of like a organized filing cabinet.

The setup is clean, maintainable, and works well with React Query and Zustand. State is under control, concerns are well separated, and chaos has been (mostly) avoided.

There’s still room for improvement. More tests wouldn’t hurt, server-side pagination would be a nice upgrade, and those lingering any types? Yeah, they know what they are. 🫣

The app shows off:

- Modern React patterns and best practices
- Type-safe development with TypeScript
- Responsive and accessible UI design
- Real-time health monitoring
- Efficient data fetching and caching

With the identified improvements in place, this would be a production-ready application fit for real-world use. You may want to move that Postgres call to an AWS Lambda before taking it big time, unless, of course, your dream is to debug SQL in production logs at 2 a.m. 😂

## Issues to Address

### **1. TypeScript Issues**

- **Two `any` Types**: Need to be replaced with proper types
  - Database query type assertions in API routes
  - Should create proper Drizzle ORM type definitions

### **2. Pagination Architecture**

- **Current**: Client-side pagination
- **Problem**: Doesn't scale well with large datasets
- **Solution**: Move to server-side pagination with cursor-based or offset-based approach

### **3. Testing Coverage**

- **Current**: No tests implemented
- **Recommended**: Playwright for E2E testing
- **Coverage Needed**:
  - Search functionality
  - Filter interactions
  - Pagination behavior
  - Health monitoring
  - API endpoints

## Architecture Decisions

### **Frontend Framework**

**Notes:** I've also updated all packages to their latest versions:

- **Next.js 15**: Chosen for its modern features, App Router, and excellent developer experience
- **React 19**: Latest React version with improved performance and concurrent features
- **TypeScript**: For type safety and better developer experience

### **State Management**

- **Zustand**: Selected over Redux for its simplicity and minimal boilerplate
- **Store Structure**: Split into slices (application, advocates) for better organization
- **Selectors**: Implemented for performance optimization and reusability

### **Styling & UI**

**Notes:** I focused primarily on implementation rather than design, spending most of my time building out the core functionality.

- **Tailwind CSS v4**: Modern utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI for accessibility
- **Responsive Design**: Mobile-first approach with proper breakpoints

### **Data Fetching**

**Notes:** API data is managed exclusively with React Query to avoid duplicating state between React Query and Redux.

- **React Query**: For server state management, caching, and optimistic updates
- **Debounced Search**: 300ms delay to prevent excessive API calls
- **Real-time Updates**: Health status polling every 30 seconds

### **Database & ORM**

- **PostgreSQL**: Robust relational database
- **Drizzle ORM**: Type-safe database queries with excellent TypeScript support
- **Docker Compose**: For local development environment

## Key Features Implemented

### **1. Advocates Directory**

- **Search**: Real-time search across first name, last name, and city
- **Filtering**: By degree type and years of experience
- **Pagination**: Client-side pagination with 5 items per page
- **Responsive Table**: Clean display with specialties as badges

### **2. Health Monitoring**

- **Real-time Status**: Application health monitoring with visual indicators
- **API Endpoint**: `/api/health` for health checks
- **Auto-refresh**: Status updates every 30 seconds

### **3. Filter System**

- **Dropdown Filters**: Degree and experience range selection
- **Active Filter Display**: Visual badges showing applied filters
- **Clear All**: One-click filter reset

### **4. Search Functionality**

- **Debounced Input**: Prevents excessive API calls while typing
- **Multi-field Search**: Searches across name and location fields
- **Combined Filters**: Search works with other filters

## Technical Decisions

### **1. Client-Side Pagination**

- **Current**: All pagination handled in the browser
- **Reasoning**: Simpler implementation for MVP
- **Future**: Should be moved to server-side for better performance

### **2. TypeScript Usage**

- **Strict Typing**: Comprehensive type definitions
- **Enum Usage**: HealthStatus enum for better type safety
- **Interface Definitions**: Clear contracts between components

### **3. Error Handling**

- **Graceful Degradation**: Fallback values for missing data
- **User Feedback**: Clear error messages and loading states
- **Network Resilience**: Proper error handling for API calls

### **4. Performance Optimizations**

- **React Query Caching**: Automatic caching and background updates
- **Debounced Search**: Reduces API calls during typing

## Code Quality & Patterns

### **1. Component Structure**

- **Separation of Concerns**: Each component has a single responsibility
- **Reusable Components**: Table, pagination, filters are modular
- **Props Interface**: Clear contracts between components

### **2. State Management**

- **Slice Pattern**: Organized store with clear boundaries
- **Selector Pattern**: Optimized data access
- **Action Creators**: Centralized state mutations

### **3. API Design**

- **RESTful Endpoints**: Clean URL structure
- **Query Parameters**: Flexible filtering system
- **Error Responses**: Consistent error handling

## Future Improvements

### **1. Performance**

- **Server-side Pagination**: Implement proper pagination API
- **Database Indexing**: Add indexes for search fields
- **Caching Strategy**: Implement Redis for frequently accessed data
- **Image Optimization**: Add advocate profile images with Next.js Image

### **2. User Experience**

- **Loading States**: Skeleton screens for better perceived performance
- **Toast Notifications**: Success/error feedback for user actions
- **Keyboard Navigation**: Full keyboard accessibility
- **Advanced Filters**: Date ranges, location-based filtering

### **3. Developer Experience**

- **Testing Suite**: Comprehensive Playwright E2E tests
- **Storybook**: Component documentation and testing
- **API Documentation**: OpenAPI/Swagger documentation
- **Error Monitoring**: Sentry integration for production

### **4. Production Readiness**

- **Environment Variables**: Proper configuration management
- **Security**: Input validation, rate limiting, CORS
- **Monitoring**: Application performance monitoring
- **Deployment**: CI/CD pipeline with automated testing

## Technical Debt

### **1. Database Schema**

- **Soft Deletes**: Add deleted_at timestamps
- **Audit Trail**: Track changes to advocate records
- **Data Validation**: Add constraints and triggers

### **2. API Design**

- **Versioning**: API versioning strategy
- **Rate Limiting**: Prevent abuse
- **Caching Headers**: Proper HTTP caching

### **3. Frontend Architecture**

- **Error Boundaries**: React error boundaries for better UX
- **Suspense**: React Suspense for loading states
- **Code Splitting**: Lazy load components for better performance
