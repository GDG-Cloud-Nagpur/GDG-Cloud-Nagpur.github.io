import React, {useContext, useEffect} from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function MLTeam() {
    const context = useContext(apiContext)
    const {data, getAllData, getAttribute, getAllTeamData, teams, parameter} =
        context
    let attribute = 'teams'
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData()
    }, [parameter])

    const MLTeam =
        teams &&
        teams.filter(e => {
            return e.designation === 'ML'
        })
    return 'ff'
}

export default MLTeam
