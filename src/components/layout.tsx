import elements from "typed-html"

export function Layout({ children }: elements.Children) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="https://unpkg.com/htmx.org@1.9.5"></script>
      <link href="/styles.css" rel="stylesheet">
    </head>
  <body>
    ${children}
  </body>
  </html>
`
}
