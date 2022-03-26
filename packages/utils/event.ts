export interface DisposeEvent {
  dispose(): void;
}

export function addDomEvent(dom: HTMLElement, event: string, callback: (e: Event) => void): DisposeEvent {
  dom.addEventListener(event, callback);
  return {
    dispose() {
      dom.removeEventListener(event, callback);
    }
  };
}
