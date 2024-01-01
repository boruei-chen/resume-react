export interface Props extends React.HTMLAttributes<HTMLElement> {
  name: NamesEnum;
  color?: ColorsEnum;
  width?: number;
  height?: number;
}

export enum NamesEnum {
  Instagram = 'instagram',
  LinkedIn = 'linkedin',
  GitHub = 'github',
  npm = 'npm',
  HTML = 'html',
  CSS = 'css',
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  React = 'react',
  Angular = 'angular',
  Storybook = 'storybook',
  Gallery = 'gallery',
  Redirect = 'redirect'
}

export enum ColorsEnum {
  Grayscale = 'grayscale'
}
