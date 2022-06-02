const cloud = document.querySelector('.cloud');
const gateway = document.querySelector('.internet-gateway');
const remoteWifi = document.querySelector('.wifi.remote');
const dataWarehouse = document.querySelector('.server.warehouse');
const labMEgateway = document.querySelector('.lab-gateway')
const netSwitchTop = document.querySelector('.net-switch.top');
const netSwitchBottom = document.querySelector('.net-switch.bottom');
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


// cloud to gateway
new LeaderLine(cloud, gateway, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    startSocket : 'top',
    endSocket : 'top'
});

// gateway to data warehouse
new LeaderLine(gateway, dataWarehouse, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    path : 'grid'
});

// gateway to wifi remote
new LeaderLine(gateway, remoteWifi, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'left',
    path : 'grid'
});

// internet gateway to labME gateway
new LeaderLine(gateway, labMEgateway, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});

// switch to switch
new LeaderLine(netSwitchTop, netSwitchBottom, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});
// switch to labME gateway
new LeaderLine(netSwitchTop, labMEgateway, {
    color : 'black',
    size : 2,
    endPlug : 'behind'
});
// gateway to modul lokal
new LeaderLine(labMEgateway, modulLokal, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    path : 'grid',
    endSocket : 'top'
});
// gateway to data lake
new LeaderLine(labMEgateway, dataLake, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    path : 'grid',
    endSocket : 'top'
});
// gateway to wifi
new LeaderLine(labMEgateway, APWifi, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    path : 'grid',
    endSocket : 'top'
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
// switch to web box
new LeaderLine(netSwitchBottom, webBox, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// switch to modul relay ethernet
new LeaderLine(netSwitchBottom, modulRelay, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
});
// switch to modul lokal beban
new LeaderLine(netSwitchBottom, modulLokalBeban, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
    endSocket : 'top'
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
    endPlug : 'behind',
});
// smart meter to LV-1
new LeaderLine(smartMeter, lv_3, {
    color : 'black',
    size : 2,
    endPlug : 'behind',
});
// battery to hybrid inverter (DC)
new LeaderLine(battery, hybridInverter, {
    color : 'blue',
    size : 2,
    endPlug : 'behind',
    dash : true,
    middleLabel: 'AC'
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
    middleLabel : 'AC'
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