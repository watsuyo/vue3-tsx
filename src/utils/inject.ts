import { h, defineComponent } from '@vue/composition-api';

// @ts-ignore
export const inject = defineComponent.createElement = function createElement(
  element: any,
  props: any,
  ...children: any
) {
  return h(element, props, children);
};

