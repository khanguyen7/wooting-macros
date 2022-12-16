import {
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

export default function Updates() {
  const whatsNewTextColour = useColorModeValue('green.600', 'green.400')
  const textColour = useColorModeValue('darkGray', 'offWhite')
  return (
    <VStack w="100%" spacing={4}>
      <Text w="100%" fontWeight="bold" fontSize="sm">
        January 1st, 2023
      </Text>
      <VStack w="100%" spacing={0}>
        <Heading w="100%" size="lg" textColor={whatsNewTextColour}>
          What's New
        </Heading>
        <UnorderedList w="100%" px="8" spacing={2}>
          <ListItem textColor={textColour}>
            <span style={{ fontWeight: '700' }}>
              Collections: Create groups of macros that can be easily toggled
              on/off as a group.&nbsp;
            </span>
            You can set a unique name and an icon for the collection. And if you
            end up not wanting it, you can delete later.
          </ListItem>
          <ListItem textColor={textColour}>
            <span style={{ fontWeight: '700' }}>
              Macros: Create a sequence of events that can be triggered by
              specific keyboard keys or a single mouse button.&nbsp;
            </span>
            You can set a name and an icon for the macro. And if you end up not
            wanting it, you can delete later. You can add keystrokes and mouse
            presses to the sequence, alongside some system events.
          </ListItem>
          <ListItem textColor={textColour}>
            <span style={{ fontWeight: '700' }}>
              Settings: Adjust how the application behaves.&nbsp;
            </span>
            You can adjust some window settings, as well as some functionality
            settings that affect your experience creating a macro.
          </ListItem>
          <ListItem textColor={textColour}>
            <span style={{ fontWeight: '700' }}>
              Appearance: Blind your eyes, or don't.&nbsp;
            </span>
            You can select between one of two colour modes, light and dark.
          </ListItem>
          <ListItem textColor={textColour}>
            <span style={{ fontWeight: '700' }}>
              Toggle on/off: Enable and disable individual macros, collections,
              or the entire app without closing it.&nbsp;
            </span>
            If you find yourself in a situation where you'd like to disable one
            or more macros, you can easily toggle them off.
          </ListItem>
        </UnorderedList>
      </VStack>
    </VStack>
  )
}
