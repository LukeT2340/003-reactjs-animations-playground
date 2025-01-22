// vite-env.d.ts or a similar declaration file
declare module "*.webp" {
  const src: string
  export default src
}

declare module "*.glsl" {
  const value: string
  export default value
}

declare module "*.vert" {
  const value: string
  export default value
}

declare module "*.frag" {
  const value: string
  export default value
}
