export interface DisposeEvent {
    dispose(): void;
}
export declare function addDomEvent(dom: HTMLElement, event: string, callback: (e: Event) => void): DisposeEvent;
