# leafac-rehype-shiki-next-mdx-remote-bug-repro

Reproduction of a bug between @leafac/rehype-shiki and next-mdx-remote

## Instructions

```
yarn
yarn dev
```

Go to http://localhost:3000

Face `SyntaxError: unknown: Unexpected token (17:2)`

```
error - SyntaxError: unknown: Unexpected token (17:2)

  15 | export default function MDXContent({
  16 |   components,
> 17 |   ...props
     |   ^
  18 | }) {
  19 |   return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">
  20 |     <pre {...{
```
