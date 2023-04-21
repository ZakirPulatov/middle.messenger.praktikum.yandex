declare module '*.hbs' {
  const tpl: (param?: any) => string
  export default tpl
}

declare module '*.scss' {
  interface IClasses {
    [classes: string]: string
  }
  const classes: IClasses;
  export = classes;
}

declare module '*.svg' {
  const image: string
  export default image
}

declare module '*.jpg' {
  const image: string;
  export default image;
}

declare module '*.png' {
  const image: string;
  export default image;
}