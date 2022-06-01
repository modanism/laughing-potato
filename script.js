const cloud = document.querySelector(".cloud");
const gateway = document.querySelector(".internet-gateway");
let line1 = new LeaderLine(cloud, gateway);
line1.endPlug = "behind";
line1.color = "black";
line1.size = 2;

// TODO:
// Connect lines