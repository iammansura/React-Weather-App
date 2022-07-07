import React from 'react'
import './App.css'
import Searchengine from './components/SearchEngine'

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Searchengine
            city="Hannover
          "
          />

          <footer className="text-center">
            This projects was coded by{' '}
            <a href="https://github.com/iammansura" target="-blank">
              Mansura
            </a>{' '}
            and is{' '}
            <a
              href="https://github.com/iammansura/weather-forcast"
              target="-blank"
            >
              open-sourced on GitHub
            </a>{' '}
            and <br />
            <a
              href="https://react-weather-forcastapp.netlify.app"
              target="-blank "
            >
              {' '}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
