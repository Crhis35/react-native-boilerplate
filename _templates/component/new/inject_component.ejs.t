---
to: src/ui/components/common/<%= directory %>/index.ts
inject: true
append: true
---
export * from './<%= h.changeCase.kebabCase(name) %>';