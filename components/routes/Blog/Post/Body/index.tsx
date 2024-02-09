'use client';
import { PortableText } from '@portabletext/react';
import { Components } from './Components';
import { type TypedObject } from 'sanity';

export function Body({ value }: { value: TypedObject[] }) {
  return (
    <>
      <PortableText
        value={value}
        components={Components}
      />
    </>
  );
}
