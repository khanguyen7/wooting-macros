import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
import { Flex, useDisclosure } from '@chakra-ui/react'
import Overview from './views/Overview'
import { ViewState } from './enums'
import { useApplicationContext } from './contexts/applicationContext'
import Macroview from './views/Macroview'
import { useEffect } from 'react'
import SettingsModal from './views/settings/SettingsModal'
import data from '@emoji-mart/data'
import { init } from 'emoji-mart'
import './App.css'
import { MacroProvider } from './contexts/macroContext'

function App() {
  const { viewState, initComplete } = useApplicationContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    appWindow.setMinSize(new PhysicalSize(800, 600))
    document.addEventListener('contextmenu', (event) => event.preventDefault()) // disables tauri's right click context menu
    init({ data })
  }, [])

  if (!initComplete) {
    return (
      <Flex h="100vh" justifyContent="center" alignItems="center">
        Loading
      </Flex>
    )
  }

  return (
    <Flex h="100vh" direction="column">
      {viewState === ViewState.Overview && (
        <MacroProvider>
          <Overview onOpenSettingsModal={onOpen} />
        </MacroProvider>
      )}
      {viewState === ViewState.Addview && (
        <MacroProvider>
          <Macroview isEditing={false}/>
        </MacroProvider>
      )}
      {viewState === ViewState.Editview && (
        <MacroProvider>
          <Macroview isEditing={true}/>
        </MacroProvider>
      )}
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default App
