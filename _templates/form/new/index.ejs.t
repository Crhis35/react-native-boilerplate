---
to: src/ui/components/form/<%= h.changeCase.kebabCase(name) %>/index.ts
---
export { default as <%= h.changeCase.pascal(name) %>Field } from './<%= h.changeCase.kebabCase(name) %>';
