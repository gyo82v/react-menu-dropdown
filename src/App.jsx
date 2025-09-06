import Menu from "./menu/Index"

function App() {

  return (
    <main>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contacts</Menu.Item>
          <Menu.Item>LogIn</Menu.Item>
          <Menu.Item>Extra</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </main>
  )
}

export default App
