import {
  Text,
  VStack,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Flex,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import SequenceElementButton from './SequenceElementButton'
import { KeyType } from '../../enums'
import { Hid, HidInfo } from '../../maps/HIDmap'
import { MouseInput, MouseInputInfo } from '../../maps/MouseMap'
import { SystemEvent, SystemEventInfo } from '../../maps/SystemEventMap'

export default function SelectElementArea() {
  const dividerColour = useColorModeValue('gray.400', 'gray.600')

  return (
    <VStack
      w="33%"
      h="100%"
      p="3"
      alignItems="normal"
      borderRight="1px"
      borderColor={dividerColour}
    >
      <Text fontWeight="semibold" fontSize={['sm', 'md']}>
        Sequence Elements
      </Text>
      <Divider borderColor={dividerColour} />
      <Tabs
        w="100%"
        h="100%"
        size="sm"
        variant="soft-rounded"
        isFitted
        defaultIndex={0}
        colorScheme="yellow"
      >
        <Flex
          w="100%"
          flexWrap="wrap"
          justifyContent={['center', 'center', 'space-between']}
          gap="2"
        >
          <TabList w={['100%', '100%', '40%']} justifyContent="space-around">
            <Tab p="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
              </svg>
            </Tab>
            <Tab p="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                <path d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z" />
              </svg>
            </Tab>
            <Tab p="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z" />
              </svg>
            </Tab>
            <Tab p="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg>
            </Tab>
            <Tab p="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2C9.12 2.5 8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5z" />
              </svg>
            </Tab>
          </TabList>
          <Input
            maxW={['100%', '100%', '55%']}
            maxH="32px"
            variant="outline"
            borderColor="gray.400"
            placeholder="Search"
            isDisabled
          />
        </Flex>
        <TabPanels
          w="100%"
          h={['calc(100% - 108px)', 'calc(100% - 112px)', 'calc(100% - 72px)']}
          mt={['4px']}
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {/** the 90px comes from the heights of the text, input, and tablist elements above */}
          <TabPanel w="full" p="4px" h="100%">
            <SimpleGrid h="100%" columns={[2, 2, 3]} spacing="1">
              {SystemEvent.all.map((info: SystemEventInfo) => (
                <SequenceElementButton
                  key={info.displayString}
                  displayText={info.displayString}
                  properties={{
                    type: 'SystemEventAction',
                    data: info.defaultData
                  }}
                />
              ))}
              {MouseInput.all.map((info: MouseInputInfo) => (
                <SequenceElementButton
                  key={info.webButtonVal}
                  displayText={info.displayString}
                  properties={{
                    type: 'MouseEventAction',
                    data: {
                      type: 'Press',
                      data: {
                        type: 'DownUp',
                        button: info.enumVal,
                        duration: 20
                      }
                    }
                  }}
                />
              ))}
              {Hid.all.map((HIDinfo: HidInfo) => (
                <SequenceElementButton
                  key={HIDinfo.HIDcode}
                  displayText={HIDinfo.displayString}
                  properties={{
                    type: 'KeyPressEventAction',
                    data: {
                      keypress: HIDinfo.HIDcode,
                      press_duration: 1,
                      keytype: KeyType[KeyType.DownUp]
                    }
                  }}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel w="full" p="4px" h="100%">
            <SimpleGrid h="100%" columns={[2, 2, 3]} spacing="1">
              {Hid.all.map((HIDinfo: HidInfo) => (
                <SequenceElementButton
                  key={HIDinfo.HIDcode}
                  displayText={HIDinfo.displayString}
                  properties={{
                    type: 'KeyPressEventAction',
                    data: {
                      keypress: HIDinfo.HIDcode,
                      press_duration: 1,
                      keytype: KeyType[KeyType.DownUp]
                    }
                  }}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel w="full" p="4px">
            <SimpleGrid h="100%" columns={[2, 2, 3]} spacing="1">
              {MouseInput.all.map((info: MouseInputInfo) => (
                <SequenceElementButton
                  key={info.webButtonVal}
                  displayText={info.displayString}
                  properties={{
                    type: 'MouseEventAction',
                    data: {
                      type: 'Press',
                      data: {
                        type: 'DownUp',
                        button: info.enumVal,
                        duration: 20
                      }
                    }
                  }}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel w="full" p="4px">
            <SimpleGrid h="100%" columns={[2, 2, 3]} spacing="1">
              {SystemEvent.all.map((info: SystemEventInfo) => (
                <SequenceElementButton
                  key={info.displayString}
                  displayText={info.displayString}
                  properties={{
                    type: 'SystemEventAction',
                    data: info.defaultData
                  }}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel w="full" p="4px">
            <Text>
              Plugin commands go here, in a dropdown; each dropdown is for a
              specific application
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
