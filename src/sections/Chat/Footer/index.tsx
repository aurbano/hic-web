import React, { useContext, useRef, useCallback } from 'react'
import { Form, Button, InputGroup, Container } from 'react-bootstrap'
import { useImmer } from 'use-immer'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SocketContext } from 'util/socketProvider'
import { VALID_USERNAME } from '../../../constants'
import useGlobalState from 'store/state'
import { EVENTS, Message, OutgoingMessage } from 'store/types'
import MessageComponent from '../Messages/Message'

import styles from './index.module.scss'
import Field from './Field'
import Submit from './Submit'
import TextIcon from './TextIcon'

type State = {
  message: string
  private: boolean
  to: string | null
  isCommand: boolean
  focused: boolean
}

type Props = {
  replyTo?: Message | null
  onFocus?: () => void
  onBlur?: () => void
  onCancelReply?: () => void
}

export default ({ onFocus, onBlur, replyTo, onCancelReply }: Props) => {
  const { state, dispatch } = useGlobalState()

  const [localState, setState] = useImmer<State>({
    message: '',
    private: false,
    to: null,
    isCommand: false,
    focused: false,
  })
  const draftTimer = useRef<any>(null)
  const inputRef = useRef<any>(null)

  const { socket } = useContext(SocketContext)

  const askForHelp = () => {
    dispatch({
      type: 'system_message',
      payload: '/help',
    })
  }

  const onInputFocus = useCallback(() => {
    setState((draft) => {
      draft.focused = true
    })
    onFocus && onFocus()
  }, [setState, onFocus])

  const onInputBlur = useCallback(() => {
    setState((draft) => {
      draft.focused = false
    })
    onBlur && onBlur()
  }, [setState, onBlur])

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    if (localState.message.length < 1 || localState.message.trim().length < 1) {
      return
    }

    sendMessage(localState.message)

    setState((draft) => {
      draft.message = ''
      draft.private = false
      draft.isCommand = false
    })

    // refocus the input
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    })

    onCancelReply && onCancelReply()
  }

  const sendMessage = (message: string, draft: boolean = false) => {
    if (!draft && (message.length < 1 || message.trim().length < 1)) {
      return
    }

    if (message === '/help') {
      return askForHelp()
    }

    let type = EVENTS.MESSAGE
    if (localState.isCommand) {
      type = EVENTS.COMMAND
    }

    const payload: OutgoingMessage = {
      content: message,
      attributes: {
        draft,
        private: localState.private,
        to: localState.to,
        replyToTimestamp: replyTo ? replyTo.timestamp.getTime() : null,
      },
    }

    socket?.emit(type, payload)
  }

  const onType = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    clearTimeout(draftTimer.current)

    const value: string = e.currentTarget.value

    // special messages
    let isCommand = false
    let isPM = false
    let to: string | null = null

    if (value[0] === '/') {
      isCommand = true
    } else if (value[0] === '@') {
      const words = value.split(' ')
      isPM = true
      if (
        words.length > 0 &&
        words[0][0] === '@' &&
        VALID_USERNAME.test(words[0].substr(1))
      ) {
        to = words[0].substr(1)
      }
    }

    setState((draft) => {
      draft.message = value
      draft.private = isPM
      draft.to = to
      draft.isCommand = isCommand
    })

    if (isPM || isCommand) {
      return
    }

    if (state.draftTimer > 0) {
      draftTimer.current = setTimeout(() => {
        sendMessage(value, true)
      }, state.draftTimer)
    }
  }

  return (
    <div
      className={classNames(styles.area, {
        [styles.focused]: localState.focused,
      })}
    >
      <Container className={styles.container}>
        {replyTo && (
          <div
            className={styles.reply}
            style={{ borderLeftColor: `#${replyTo.user.color}` }}
          >
            <div className={styles.actions}>
              <Button variant="link" onClick={onCancelReply}>
                <FontAwesomeIcon icon="times" />
              </Button>
            </div>
            <MessageComponent reply message={replyTo} />
          </div>
        )}
        <Form
          noValidate
          onSubmit={handleSubmit}
          className={classNames({
            [styles.private]: localState.private,
            [styles.command]: localState.isCommand,
          })}
        >
          <Field
            ref={inputRef}
            value={localState.message}
            isFocused={localState.focused}
            onChange={onType}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          >
            <InputGroup.Append className={styles.button}>
              <Submit />
            </InputGroup.Append>
            <TextIcon
              isPrivate={localState.private}
              isCommand={localState.isCommand}
              onHelp={askForHelp}
            />
          </Field>
        </Form>
      </Container>
    </div>
  )
}