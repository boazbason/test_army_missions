import axios from "axios"
import { Mission } from './src/componants/typs'

const API_KEY: string = "9070748";

export const fatchMissions = async (): Promise<Mission[]>=>{
    try{
        const response = await axios.get("https://reactexambackend.onrender.com/missions/"+API_KEY, {

        });
        return response.data;
    }
    catch(err){
        throw new Error("fatch failed")
    }
}

export const deleteMission = async (id: string)=>{

    try{
        await axios.delete(`https://reactexambackend.onrender.com/missions/${API_KEY}/${id}`, {
            
        });
        //return response.data;
    }
    catch(err){
        throw new Error("fatch failed")
    }
}

export const updeteStatus = async (id: string)=>{
    try{
        await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}/progress/${id}`, {
            
        });
        //return response.data;
    }
    catch(err){
        throw new Error("fatch failed")
    }
}

export const CreateNewMission = async (mission: Mission)=>{
    try{
        console.log(mission);
        
        await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}`,mission);
        
    }
    catch(err){
        throw new Error("fatch failed")
    }
}