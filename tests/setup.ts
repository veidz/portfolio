import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock IntersectionObserver para testes com Framer Motion
class IntersectionObserverMock {
  root: Element | null = null
  rootMargin: string = ''
  thresholds: ReadonlyArray<number> = []
  
  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}

  observe() {
    // Simula que o elemento está visível
    this.callback(
      [
        {
          isIntersecting: true,
          target: document.createElement('div'),
          intersectionRatio: 1,
          boundingClientRect: {} as DOMRectReadOnly,
          intersectionRect: {} as DOMRectReadOnly,
          rootBounds: null,
          time: Date.now(),
        },
      ],
      this as unknown as IntersectionObserver
    )
  }

  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
