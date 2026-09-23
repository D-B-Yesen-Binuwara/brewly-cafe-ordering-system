import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <main className="fallback-screen" role="alert"><div className="fallback-card"><span className="fallback-icon">!</span><h1>Something went wrong</h1><p>We couldn’t load this page. Please refresh and try again.</p><button type="button" className="primary-button" onClick={() => window.location.reload()}>Refresh page</button></div></main>
    }
    return this.props.children
  }
}
