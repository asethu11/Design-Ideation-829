# Design System: Minimal AI Chat Tool

## Design Philosophy

**Core Principle:** Extreme minimalism with maximum usability. Every element serves a purpose, nothing is decorative.

**Visual Strategy:** Clean, light theme with subtle contrasts and generous white space to create a calm, focused environment for AI conversations.

## Color Palette

### Primary Colors
```
Primary Background:   #FFFFFF (White)
Secondary Background: #E8ECEF (Light Gray)
Text:                #4A4A4A (Dark Gray)
Accent Primary:      #8C1D40 (ASU Maroon)
Accent Secondary:    #FFC627 (ASU Gold)
Highlight:           #00A3E0 (Bright Blue)
```

### UI Element Colors
```
Input Background:    #FFFFFF (White)
Input Border:        #CCCCCC (Gray)
Input Placeholder:   #999999 (Light Gray)
Input Focus:         #00A3E0 (Bright Blue)
Button Background:   #FFFFFF (White)
Button Text:         #4A4A4A (Dark Gray)
Button Border:       #CCCCCC (Gray)
```

### Interactive States
```
Button Default:    #FFFFFF background, #4A4A4A text, #CCCCCC border
Button Hover:      #E8ECEF background, #8C1D40 text, #8C1D40 border
Button Active:     Subtle pulse animation
Input Focus:       #00A3E0 border + translateY(-2px) lift
Link:              #00A3E0 (Bright Blue)
Link Hover:        #0082B8 (Darker Blue)
```

### Semantic Colors
```
Success:        #10B981 (Green)
Error:          #EF4444 (Red)
Warning:        #FFC627 (ASU Gold)
Info:           #00A3E0 (Bright Blue)
```

## Typography

### Font Stack
```
Primary: "Helvetica Neue", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif
```

### Type Scale
```
Headings:    16px, bold     (Font Weight: 700)
Body:        14px, regular  (Font Weight: 400)
Accent Text: 12px, italic   (Font Weight: 400, Style: italic)
```

### Line Heights
```
Tight:   1.25
Normal:  1.5
Relaxed: 1.75
```

## Spacing System

### Base Unit: 4px

```
xs:  4px   (1 unit)
sm:  8px   (2 units)
md:  16px  (4 units)
lg:  24px  (6 units)
xl:  32px  (8 units)
2xl: 48px  (12 units)
3xl: 64px  (16 units)
```

## Layout System

### Grid Structure
```
Container Max Width: 1200px
Content Max Width:   800px
Sidebar Width:       280px
Mobile Breakpoint:   768px
Small Mobile:        320px
```

### Layout Zones
```
1. Header/Project Selector:  Fixed top, minimal height
2. Chat Area:               Flexible, scrollable
3. Input Area:              Fixed bottom, consistent height
```

## Component Specifications

### Input Field
```
Background: #FFFFFF (White)
Border: 1px solid #CCCCCC (Gray)
Border Radius: 24px
Height: 48px
Padding: 12px 20px
Font Size: 14px
Font Family: "Helvetica Neue", sans-serif
Text Color: #4A4A4A (Dark Gray)
Placeholder Color: #999999 (Light Gray)

Focus State:
  - Border: 1px solid #00A3E0 (Bright Blue)
  - Transform: translateY(-2px)
  - Transition: all 0.1s ease-in
  - Box Shadow: 0 2px 8px rgba(0, 163, 224, 0.1)

Animation:
  - Lift on focus: translateY(-2px)
  - Duration: 0.1s ease-in
```

### Buttons
```
Default Button:
  - Background: #FFFFFF (White)
  - Text Color: #4A4A4A (Dark Gray)
  - Border: 1px solid #CCCCCC (Gray)
  - Height: 40px
  - Border Radius: 20px
  - Padding: 0 20px
  - Font Weight: regular
  - Font Size: 14px
  - Font Family: "Helvetica Neue", sans-serif

Hover State:
  - Background: #E8ECEF (Light Gray)
  - Text Color: #8C1D40 (ASU Maroon)
  - Border: 1px solid #8C1D40
  - Transition: all 0.15s

Active/Click State:
  - Animation: Subtle pulse (scale 0.98)
  - Duration: 0.1s
  - Transform: scale(0.98) then back to scale(1)

Primary Button (Send):
  - Background: #00A3E0 (Bright Blue)
  - Color: #FFFFFF (White)
  - Border: 1px solid #00A3E0
  - Hover: Background #0082B8
```

### Chat Bubbles
```
User Messages:
  - Background: #E8ECEF (Light Gray)
  - Border: 1px solid #CCCCCC
  - Border Radius: 12px
  - Padding: 12px 16px
  - Margin: 8px 0
  - Max Width: 70%
  - Alignment: Right
  - Text Color: #4A4A4A

AI Messages:
  - Background: #FFFFFF (White)
  - Border: 1px solid #CCCCCC
  - Border Radius: 12px
  - Padding: 12px 16px
  - Margin: 8px 0
  - Max Width: 85%
  - Alignment: Left
  - Text Color: #4A4A4A
```

### Project Selector
```
Dropdown Style:
  - Background: #FFFFFF (White)
  - Border: 1px solid #CCCCCC (Gray)
  - Border Radius: 8px
  - Padding: 8px 12px
  - Min Width: 200px
  - Font Size: 14px
  - Color: #4A4A4A
  - Font Family: "Helvetica Neue", sans-serif

Sidebar Style (Alternative):
  - Width: 280px
  - Background: #E8ECEF (Light Gray)
  - Border Right: 1px solid #CCCCCC
  - Padding: 16px
```

## Animation System

### Timing Functions
```
Playful Transition: cubic-bezier(0.4, 0, 0.2, 1)
Standard Ease: ease-in-out
Quick Feedback: ease-in
```

### Standard Animations
```
Input Focus Lift:
  - Transform: translateY(-2px)
  - Duration: 0.1s ease-in
  - Box Shadow: 0 2px 8px rgba(0, 163, 224, 0.1)

Button Hover:
  - Background & color transition
  - Duration: 0.15s cubic-bezier(0.4, 0, 0.2, 1)

Button Click Pulse:
  - Transform: scale(0.98) → scale(1)
  - Duration: 0.1s ease-in-out

Loading Indicator:
  - Color: #00A3E0 (Bright Blue)
  - Animation: Pulsing dot
  - Duration: 0.8s infinite
  - Timing: ease-in-out
```

### Loading States
```
Message Sending: Input field subtle opacity (0.7) with pulse
AI Thinking: Three pulsing dots in #00A3E0
Page Load: Simple fade-in transition
```

## Responsive Breakpoints

### Desktop (1024px+)
```
- Full sidebar visibility
- Chat bubbles max 70% width
- Generous spacing
- Fixed input at 800px max width
- Full hover animations
```

### Tablet (768px - 1023px)
```
- Collapsible sidebar or dropdown
- Chat bubbles max 80% width
- Reduced spacing
- Full-width input with padding
- Touch-friendly hover states
```

### Mobile (320px - 767px)
```
- Dropdown project selector only
- Chat bubbles max 90% width
- Minimal spacing
- Full-width input
- Touch-optimized button sizes (min 44px)
- Reduced animation for performance
```

## Interaction States

### Hover States
```
Buttons: Background #E8ECEF, Text #8C1D40, Border #8C1D40, 0.15s transition
Links: Color change to #0082B8 (Darker Blue)
Input Fields: Subtle border highlight
Clickable Areas: Light background change
```

### Focus States
```
Input Fields: #00A3E0 border + translateY(-2px) lift + box shadow
Buttons: 2px solid #00A3E0 outline
Keyboard Navigation: Clear visual indication
Tab Order: Logical flow through interface
```

### Active States
```
Buttons: Subtle pulse animation (scale 0.98)
Input Submission: Brief loading state
Links: Temporary color darkening
```

## Accessibility Standards

### Color Contrast
```
Normal Text: 4.5:1 minimum ratio (#4A4A4A on #FFFFFF)
Large Text: 3:1 minimum ratio
UI Elements: 3:1 minimum ratio
Focus Indicators: High contrast #00A3E0
```

### Animation Preferences
```
Respect prefers-reduced-motion
Provide option to disable animations
Essential animations only on mobile
```

### Focus Management
- Clear focus indicators in bright blue (#00A3E0)
- Logical tab order
- Skip links where needed
- Screen reader friendly
- Lift animations for visual feedback

## Implementation Notes

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #E8ECEF;
  --color-text: #4A4A4A;
  --color-text-placeholder: #999999;
  --color-border: #CCCCCC;
  --color-accent-primary: #8C1D40;
  --color-accent-secondary: #FFC627;
  --color-highlight: #00A3E0;
  
  /* Typography */
  --font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  --font-size-heading: 16px;
  --font-size-body: 14px;
  --font-size-accent: 12px;
  --font-weight-bold: 700;
  --font-weight-regular: 400;
  
  /* Animations */
  --timing-playful: cubic-bezier(0.4, 0, 0.2, 1);
  --timing-quick: 0.1s ease-in;
  --timing-standard: 0.15s ease;
  
  /* Layout */
  --spacing-unit: 4px;
  --border-radius: 8px;
  --border-radius-full: 24px;
}
```

### Key CSS Animations
```css
/* Input Focus Animation */
.input-focus {
  transform: translateY(-2px);
  border-color: var(--color-highlight);
  box-shadow: 0 2px 8px rgba(0, 163, 224, 0.1);
  transition: all var(--timing-quick);
}

/* Button Hover Animation */
.button-hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  transition: all var(--timing-standard);
}

/* Button Pulse Animation */
.button-pulse {
  animation: pulse 0.1s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(0.98); }
  100% { transform: scale(1); }
}

/* Loading Dots Animation */
.loading-dots {
  color: var(--color-highlight);
  animation: pulse-dots 0.8s infinite ease-in-out;
}

@keyframes pulse-dots {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
```

## Design Review Checklist

- [ ] All colors from approved palette used
- [ ] Helvetica Neue font family implemented
- [ ] Input field lift animation (translateY(-2px)) working
- [ ] Button hover transitions to maroon accent working
- [ ] Button click pulse animation implemented
- [ ] Loading indicator using bright blue (#00A3E0)
- [ ] Cubic-bezier timing for smooth flow
- [ ] Responsive behavior tested across breakpoints
- [ ] Accessibility requirements met
- [ ] Animation performance optimized
- [ ] Focus states clearly visible
- [ ] Reduced motion preferences respected
- [ ] Color contrast ratios verified