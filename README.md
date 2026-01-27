# Form By React

## 1. Project Overview

**Form By React** is a production-grade, dual-mode authentication interface (Login & Sign Up) built to demonstrate modern UI/UX principles.

The project highlights a **Neon Glassmorphism** aesthetic, featuring a translucent blurred card against a dynamic, animated background of floating neon orbs. It prioritizes user experience with smooth mode transitions, real-time input validation, and immediate visual feedback.

**Core Idea:** A reusable, aesthetically premium authentication component that can be dropped into any modern React application.

## 2. Tech Stack

This project leverages a modern, type-safe stack ensuring performance and maintainability:

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **UI Library:** [PrimeReact 10](https://primereact.org/)
- **Styling:** CSS3 (Custom Glassmorphism, Animations, Flexbox)
- **Icons:** PrimeIcons

## 3. Project Architecture

The codebase follows a clean, component-based architecture designed for clarity.

```text
src/
├── App.tsx       # Main Layout & Business Logic (State, Validation, View Switching)
├── App.css       # Component Styling (Card, Inputs, Transitions, Error States)
├── index.css     # Global Styles & Background Animation
└── main.tsx      # Entry Point & Theme Configuration
```

**Key Decisions:**

- **Single Component Logic (`App.tsx`):** For this scope, keeping state (`formData`, `errors`, `isLogin`) co-located provides immediate clarity.
- **Custom CSS Overrides:** We use specific CSS selectors to override PrimeReact defaults, ensuring the custom "Neon" theme takes precedence without fighting the library configuration.

## 4. Installation & Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Step-by-Step

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/form-by-react.git
    cd form-by-react
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 5. Running the Project

- **Development:** `npm run dev` - Starts the local server (usually at `http://localhost:5173`).
- **Production Build:** `npm run build` - compiles TypeScript and bundles the app for deployment.
- **Preview:** `npm run preview` - locally preview the production build.

## 6. Code Conventions & Standards

- **Naming:** PascalCase for Components (`App.tsx`), camelCase for functions/vars (`handleSubmit`, `isLogin`).
- **State Management:** Use `useState` for local UI state. Do not over-engineer with Redux/Context for a single form.
- **Validation:** Validation logic is centralized in the `validate()` function. It returns a boolean and updates the `errors` state object.
- **Styling:**
  - Use `App.css` for component-specific styles.
  - Use `!important` purposefully when overriding PrimeReact internal styles is necessary for the custom theme.

## 7. Scalability & Future Improvements

While simple now, this project is built to grow:

- **API Integration:** The `handleSubmit` currently simulates an API call. Replace the `setTimeout` with `fetch` or `axios` calls to your backend.
- **Custom Hook:** As the form grows, extract the form logic (`formData`, `handleChange`, `validate`) into a `useForm` hook.
- **Theme Switching:** The CSS variables can be expanded to support multiple color themes beyond the current Neon Green.

## 8. Known Limitations / Trade-offs

- **Validation Strategy:** Validation runs on submit. Real-time validation clears errors on type, but doesn't re-validate until the next submit. This is a design choice to reduce "nagging" errors while typing.
- **CSS in JS:** We stick to plain CSS files for simplicity and zero-runtime overhead, rather than using Styled Components or Emotion.

## 9. Contribution Guidelines

We welcome contributions!

1.  Fork the repo.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes following the conventions above.
4.  Push to the branch.
5.  Open a Pull Request.

## 10. Ownership Mindset

This project is not just a "form"—it is the user's first impression of the application. Maintainers are expected to uphold the **"Premium Feel"**:

- Animations must be smooth (60fps).
- No jarring layout shifts.
- Error messages should be helpful and polite.

---

## 11. PrimeReact Setup Notes

> [!IMPORTANT] > **READ THIS IF COMPONENTS LOOK BROKEN.**

**Problem**
PrimeReact components rendered unstyled or broken even though the library was installed.

- Buttons appeared as plain HTML
- Icons didn’t render
- No clear runtime or build error explained the issue

**Root Cause**
PrimeReact requires multiple CSS imports and the `primeicons` package, which are easy to miss and were not obvious during setup.

**Solution**

1.  **Install required dependencies:**

    ```bash
    npm install primereact primeicons
    ```

2.  **Import required styles in the application entry file (`src/main.tsx`):**
    ```javascript
    import "primereact/resources/themes/lara-light-indigo/theme.css"; // or your preferred theme
    import "primereact/resources/primereact.min.css";
    import "primeicons/primeicons.css";
    ```

**Missing any of these steps will cause PrimeReact components to render incorrectly without clear errors.**
