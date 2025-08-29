# AI Prompt Engineering Interface

A modern, responsive web application for AI prompt engineering with a Material Design 3-inspired design system.

## 🎨 Design System

This application implements a comprehensive design system based on Material Design 3 principles with modern aesthetics and enhanced user experience.

### Color Palette

#### Primary Colors
- **Primary 50**: `#eff6ff` - Lightest primary background
- **Primary 100**: `#dbeafe` - Light primary background
- **Primary 500**: `#3b82f6` - Main primary color
- **Primary 600**: `#2563eb` - Primary hover state
- **Primary 700**: `#1d4ed8` - Primary active state
- **Primary 900**: `#1e3a8a` - Darkest primary

#### Secondary Colors (Slate Gray Scale)
- **Secondary 50**: `#f8fafc` - Lightest background
- **Secondary 100**: `#f1f5f9` - Light background
- **Secondary 200**: `#e2e8f0` - Border color
- **Secondary 300**: `#cbd5e1` - Input border
- **Secondary 400**: `#94a3b8` - Placeholder text
- **Secondary 500**: `#64748b` - Secondary text
- **Secondary 600**: `#475569` - Medium text
- **Secondary 700**: `#334155` - Dark text
- **Secondary 800**: `#1e293b` - Very dark text
- **Secondary 900**: `#0f172a` - Primary text

#### Accent Colors
- **Accent 500**: `#f59e0b` - Amber accent
- **Accent 600**: `#d97706` - Amber hover

#### Semantic Colors
- **Success 500**: `#10b981` - Success states
- **Success 600**: `#059669` - Success hover
- **Error 500**: `#ef4444` - Error states
- **Error 600**: `#dc2626` - Error hover
- **Warning 500**: `#f59e0b` - Warning states
- **Warning 600**: `#d97706` - Warning hover

### Typography

#### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif

#### Font Sizes
- **XS**: 12px - Small labels, captions
- **SM**: 14px - Body text, buttons
- **Base**: 16px - Main content, inputs
- **LG**: 18px - Section headers
- **XL**: 20px - Modal headers
- **2XL**: 24px - Page titles
- **3XL**: 32px - Hero text

#### Font Weights
- **Normal**: 400 - Regular text
- **Medium**: 500 - Buttons, labels
- **Semibold**: 600 - Headers, emphasis
- **Bold**: 700 - Strong emphasis

#### Line Heights
- **Tight**: 1.2 - Headers
- **Normal**: 1.4 - Subheaders
- **Relaxed**: 1.6 - Body text

### Spacing System

Based on 4px grid system:
- **1**: 4px - Minimal spacing
- **2**: 8px - Small spacing
- **3**: 12px - Medium spacing
- **4**: 16px - Standard spacing
- **5**: 20px - Large spacing
- **6**: 24px - Extra large spacing
- **8**: 32px - Section spacing
- **12**: 48px - Hero spacing

### Border Radius

- **SM**: 4px - Small elements
- **MD**: 6px - Buttons, inputs
- **LG**: 8px - Cards, containers
- **XL**: 12px - Large cards
- **2XL**: 16px - Modals

### Shadows

- **SM**: `0 1px 2px 0 rgb(0 0 0 / 0.05)` - Subtle elevation
- **MD**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` - Cards
- **LG**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` - Elevated elements
- **XL**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` - Modals, panels

### Transitions

- **Fast**: 0.15s ease - Micro-interactions
- **Normal**: 0.2s ease - Standard interactions
- **Slow**: 0.3s ease - Complex animations

## 🧩 Component Guidelines

### Buttons

#### Primary Button
- Background: `var(--primary-500)`
- Hover: `var(--primary-600)` with `translateY(-1px)` and shadow
- Active: `translateY(0)`
- Border radius: `var(--radius-md)`
- Padding: `var(--space-2) var(--space-3)`

#### Secondary Button
- Background: `var(--secondary-100)`
- Border: `1px solid var(--secondary-200)`
- Hover: `var(--secondary-200)` with `translateY(-1px)`

#### Icon Button
- Square aspect ratio (32px, 36px, 40px)
- Centered icon with flexbox
- Hover: `scale(1.05)` or `translateY(-1px)`

### Input Fields

#### Text Input
- Border: `1px solid var(--secondary-300)`
- Focus: `var(--primary-500)` border with `box-shadow: 0 0 0 3px var(--primary-100)`
- Border radius: `var(--radius-md)`
- Padding: `var(--space-2) var(--space-3)`

#### Textarea
- Same styling as text input
- Resize: vertical only
- Min-height: 80px for system input, 24px for prompt input

### Cards & Containers

#### System Section
- Background: white
- Border: `1px solid var(--secondary-200)`
- Border radius: `var(--radius-xl)`
- Shadow: `var(--shadow-md)`
- Padding: `var(--space-6)`

#### Prompt Container
- Background: white
- Border: `1px solid var(--secondary-200)`
- Border radius: `var(--radius-xl)`
- Shadow: `var(--shadow-lg)`
- Padding: `var(--space-4)`

### Navigation

#### Sidebar
- Background: `var(--secondary-50)`
- Border: `1px solid var(--secondary-200)`
- Shadow: `var(--shadow-sm)`

#### Nav Items
- Hover: `var(--secondary-100)` background with `translateX(4px)`
- Active: `var(--primary-50)` background with right border accent
- Transition: `all var(--transition-normal)`

### Modals

#### Modal Overlay
- Background: `rgba(0, 0, 0, 0.5)`
- Backdrop filter: `blur(4px)`

#### Modal Content
- Background: white
- Border radius: `var(--radius-2xl)`
- Shadow: `var(--shadow-xl)`
- Border: `1px solid var(--secondary-200)`

## 🎯 Design Principles

### 1. Consistency
- All components use the same design tokens
- Consistent spacing, typography, and color usage
- Unified interaction patterns

### 2. Accessibility
- WCAG 2.1 AA compliant color contrast ratios
- Focus indicators with `box-shadow: 0 0 0 3px var(--primary-100)`
- Semantic color usage for states

### 3. Responsive Design
- Mobile-first approach
- Flexible layouts using CSS Grid and Flexbox
- Adaptive spacing and typography

### 4. Micro-interactions
- Subtle hover and focus states
- Smooth transitions for all interactive elements
- Visual feedback for user actions

### 5. Visual Hierarchy
- Clear typography scale
- Consistent use of shadows for depth
- Proper spacing to create breathing room

## 🚀 Features

- **Modern UI/UX**: Material Design 3-inspired interface
- **Responsive Design**: Works seamlessly across all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized CSS with CSS custom properties
- **Maintainability**: Well-documented design system
- **Cross-browser**: Compatible with all modern browsers

## 🛠️ Technical Implementation

### CSS Architecture
- CSS Custom Properties for design tokens
- BEM-like naming conventions
- Modular component styles
- Responsive breakpoints

### Browser Support
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

### Performance Optimizations
- CSS custom properties for efficient theming
- Optimized font loading with preconnect
- Minimal CSS bundle size
- Efficient animations using transform and opacity

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

The design system is built with CSS custom properties, making it easy to customize:

```css
:root {
    --primary-500: #your-color;
    --font-family: 'Your Font', sans-serif;
    --space-4: 20px;
}
```

## 📄 License

This project is open source and available under the MIT License. 