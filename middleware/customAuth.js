export default function({ redirect,  store }) {
    const isAuthenticated = store.state.auth.loggedIn
    if (isAuthenticated) {
        return redirect('/admin/dashboard')
    }
  }