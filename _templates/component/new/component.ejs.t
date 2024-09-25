---
to: src/ui/components/common/<%= directory %>/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.tsx
---
import React from 'react';
import { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.kebabCase(name) %>.model';

export default function <%= h.changeCase.pascal(name) %>(props: <%= h.changeCase.pascal(name) %>Props){
  return <div><%= h.changeCase.pascal(name) %>Component</div>;
};
