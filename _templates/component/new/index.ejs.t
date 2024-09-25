---
to: src/ui/components/common/<%= directory %>/<%= h.changeCase.kebabCase(name) %>/index.ts
---
export { default as <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.kebabCase(name) %>';
export * from './<%= h.changeCase.kebabCase(name) %>.model';