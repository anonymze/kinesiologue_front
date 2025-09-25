declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Override React's HTMLAttributes to only include essential aria props
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Override to limit aria suggestions
    'aria-label'?: string;
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
  }
  
  interface AriaAttributes {
    'aria-label'?: string;
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
  }
}

export {};