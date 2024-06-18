import { InstanceBase, InstanceStatus, runEntrypoint, UDPHelper } from '@companion-module/base';
import { ConfigFields } from './src/config.js';
import { getActionDefinitions } from './src/actions.js';
import { getPresetsDefinitions } from './src/presets.js';

import xradioUdp from './communication_classes/xradio_Udp.js'

class xradio extends InstanceBase {

    async init(config) {
        this.config = config;
        this.setActionDefinitions(getActionDefinitions(this));
        this.setPresetDefinitions(getPresetsDefinitions(this)); 
        await this.configUpdated(config);
    }

	//----------------------------------------------------------------

    async configUpdated(config) {

        if (this.xradioUDPManager) {
            this.xradioUDPManager.destroy();
        }
		console.log("configUpdated")

        this.config = config;

        if (this.config.host) {
            this.init_udp();
            this.setVariableDefinitions([]);
        } else {
            this.updateStatus(InstanceStatus.BadConfig);
        }
    }

	//----------------------------------------------------------------

    async destroy() {

        this.xradioUDPManager.destroy();
        this.updateStatus(InstanceStatus.Disconnected);
        
    }

	//----------------------------------------------------------------

    getConfigFields() {
        return ConfigFields;
    }

	//----------------------------------------------------------------

    init_udp() {

		console.log("UDP INITIALIZATION")

        this.xradioUDPManager = new xradioUdp(this.config.host, this.config.port,this);

		console.log("UDP initListeners")
        this.updateStatus(InstanceStatus.Ok);
    }

	//----------------------------------------------------------------
}

runEntrypoint(xradio, []);