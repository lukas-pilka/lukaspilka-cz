// client/src/App.js

import React from "react";
import "./App.css";
import {format} from 'date-fns';

export function CvEvents() {
    const [cvEvents, setCvEvents] = React.useState(null);

    React.useEffect(() => {
        fetch("/results")
            .then((res) => res.json())
            .then(data => {
                const modifiedData = data.map(cvEvent => {
                    const event = {}
                    event.name = cvEvent._source.eventName;
                    event.startDate = new Date(cvEvent._source.eventStartDate);
                    event.oneDayEvent = cvEvent._source.oneDayEvent;
                    if (cvEvent._source.eventEndDate){
                        event.endDate = new Date(cvEvent._source.eventEndDate);
                        event.inProgress = false;
                    }else if(!cvEvent._source.eventEndDate && event.oneDayEvent === true){
                        event.endDate = event.startDate;
                        event.inProgress = false;
                    }else{
                        event.endDate = new Date();
                        event.inProgress = true;
                    }
                    event.description = cvEvent._source.eventDescription;
                    event.url = cvEvent._source.url;
                    event.type = cvEvent._source.eventType;
                    return event
                });
                // sorting events by date
                modifiedData.sort((a, b) => (a.endDate < b.endDate) ? 1 : -1);
                setCvEvents(modifiedData);
            }, []);
    });

    return (
        <div>
            {/*{JSON.stringify(cvEvents)}*/}
            ┌{format(new Date(),'dd/MM/yyyy HH:mm:ss')}<br/>
            │<br/>
            {!cvEvents ? "Loading..." :
                cvEvents.map((e, index) => (
                    <div key={index}>
                        ├{!e.url ? e.name : <a href={e.url} target="_blank" rel="noreferrer">{e.name}</a>}<br/>
                        │{e.type} | {e.description}<br/>
                        │{e.inProgress ? "since " : ""}{format(e.startDate, 'MM/yyyy')}
                        {e.endDate !== e.startDate && e.inProgress === false ? " - " + format(e.endDate, 'MM/yyyy'): ""}<br/>

                        │
                    </div>
                ))
            }
            └13/08/1986
        </div>
    );
}
