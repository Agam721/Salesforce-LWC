import { LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;
meetingRoomsInfo=[{roomName:'A-01',roomCapacity:'12'},
{roomName:'A-02',roomCapacity:'12'},
{roomName:'A-03',roomCapacity:'16'},
{roomName:'A-04',roomCapacity:'12'},
{roomName:'A-05',roomCapacity:'5'},
{roomName:'A-06',roomCapacity:'8'},
{roomName:'A-07',roomCapacity:'10'},
{roomName:'A-08',roomCapacity:'20'}];

onTileSelectHandler(event){
const meetingRoomInfo=event.detail;
this.selectedMeetingRoom=meetingRoomInfo.roomName;

}
constructor(){
    super();
    this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this));
}

}
