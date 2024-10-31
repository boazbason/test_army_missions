import React from 'react'
import { Mission } from '../typs'
import './missionCard.css'

interface Props{
    mission: Mission
    DeleteMission: (id: string)=>void
    updeteStatus: (id: string)=>void
}

const MissionCard: React.FC<Props> = ({mission, DeleteMission, updeteStatus}) => {

    function show(){
        {if(mission.status != "Completed"){
            return <button onClick={()=>{updeteStatus(mission._id!)}} >update</button>
        }}
    }

  return (
    <div className='MissionCard' style={{backgroundColor: mission.status == "Pending" ? "red" : mission.status == "In Progress" ? "orange" : "green"}}>
        <h4>name: {mission.name}</h4>
        <h4>status: {mission.status}</h4>
        <button onClick={()=>{DeleteMission(mission._id!)}} >delete</button>
        {show()}
        

    </div>
  )
}

export default MissionCard
