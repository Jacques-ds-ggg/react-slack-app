import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import { SidebarItemsData } from '../data/SideBarData';
import firebase from 'firebase';

function Chat({ User }) {

    let { channelid } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelid)
        .collection('Messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            console.log(messages);
            setMessages(messages);
        })
    }

    const SendMessage = (text) => {
        if(channelid){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                userName: User.name,
                userImage: User.photo
            }
            db.collection('rooms').doc(channelid).collection('Messages').add(payload);

            // console.log(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelid)
        .onSnapshot((snapshot)=> {
            setChannel(snapshot.data());
            // console.log(snapshot.data());
        })
    }

    useEffect(()=>{
        // Obtain the channel on clicking on the actual website
        getChannel();
        // Obatain the massage assosited with the selected channel
        getMessages();
    }, [channelid])

    return (
        <Container>
            <HeaderBox>
                <DescriptionContainer>
                    <ChannelName>
                        # {channel && channel.Name}
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide anouncements and work-based matters
                    </ChannelInfo>
                </DescriptionContainer> 
                <DetailsContainer>
                    Details
                    <Info />
                </DetailsContainer>
            </HeaderBox>
            <MessageContainer>
                {
                    // If message have a lenth - there is messages
                    messages.length > 0 &&
                    // Loop through every single message
                    messages.map((data, index)=>(
                        <ChatMessage
                            text={data.text}
                            name={data.userName}
                            image={data.userImage}
                            timestamp={data.timestamp} />
                    ))
                }
            </MessageContainer>
            <ChatInput SendMessage={SendMessage}/>
        </Container>
    )
}

export default Chat

const HeaderBox = styled.div`
    padding-left: 20px;
    // Move text to the right 20px
    padding-right: 20px;
    display: flex;
    // To be able to move items to center
    align-items: center; 
    // Align items inside the header box to center
    border-bottom: 1px solid grey;
    // Add small border to bottom of header row
    justify-content: space-between;
    // Push items to the 2 ends
    background: white;
    // Color of backround of first row
`
const Container = styled.div`
    display: grid;
    min-height: 0;
    grid-template-rows: 64px auto min-content;
    // Define 3 rows - 
    // 1. Height of the Header - 64px height
    // 2. Height of message - auto - expand according to size of message
    // 3. Height minimum of message box at bottom - min-content
`
const DescriptionContainer = styled.div``
const DetailsContainer = styled.div`
    display: flex;
    // color: grey;
    // color: #7b03fc;
    // Change color of text
    align-items: center;
    font-size: 15px;
    color: #5d00c2;
`
const Info = styled(InfoIcon)`
    margin-left: 10px;
`
const ChannelName = styled.div`
    font-weight: bold;
    // color: black;
    color: #7b03fc;
    // color: #5d00c2;
`
const ChannelInfo = styled.div`
    margin-top: 8px;
    font-weight: 400;
    font-size: 12px;
    color: black;
    // color: #5d00c2;
    color: #7b03fc;
`
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    // color: #7b03fc;
`