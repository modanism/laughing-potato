const cloud = document.querySelector('.cloud');
const gateway = document.querySelector('.internet-gateway');
const remoteWifi = document.querySelector('.wifi.remote');
const dataWarehouse = document.querySelector('.server.warehouse');
const labMEgateway = document.querySelector('.lab-gateway')
const netSwitchTop = document.querySelector('.net-switch.top');
const modulLokal  = document.querySelector('.server.one');
const dataLake = document.querySelector('.server.two');
const APWifi = document.querySelector('.wifi.ap');
const AdminPC = document.querySelector('.pc.admin');
const thirdPartyPC = document.querySelector('.pc.party');
const webBox = document.querySelector('.small-box.left');
const modulLokalBeban = document.querySelector('.small-box.right');
const smartMeter = document.querySelector('.medium-box.four');
const modulRelay = document.querySelector('.medium-box.three');
const IED = document.querySelector('.medium-box.one');
const IED_PV = document.querySelector('.medium-box.two');
const hybridInverter = document.querySelector('.inverter.one');
const gridInverter = document.querySelector('.inverter.two');
const solarPanel = document.querySelector('.solar-panel');
const switchOne = document.querySelector('.switch.one');
const switchTwo = document.querySelector('.switch.two');
const prio = document.querySelector('.triangle.prio');
const non_prio = document.querySelector('.triangle.non-prio');
const battery = document.querySelector('.battery');
const ground = document.querySelector('.ground');
const lv_1 = document.querySelector('.lv.one');
const lv_2 = document.querySelector('.lv.two');
const lv_3 = document.querySelector('.lv.three');
const header = document.querySelector('header');

function fetchingData() {
    fetch('data.php')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        function isOnline(item) {
            if (item=="Online") return true
            else return false
        }
        //Component's status
        isOnline(data.warehouse_status) ? dataWarehouse.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.router_status) ? APWifi.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.lake_status) ? dataLake.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.locmod_status) ? modulLokal.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.webbox_status) ? webBox.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.relay_status) ? modulRelay.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        isOnline(data.daqbeban_status) ? modulLokalBeban.innerHTML = "<p style='color:green;font-size:14px;position:relative;bottom:35%';>Online</p>" : "<p style='font-size:14px;position:relative;bottom:35%'>Offline</p>";
        
        
        // gateway to data warehouse
        new LeaderLine(gateway, dataWarehouse, {
            color : isOnline(data.warehouse_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            path : 'grid',
            middleLabel : data.warehouse_latency.split("=").pop() + 'ms'
        });

        // internet gateway to labME gateway
        new LeaderLine(gateway, labMEgateway, {
            color : isOnline(data.warehouse_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind'
        });
        // gateway to modul lokal
        new LeaderLine(labMEgateway, modulLokal, {
            color : isOnline(data.locmod_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            path : 'grid',
            startSocket:'right',
            endSocket : 'top',
            middleLabel : data.locmod_latency.split("=").pop() + 'ms' + 'ms'
        });
        // gateway to data lake
        new LeaderLine(labMEgateway, dataLake, {
            color : isOnline(data.lake_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            path : 'grid',
            startSocket:'right',
            endSocket : 'top',
            middleLabel : data.lake_latency.split("=").pop() + 'ms'
        });
        // gateway to wifi
        new LeaderLine(labMEgateway, APWifi, {
            color : isOnline(data.router_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            path : 'grid',
            endSocket : 'top',
            middleLabel : data.router_latency.split("=").pop() + 'ms'
        });
        // switch to web box
        new LeaderLine(netSwitchTop, webBox, {
            color : isOnline(data.webbox_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            endSocket : 'top',
            middleLabel : data.webbox_latency.split("=").pop() + 'ms'
        });
        // switch to modul relay ethernet
        new LeaderLine(netSwitchTop, modulRelay, {
            color : isOnline(data.relay_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            endSocket : 'top',
            middleLabel : data.relay_latency
        });
        // switch to modul lokal beban
        new LeaderLine(netSwitchTop, modulLokalBeban, {
            color : isOnline(data.daqbeban_status) ? 'green' : 'black',
            size : 2,
            endPlug : 'behind',
            endSocket : 'top',
            middleLabel : data.daqbeban_latency.split("=").pop() + 'ms'
        });
    });
}

setInterval(function() {
    try {
        fetchingData();
        console.log("SUCC");
    } catch (error) {
        console.log("Failed fetching data");
    }
    
},3000);

// cloud to gateway
new LeaderLine(cloud, gateway, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    startSocket : 'top',
    endSocket : 'top',
});



// gateway to wifi remote
new LeaderLine(gateway, remoteWifi, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'left',
    path : 'grid'
});

// switch to labME gateway
new LeaderLine(netSwitchTop, labMEgateway, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});

// wifi remote to pc admin
new LeaderLine(remoteWifi, AdminPC, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    dash : true
});
// wifi remote to 3rd party
new LeaderLine(remoteWifi, thirdPartyPC, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top',
    dash : true
});


// web box to IED hybrid inverter
new LeaderLine(webBox, IED, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// web box to IED PV Grid inverter
new LeaderLine(webBox, IED_PV, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// modul lokal beban to smart meter beban listrik
new LeaderLine(modulLokalBeban, smartMeter, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});

// IED hybrid inverter to hybrid inverter
new LeaderLine(IED, hybridInverter, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// IED pv grid inverter to pv grid inverter
new LeaderLine(IED_PV, gridInverter, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// modul relay to LV-1
new LeaderLine(modulRelay, lv_3, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});
// smart meter to LV-1
new LeaderLine(smartMeter, lv_3, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});
// battery to hybrid inverter (DC)
new LeaderLine(battery, hybridInverter, {
    color : 'blue',
    size : 2,
    endPlug : 'behind',
    dash : true,
    middleLabel: 'DC',
    fontSize : 4
});
// hybrid inverter to LV-1 (AC)
new LeaderLine(hybridInverter, lv_2, {
    startSocket : 'right',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC'
});

// LV-1 to PV grid inverter (AC)
new LeaderLine(lv_2, gridInverter, {
    startSocket : 'right',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC'
});
// PV grid inverter to panel surya (DC)
new LeaderLine(gridInverter, solarPanel, {
    color : 'blue',
    size : 2,
    endPlug : 'behind',
    dash : true,
    middleLabel: 'DC'
});

// LV-2 to ground (AC)
new LeaderLine(lv_2, ground, {
    startSocket : 'bottom',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    path : 'grid',
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC'
});

// LV-3 to prioritas (AC)
new LeaderLine(lv_3, prio, {
    startSocket : 'right',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC',
    path : 'grid'
});

// switch to lv-3
new LeaderLine(switchOne, lv_3, {
    startSocket : 'right',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC',
    path : 'grid',
    startSocketGravity : 80
});

// switch to non prioritas (AC)
new LeaderLine(switchTwo, non_prio, {
    startSocket : 'right',
    endSocket : 'left',
    color : 'blue',
    dash : true,
    size : 2,
    endPlug : 'behind',
    middleLabel : 'AC'
});