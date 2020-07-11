/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue, { VNode  } from 'vue'

declare module '@vue/composition-api' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
  }
}

declare global {
  namespace JSX {

    // Common attributes of all components (including custom components)
    interface IntrinsicAttributes {
      [attribute: string]: any
    }

    interface IntrinsicElements {
      [element: string]: any
    }
    // Read "$props" field in the custom components return type as property of the components
    interface ElementAttributesProperty {
      $props: any
    }
  }
}
