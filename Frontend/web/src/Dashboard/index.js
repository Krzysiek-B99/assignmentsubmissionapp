import React, { useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";

const Dashboard = () => {
    const [jwt, setJwt] = useLocalState("","jwt");
    const [assignments, setAssignments] = useState(null);

    useEffect(() => {
        fetch("api/assignments", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            method: "GET",
        }).then((response) => {
            if (response.status === 200) return response.json();
        })
        .then((assignmentsData) => {
            setAssignments(assignmentsData);
        })
    }, [])

    function createAssignment (){
        fetch("api/assignments",{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
        })
        .then((response) =>{
            if (response.status === 200) return response.json();
        })
        .then((assignment) => {
            window.location.href = `/assignments/${assignment.id}`;
        });
    }
    return (
        <div style={{margin: "2em"}}>
            {assignments ? assignments.map(assignment => <div>
                assignment ID: {assignment.id}
            </div> ) : <></>}
            <button onClick={()=> createAssignment()}>Submit new assignment</button>
        </div>

    );
};

export default Dashboard;