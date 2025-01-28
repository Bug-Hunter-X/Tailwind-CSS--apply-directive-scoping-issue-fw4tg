The best approach is to avoid relying on `@apply` for cross-component style reuse. Instead, create reusable components or utility classes in a centralized location. 

Here's how to refactor the code to address the scoping issue:

**1. Create a shared utility file (e.g., `sharedStyles.css`):**
```css
/* sharedStyles.css */
.my-custom-class {
  @apply bg-blue-500 text-white p-4 rounded;
}
```

**2. Import and use the shared style classes directly in the component:**
```javascript
// ChildComponent.js
<div className="my-custom-class">Child Component</div>
```
This approach avoids the `@apply` directive's scoping limitations and ensures consistent styling across components.