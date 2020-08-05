import { LightningElement,track,wire } from 'lwc';
import { registerListener,unregisterAllListener} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';



export default class SelectedMeetingRoom extends LightningElement {

    @track selectedMeetingRoom={};
    @wire(CurrentPageReference) pageRef;
     connectedCallback(){
         registerListener('pubsubtileclick',this.onMeetingMeetingRoomSelectHandler,this);
     }
    
    disconnectedCallback(){
        unregisterAllListener(this);
    }
     onMeetingMeetingRoomSelectHandler(payload){
         this.selectedMeetingRoom=payload;
     }

}