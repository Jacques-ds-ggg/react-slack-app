import React, {useState}from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';


function ChatInput({ SendMessage }) {

    const [ input, setInput] = useState("");

    const send = (e) => {
        // Prevent page from refreshing
        e.preventDefault();
        if(!input) return;
        SendMessage(input)
        setInput('');
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                        onChange={(e)=>setInput(e.target.value)}
                        type="Text"
                        value={input}
                        placeholder="Message here..."
                    />
                </form>
                <Buttons>
                    <ShortcutButton>
                        <FlashOnIcon/>
                    </ShortcutButton>
                    <BoldButton>
                        <FormatBoldIcon/>
                    </BoldButton>
                    <ItalicButton>
                        <FormatItalicIcon/>
                    </ItalicButton>
                    <StriketButton>
                        <StrikethroughSIcon/>
                    </StriketButton>
                    <MoreButton>
                        <MoreHorizIcon/>
                    </MoreButton>
                    <FormatButton>
                        <FormatStrikethroughIcon/>
                    </FormatButton>
                    <AtButton>
                        <AlternateEmailIcon />
                    </AtButton>
                    <EmojyButton>
                        <TagFacesIcon/>
                    </EmojyButton>
                    <AttachButton>
                        <AttachFileIcon />
                    </AttachButton>
                    <Sendbutton
                        // Allow it to be send on hittin the enter key
                        type='submt'
                        onClick={send}>
                        <Send />
                    </Sendbutton>
                </Buttons>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const ShortcutButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
`
const BoldButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
`
const ItalicButton=  styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
  `  
const MoreButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
    `
const FormatButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
    `
const StriketButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }
`

const Container = styled.div`
    // background: orange;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex 1;
            // Make the input the main focus vs send button
            border: none;
            // Remove the border form the input type section
            font-size: 13px;
        }
        input:focus {
            outine: none;
            // Remove the blue border from the text input.
        }
    }
`
const Sendbutton = styled.button`
    background: #7b03fc;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
    // Target Icon class discovered by the inspector
    // function on the browser.
        width: 18px;
        // Size of the icon itself
    }

    :Hover {
        background: #7b03fc;
    }
`
const Form = styled.div``
const Send = styled(SendIcon)`
    color: #D9D9D9;
    // Set color of the send icon
`
const EmojyButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;

    :Hover {
        background: #ccc3e6;
    }
`
const AttachButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    margin-right: 7px;

    :Hover {
        background: #ccc3e6;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    
`

const AtButton = styled.div`
    color: #525453;
    // Set color of the send icon
    background: white;
    border-radius: 100%;
    // Background effect form Circle around icon
    width: 32px;
    // Set effect width
    height: 32px;
    // Set effect height;
    display: flex;
    // Align center
    align-items: center;
    // Allign Vertically
    justify-content: center;
    // Align horizontally
    cursor: pointer;
    font-size: 24px;
    // margin-bottom: 5px;

    :Hover {
        background: #ccc3e6;
    }`