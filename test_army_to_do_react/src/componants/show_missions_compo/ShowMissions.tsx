import React from 'react'
import { Mission } from '../typs'
import MissionCard from '../mission_card/MissionCard'
import './showMissions.css'

interface Props {
    missions: Mission[];
    DeleteMission: (id: string)=>void
    updeteStatus: (id: string)=>void
}

const showMissions: React.FC<Props> = ({missions, DeleteMission, updeteStatus}) => {
  return (
    <div className='showMissions'>
      {missions.map((mis)=><MissionCard mission = {mis} DeleteMission = {DeleteMission} updeteStatus = {updeteStatus}/>)}
    </div>
  )
}

export default showMissions
