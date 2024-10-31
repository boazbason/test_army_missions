import React, { useEffect, useState } from 'react'
import Input_compo from '../Input_compo/Input_compo'
import ShowMissions from '../show_missions_compo/ShowMissions'
import { Mission } from '../typs'
import { CreateNewMission, deleteMission, fatchMissions, updeteStatus } from '../../../api_queries'

const MissionsApp = () => {

    
        const [missions, setMissions] = useState<Mission[]>([]);
        const [error, setError] = useState<string | null>(null);
        const [add, setadd] = useState<string | null>(null);


        const loadMissions = async () => {
            try {
                const data = await fatchMissions();
                setMissions(data)
            }
            catch (error) {
                setError("failed to load missions")
            }
        }

        useEffect(() => {
            
            loadMissions();
        }, )

        function AddMission(newMission: Mission) {
            CreateNewMission(newMission)
            setMissions([...missions, newMission])

        }

        function DeleteMission(id: string){
            deleteMission(id);
            const newm: Mission[] = missions.filter((mis)=>{ return mis._id != id})
            setMissions(newm)

        }

        function updeteStatusMission(id: string) {
            updeteStatus(id)
            const data = loadMissions();
            // setMissions(data)

        }



        return (
            <div id='MissionApp'>
                <header>
                    <h1>
                        Missions
                    </h1>
                </header>
                <main>
                    <div>
                        <Input_compo AddMission = {AddMission} />
                        <ShowMissions missions = {missions} DeleteMission = {DeleteMission} updeteStatus = {updeteStatusMission}/>
                    </div>
                    
                </main>
            </div>
        )
    }




export default MissionsApp
