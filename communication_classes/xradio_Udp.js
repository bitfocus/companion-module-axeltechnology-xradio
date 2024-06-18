import { UDPHelper } from '@companion-module/base';

class xradioUdp {

    constructor(host, port, self) 
    {
        this.host = host;
        this.port = port;
        this.udp = new UDPHelper(host, port);
        this.self = self;
        this.initListeners();
        console.log("CONSTRUCTED")
    }

    //------------------------------------------------------------------------------------------------
    // LISTENER INITIALIZER (TODO: DATA MANAGEMENT AND STATUS FEEDBACK)
    //------------------------------------------------------------------------------------------------

    initListeners() 
    {
        this.udp.on('error', (err) => {
            console.log('error', 'Network error: ' + err.message);
        });

        this.udp.on('listening', () => {
            console.log('info', 'UDP socket listening on port ' + this.port);
        });

        this.udp.on('status_change', (status, message) => {
            console.log('info', 'UDP status changed: ' + status + ' - ' + message);
        });
    }

    //------------------------------------------------------------------------------------------------
    // General function that manages sending a single udp api to the xradio instance
    //------------------------------------------------------------------------------------------------

    async sendCommand(COMMAND,index,secondIndex, id_end) 
    {
        console.log('sending Command', COMMAND);
        var cmd 
        
        //fast variable assignment toudp command

        if(index!=null && secondIndex!=null){
            cmd =  decodeURIComponent(await this.self.parseVariablesInString(`${COMMAND}(${index},${secondIndex})`));
        }else if(index!=null){
            cmd =  decodeURIComponent(await this.self.parseVariablesInString(`${COMMAND}(${index})`));
        }else{
            cmd =  decodeURIComponent(await this.self.parseVariablesInString(`${COMMAND}`));
        }

        console.log("info", "CMD CREATED: " + cmd);

        if (cmd !== '') {
            const sendBuf = Buffer.from(cmd + id_end, 'latin1');

            console.log('debug', 'sending to ' + this.host + ': ' + sendBuf.toString())

            this.udp.send(sendBuf);
        }
    }

    //------------------------------------------------------------------------------------------------
    // CALLBACK FUNTIONS (JUST DEFINES THE COMMAND STRING AND CALLS sendCommand)
    //------------------------------------------------------------------------------------------------

    async StartKeyB(id_end) {
        await this.sendCommand('^^KD',13,2,id_end);
    }

    async StopKeyB(id_end) {
        await this.sendCommand('^^KD',46,0,id_end);
    }

    //-------------------------------------------------------------

    async StartNext(id_end) {
        await this.sendCommand('^^STARTNEXT',null,null,id_end);
    }
    
    async StartSpot(id_end) {
        await this.sendCommand('^^KD',48,0,id_end);
    }

    async Stop(id_end) {
        await this.sendCommand('^^STOP',null,null,id_end);
    }

    async AutoMan(id_end) {
        await this.sendCommand('^^KP',32,null,id_end);
    }

    async HotKey_Press(index,secondIndex, id_end) {
        await this.sendCommand('^^KD',index,secondIndex,id_end);
    }

    //-------------------------------------------------------------
    

    //------------------------------------------------------------------------------------------------
}

export default xradioUdp;
