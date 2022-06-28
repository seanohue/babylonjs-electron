import Renderer from "./renderer";

declare global {
  interface Window {
    renderer: Renderer;
  }
} 