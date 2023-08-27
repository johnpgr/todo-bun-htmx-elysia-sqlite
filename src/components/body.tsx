export const Body = () => {
  return `
    <body
      class="flex w-full h-screen justify-center items-center"
      hx-get="/tasks"
      hx-swap="innerHTML"
      hx-trigger="load"
    />
`
}
