import { create } from 'zustand'

export type NexusView =
  | 'startup'
  | 'home'
  | 'chat'
  | 'voice'
  | 'memory'
  | 'vision'
  | 'automation'
  | 'devices'
  | 'plugins'
  | 'settings'
  | 'developer'
  | 'analytics'

interface NavigationState {
  currentView: NexusView
  isBooted: boolean
  setCurrentView: (view: NexusView) => void
  setBooted: (booted: boolean) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: 'startup',
  isBooted: false,

  setCurrentView: (currentView) => set({ currentView }),

  setBooted: (isBooted) => set({ isBooted })
}))
