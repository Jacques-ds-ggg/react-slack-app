import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { SidebarItemsData } from '../data/SideBarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useHistory } from 'react-router-dom'
// import {ChannelBarItemsData} from '../data/ChannelBarData';

function Sidebar(props) {
    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
            console.log(id);
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter Chanel Name");
        if(promptName){
            db.collection('rooms').add({
                Name : promptName
            })
        }
    }

    return (
        <Containers>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />

                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    SidebarItemsData.map(item => (
                        <MainChannelItems>
                            {item.icon}
                            {item.text}
                        </MainChannelItems>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelsContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelsContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={()=>goToChannel(item.id)}>
                                # { item.name }
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Containers>
    )
}

export default Sidebar

const Containers = styled.div`
    // background: #3F0E40;
    background: #b3b3b3;
`
const WorkspaceContainer = styled.div`
    // color: white;
    color: #7b03fc;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
    font-weight: bold;
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #ad89d9;
    color: #5d00c2;
    fill: #3E0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

`

const MainChannels = styled.div`
    padding-top: 20px;
`
const MainChannelItems = styled.div`
    // color: rgb(188 171 188);
    color: #7b03fc;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`
const ChannelsContainer = styled.div`
    // color: rgb(188 171 188);
    color: #7b03fc;
    margin-top: 10px;
    
`
const NewChannelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`
const ChannelsList = styled.div`
`
const Channel = styled.div`
    height 28px;
    dispaly: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`