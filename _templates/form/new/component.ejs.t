---
to: src/ui/components/form/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.tsx
---
import React from 'react';
import { <%= h.changeCase.pascal(name) %>FieldProps } from './<%= h.changeCase.kebabCase(name) %>.model';

export default function <%= h.changeCase.pascal(name) %>Field(props: <%= h.changeCase.pascal(name) %>FieldProps ){
  return <div><%= h.changeCase.pascal(name) %>Field</div>;
};
