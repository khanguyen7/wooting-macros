import {
  Text,
  VStack,
  Input,
  SimpleGrid,
  Divider,
  useColorModeValue,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  Flex,
  GridItem
} from '@chakra-ui/react'
import SequenceElementButton from './SequenceElementButton'
import { HIDCategory, KeyType } from '../../enums'
import { Hid, HidInfo } from '../../maps/HIDmap'
import { MouseInput, MouseInputInfo } from '../../maps/MouseMap'
import { SystemEvent, SystemEventInfo } from '../../maps/SystemEventMap'
import { useMemo, useState } from 'react'

export default function SelectElementArea() {
  const [tabIndex, setTabIndex] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const iconColour = useColorModeValue('bg-dark', 'bg-light')
  const borderColour = useColorModeValue(
    'primary-light.500',
    'primary-dark.500'
  )

  const ElementsToShow = useMemo(() => {
    switch (tabIndex) {
      case 0:
        return (
          <Grid
            h="fit"
            templateColumns={[
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)'
            ]}
            gap={1}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <GridItem colSpan={[2, 2, 3]}>
              <Accordion allowMultiple p={0}>
                {/** System Events */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        flex="1"
                        textAlign="left"
                        fontWeight={'semibold'}
                        alignItems="center"
                        gap={2}
                      >
                        <Icon boxSize={6} viewBox="0 0 24 24" fill={iconColour}>
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                        </Icon>
                        System Events
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} px={0}>
                    <SimpleGrid
                      w="100%"
                      h="fit"
                      columns={[2, 2, 3]}
                      spacing="1"
                      overflowY="auto"
                      css={{
                        '&::-webkit-scrollbar': {
                          display: 'none'
                        }
                      }}
                    >
                      {SystemEvent.all
                        .filter((element) =>
                          element.displayString
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        )
                        .map((info: SystemEventInfo) => (
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
                  </AccordionPanel>
                </AccordionItem>
                {/** Keyboard Keys */}
                {Object.keys(HIDCategory)
                  .filter((key) => isNaN(Number(key)))
                  .map((categoryName: string) => (
                    <AccordionItem key={categoryName}>
                      <h2>
                        <AccordionButton>
                          <Flex
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight={'semibold'}
                            alignItems="center"
                            gap={2}
                          >
                            <Icon
                              boxSize={6}
                              viewBox="0 0 24 24"
                              fill={iconColour}
                            >
                              <path
                                d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                                fill="none"
                              />
                              <path d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z" />
                            </Icon>
                            {categoryName}
                          </Flex>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} px={0}>
                        <SimpleGrid
                          w="100%"
                          h="fit"
                          columns={[2, 2, 3]}
                          spacing="1"
                          overflowY="auto"
                          css={{
                            '&::-webkit-scrollbar': {
                              display: 'none'
                            }
                          }}
                        >
                          {Hid.all
                            .filter(
                              (element) =>
                                element.displayString
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase()) &&
                                HIDCategory[element.category] === categoryName
                            )
                            .map((HIDinfo: HidInfo) => (
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
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                {/** Mouse Buttons */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        flex="1"
                        textAlign="left"
                        fontWeight={'semibold'}
                        alignItems="center"
                        gap={2}
                      >
                        <Icon boxSize={6} viewBox="0 0 24 24" fill={iconColour}>
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z" />
                        </Icon>
                        Mouse Buttons
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} px={0}>
                    <SimpleGrid
                      w="100%"
                      h="fit"
                      columns={[2, 2, 3]}
                      spacing="1"
                      overflowY="auto"
                      css={{
                        '&::-webkit-scrollbar': {
                          display: 'none'
                        }
                      }}
                    >
                      {MouseInput.all
                        .filter((element) =>
                          element.displayString
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        )
                        .map((info: MouseInputInfo) => (
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
                  </AccordionPanel>
                </AccordionItem>
                {/** Plugins */}
                {/* <AccordionItem></AccordionItem> */}
              </Accordion>
            </GridItem>
          </Grid>
        )
      case 1:
        return (
          <Flex
            direction={'column'}
            h="fit"
            gap={1}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <Accordion allowMultiple>
              {Object.keys(HIDCategory)
                .filter((key) => isNaN(Number(key)))
                .map((categoryName: string) => (
                  <AccordionItem key={categoryName}>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={'semibold'}
                        >
                          {categoryName}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <SimpleGrid
                        w="100%"
                        h="fit"
                        columns={[2, 2, 3]}
                        spacing="1"
                        overflowY="auto"
                        css={{
                          '&::-webkit-scrollbar': {
                            display: 'none'
                          }
                        }}
                      >
                        {Hid.all
                          .filter(
                            (element) =>
                              element.displayString
                                .toLowerCase()
                                .includes(searchValue.toLowerCase()) &&
                              HIDCategory[element.category] === categoryName
                          )
                          .map((HIDinfo: HidInfo) => (
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
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </Flex>
        )
      case 2:
        return (
          <SimpleGrid
            h="fit"
            columns={[2, 2, 3]}
            spacing={1}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {MouseInput.all
              .filter((element) =>
                element.displayString
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((info: MouseInputInfo) => (
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
        )
      case 3:
        return (
          <SimpleGrid
            h="fit"
            columns={[2, 2, 3]}
            spacing={1}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {SystemEvent.all
              .filter((element) =>
                element.displayString
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((info: SystemEventInfo) => (
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
        )
      case 4:
        return (
          <SimpleGrid
            h="fit"
            columns={[2, 2, 3]}
            spacing={1}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <Text fontWeight={"semibold"}>Coming Soon</Text>
          </SimpleGrid>
        )
      default:
        return <></>
    }
  }, [tabIndex, iconColour, searchValue])

  return (
    <VStack
      w="33%"
      h="100%"
      p="3"
      alignItems="normal"
      borderRight="1px"
      borderColor={borderColour}
    >
      <Text fontWeight="semibold" fontSize={['sm', 'md']}>
        ELEMENTS
      </Text>
      <Stack
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack>
          <Tooltip
            variant="brand"
            label="All Elements"
            aria-label="All elements category button"
            hasArrow
          >
            <IconButton
              variant={tabIndex === 0 ? 'brandSelected' : 'brandGhost'}
              aria-label="All Elements Tab"
              icon={
                <Icon
                  boxSize={6}
                  viewBox="0 0 24 24"
                  fill={tabIndex === 0 ? 'bg-dark' : iconColour}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                </Icon>
              }
              onClick={() => setTabIndex(0)}
            />
          </Tooltip>
          <Tooltip
            variant="brand"
            label="Keyboard Keys"
            aria-label="Keyboard Keys category button"
            hasArrow
          >
            <IconButton
              variant={tabIndex === 1 ? 'brandSelected' : 'brandGhost'}
              aria-label="Keyboard Key Elements"
              icon={
                <Icon
                  boxSize={6}
                  viewBox="0 0 24 24"
                  fill={tabIndex === 1 ? 'bg-dark' : iconColour}
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z" />
                </Icon>
              }
              onClick={() => setTabIndex(1)}
            />
          </Tooltip>
          <Tooltip
            variant="brand"
            label="Mouse Buttons"
            aria-label="Mouse buttons category button"
            hasArrow
          >
            <IconButton
              variant={tabIndex === 2 ? 'brandSelected' : 'brandGhost'}
              aria-label="Mouse Button Elements"
              icon={
                <Icon
                  boxSize={6}
                  viewBox="0 0 24 24"
                  fill={tabIndex === 2 ? 'bg-dark' : iconColour}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z" />
                </Icon>
              }
              onClick={() => setTabIndex(2)}
            />
          </Tooltip>
          <Tooltip
            variant="brand"
            label="System Events"
            aria-label="System events category button"
            hasArrow
          >
            <IconButton
              variant={tabIndex === 3 ? 'brandSelected' : 'brandGhost'}
              aria-label="System Event Elements"
              icon={
                <Icon
                  boxSize={6}
                  viewBox="0 0 24 24"
                  fill={tabIndex === 3 ? 'bg-dark' : iconColour}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </Icon>
              }
              onClick={() => setTabIndex(3)}
            />
          </Tooltip>
          <Tooltip
            variant="brand"
            label="Plugins"
            aria-label="Plugins category button"
            hasArrow
          >
            <IconButton
              variant={tabIndex === 4 ? 'brandSelected' : 'brandGhost'}
              aria-label="Plugin Elements"
              icon={
                <Icon
                  boxSize={6}
                  viewBox="0 0 24 24"
                  fill={tabIndex === 4 ? 'bg-dark' : iconColour}
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2C9.12 2.5 8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5z" />
                </Icon>
              }
              onClick={() => setTabIndex(4)}
            />
          </Tooltip>
        </HStack>
        <Input
          maxW={['100%', '100%', '55%']}
          maxH="32px"
          variant="brand"
          placeholder="Search"
          _placeholder={{ opacity: 1, color: borderColour }}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </Stack>
      <Divider />
      {ElementsToShow}
    </VStack>
  )
}
