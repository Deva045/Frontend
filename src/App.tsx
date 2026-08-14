import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import StartupPage from './pages/StartupPage'
import { useNavigationStore } from './store/navigation'

export default function App() {
  const currentView = useNavigationStore(
    (state) => state.currentView,
  )

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white">
      {currentView === 'startup' ? (
        <StartupPage />
      ) : currentView === 'chat' ? (
        <ChatPage />
      ) : (
        <HomePage />
      )}
    </main>
  )
}
