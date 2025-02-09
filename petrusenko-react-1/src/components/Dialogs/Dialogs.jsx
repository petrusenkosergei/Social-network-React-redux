import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";




const Dialogs = (props) => {

        let state =props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem src={d.src} name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    };
    if(!props.isAuth) return <Redirect to = {"/login"}/>;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
           <div className={s.messages}>
               <div> {messagesElement}</div>
           </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>

    )
};


export default Dialogs;


