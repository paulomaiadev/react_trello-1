import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Routes
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="page-shell">
      <Header titulo="TaskFlow" subtitulo="Gerencie suas tarefas com mais organização." />
      
      <main id="app">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App
