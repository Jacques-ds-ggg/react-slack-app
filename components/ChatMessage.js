import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    <ArrowRightAltIcon/>     
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    // background: #d7c2ed;
    padding: 8px 20px;
    // padding shortcut: 8px - vertical, 20p - horizontal
    display: flex;
    // To set the items side by side.
    align-items: center;
    // Align image to center
    border-bottom: 1px solid #dbdbdb;
    // Add a light border to separate the chat

    :Hover {
        background: #dbdbdb;
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
        // Resize the image to fit with box
    }
`
const MessageContent = styled.div`
    display: flex;
    // Set text items top to bottom.
    flex-direction: column;

`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    color: #5d00c2;
    // Make the entire first part smaller.
    line-height: 1.4;
    // Set the line-Height slightly bigger
    
    
    span {
        margin-left: 8px;
        // Slight Space between items
        font-weight: 400;
        // Set second part to different weight
        color: rgb(97, 96, 97);
        // Set the color to a lighter color.
        font-size: 13px;
        // Resize the second item.
    }`
const Text = styled.span`
    display: flex;
    // Align items vertically.

`
