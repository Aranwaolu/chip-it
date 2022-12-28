export default async function ({ app, redirect, route, store, $toast }) {
  if (navigator.onLine) {
    if (store.state.L_I !== true) {
      return redirect("/login");
    }
  } else {
    $toast.show("No Internet connection");
  }
}
