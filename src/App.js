import React from 'react'
import './App.css'
import Searchengine from './components/SearchEngine'

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Searchengine city="Dhaka" />

          <footer className="text-center">
            This projects was codded by{' '}
            <a href="https://github.com/iammansura" target="-blank">
              Mansura
            </a>{' '}
            and is{' '}
            <a
              href="https://github.com/iammansura/weather-forcast"
              target="-blank"
            >
              open-source on GitHub
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
