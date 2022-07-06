import data from "./csvjson.json"

let scrummoeilijk = 0
let scrumleuk = 0
const scrum = data.filter(opdracht => opdracht["opdracht of project"].includes("SCRUM"))
for(let i = 0; i < scrum.length; i++){
  scrummoeilijk += scrum[i].moeilijk
  scrumleuk += scrum[i].leuk
}
let scrumleukaverage = scrumleuk / scrum.length
let scrummoeilijkaverage = scrummoeilijk / scrum.length

let W1D1moeilijk = 0
let W1D1leuk = 0
const W1D1 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D1"))
for(let i = 0; i < W1D1.length; i++){
  W1D1moeilijk += W1D1[i].moeilijk
  W1D1leuk += W1D1[i].leuk
}
let W1D1leukaverage = W1D1leuk / W1D1.length
let W1D1moeilijkaverage = W1D1moeilijk / W1D1.length

let W1D21moeilijk = 0
let W1D21leuk = 0
const W1D21 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D2-1"))
for(let i = 0; i < W1D21.length; i++){
  W1D21moeilijk += W1D21[i].moeilijk
  W1D21leuk += W1D21[i].leuk
}
let W1D21leukaverage = W1D21leuk / W1D21.length
let W1D21moeilijkaverage = W1D21moeilijk / W1D21.length

let W1D22moeilijk = 0
let W1D22leuk = 0
const W1D22 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D2-2"))
for(let i = 0; i < W1D22.length; i++){
  W1D22moeilijk += W1D22[i].moeilijk
  W1D22leuk += W1D22[i].leuk
}
let W1D22leukaverage = W1D22leuk / W1D22.length
let W1D22moeilijkaverage = W1D22moeilijk / W1D22.length

let W1D23moeilijk = 0
let W1D23leuk = 0
const W1D23 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D2-3"))
for(let i = 0; i < W1D23.length; i++){
  W1D23moeilijk += W1D23[i].moeilijk
  W1D23leuk += W1D23[i].leuk
}
let W1D23leukaverage = W1D23leuk / W1D23.length
let W1D23moeilijkaverage = W1D23moeilijk / W1D23.length

let W1D24moeilijk = 0
let W1D24leuk = 0
const W1D24 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D2-4"))
for(let i = 0; i < W1D24.length; i++){
  W1D24moeilijk += W1D24[i].moeilijk
  W1D24leuk += W1D24[i].leuk
}
let W1D24leukaverage = W1D24leuk / W1D24.length
let W1D24moeilijkaverage = W1D24moeilijk / W1D24.length

let W1D25moeilijk = 0
let W1D25leuk = 0
const W1D25 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D2-5"))
for(let i = 0; i < W1D25.length; i++){
  W1D25moeilijk += W1D25[i].moeilijk
  W1D25leuk += W1D25[i].leuk
}
let W1D25leukaverage = W1D25leuk / W1D25.length
let W1D25moeilijkaverage = W1D25moeilijk / W1D25.length

let W1D31moeilijk = 0
let W1D31leuk = 0
const W1D31 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D3-1"))
for(let i = 0; i < W1D31.length; i++){
  W1D31moeilijk += W1D31[i].moeilijk
  W1D31leuk += W1D31[i].leuk
}
let W1D31leukaverage = W1D31leuk / W1D31.length
let W1D31moeilijkaverage = W1D31moeilijk / W1D31.length

let W1D32moeilijk = 0
let W1D32leuk = 0
const W1D32 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D3-2"))
for(let i = 0; i < W1D32.length; i++){
  W1D32moeilijk += W1D32[i].moeilijk
  W1D32leuk += W1D32[i].leuk
}
let W1D32leukaverage = W1D32leuk / W1D32.length
let W1D32moeilijkaverage = W1D32moeilijk / W1D32.length

let W1D34moeilijk = 0
let W1D34leuk = 0
const W1D34 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D3-4"))
for(let i = 0; i < W1D34.length; i++){
  W1D34moeilijk += W1D34[i].moeilijk
  W1D34leuk += W1D34[i].leuk
}
let W1D34leukaverage = W1D34leuk / W1D34.length
let W1D34moeilijkaverage = W1D34moeilijk / W1D34.length

let W1D35moeilijk = 0
let W1D35leuk = 0
const W1D35 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D3-5"))
for(let i = 0; i < W1D35.length; i++){
  W1D35moeilijk += W1D35[i].moeilijk
  W1D35leuk += W1D35[i].leuk
}
let W1D35leukaverage = W1D35leuk / W1D35.length
let W1D35moeilijkaverage = W1D35moeilijk / W1D35.length

let W1D36moeilijk = 0
let W1D36leuk = 0
const W1D36 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D3 - Project - Guess-the-number"))
for(let i = 0; i < W1D36.length; i++){
  W1D36moeilijk += W1D36[i].moeilijk
  W1D36leuk += W1D36[i].leuk
}
let W1D36leukaverage = W1D36leuk / W1D36.length
let W1D36moeilijkaverage = W1D36moeilijk / W1D36.length

let W1D41moeilijk = 0
let W1D41leuk = 0
const W1D41 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D4-1"))
for(let i = 0; i < W1D41.length; i++){
  W1D41moeilijk += W1D41[i].moeilijk
  W1D41leuk += W1D41[i].leuk
}
let W1D41leukaverage = W1D41leuk / W1D41.length
let W1D41moeilijkaverage = W1D41moeilijk / W1D41.length

let W1D42moeilijk = 0
let W1D42leuk = 0
const W1D42 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D4 - Project - Kleurentoggle"))
for(let i = 0; i < W1D42.length; i++){
  W1D42moeilijk += W1D42[i].moeilijk
  W1D42leuk += W1D42[i].leuk
}
let W1D42leukaverage = W1D42leuk / W1D42.length
let W1D42moeilijkaverage = W1D42moeilijk / W1D42.length

let W1D5moeilijk = 0
let W1D5leuk = 0
const W1D5 = data.filter(opdracht => opdracht["opdracht of project"].includes("W1D5"))
for(let i = 0; i < W1D5.length; i++){
  W1D5moeilijk += W1D5[i].moeilijk
  W1D5leuk += W1D5[i].leuk
}
let W1D5leukaverage = W1D5leuk / W1D5.length
let W1D5moeilijkaverage = W1D5moeilijk / W1D5.length

let W2D11moeilijk = 0
let W2D11leuk = 0
const W2D11 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D1-1"))
for(let i = 0; i < W2D11.length; i++){
  W2D11moeilijk += W2D11[i].moeilijk
  W2D11leuk += W2D11[i].leuk
}
let W2D11leukaverage = W2D11leuk / W2D11.length
let W2D11moeilijkaverage = W2D11moeilijk / W2D11.length

let W2D12moeilijk = 0
let W2D12leuk = 0
const W2D12 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D1-2"))
for(let i = 0; i < W2D12.length; i++){
  W2D12moeilijk += W2D12[i].moeilijk
  W2D12leuk += W2D12[i].leuk
}
let W2D12leukaverage = W2D12leuk / W2D12.length
let W2D12moeilijkaverage = W2D12moeilijk / W2D12.length

let W2D21moeilijk = 0
let W2D21leuk = 0
const W2D21 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D2-1"))
for(let i = 0; i < W2D21.length; i++){
  W2D21moeilijk += W2D21[i].moeilijk
  W2D21leuk += W2D21[i].leuk
}
let W2D21leukaverage = W2D21leuk / W2D21.length
let W2D21moeilijkaverage = W2D21moeilijk / W2D21.length

let W2D22moeilijk = 0
let W2D22leuk = 0
const W2D22 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D2-2"))
for(let i = 0; i < W2D22.length; i++){
  W2D22moeilijk += W2D22[i].moeilijk
  W2D22leuk += W2D22[i].leuk
}
let W2D22leukaverage = W2D22leuk / W2D22.length
let W2D22moeilijkaverage = W2D22moeilijk / W2D22.length

let W2D23moeilijk = 0
let W2D23leuk = 0
const W2D23 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D2-3"))
for(let i = 0; i < W2D23.length; i++){
  W2D23moeilijk += W2D23[i].moeilijk
  W2D23leuk += W2D23[i].leuk
}
let W2D23leukaverage = W2D23leuk / W2D23.length
let W2D23moeilijkaverage = W2D23moeilijk / W2D23.length

let W2D31moeilijk = 0
let W2D31leuk = 0
const W2D31 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D3-1"))
for(let i = 0; i < W2D31.length; i++){
  W2D31moeilijk += W2D31[i].moeilijk
  W2D31leuk += W2D31[i].leuk
}
let W2D31leukaverage = W2D31leuk / W2D31.length
let W2D31moeilijkaverage = W2D31moeilijk / W2D31.length

let W2D32moeilijk = 0
let W2D32leuk = 0
const W2D32 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D3-2"))
for(let i = 0; i < W2D32.length; i++){
  W2D32moeilijk += W2D32[i].moeilijk
  W2D32leuk += W2D32[i].leuk
}
let W2D32leukaverage = W2D32leuk / W2D32.length
let W2D32moeilijkaverage = W2D32moeilijk / W2D32.length

let W2D33moeilijk = 0
let W2D33leuk = 0
const W2D33 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D3-3"))
for(let i = 0; i < W2D33.length; i++){
  W2D33moeilijk += W2D33[i].moeilijk
  W2D33leuk += W2D33[i].leuk
}
let W2D33leukaverage = W2D33leuk / W2D33.length
let W2D33moeilijkaverage = W2D33moeilijk / W2D33.length

let W2D41moeilijk = 0
let W2D41leuk = 0
const W2D41 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D4-1"))
for(let i = 0; i < W2D41.length; i++){
  W2D41moeilijk += W2D41[i].moeilijk
  W2D41leuk += W2D41[i].leuk
}
let W2D41leukaverage = W2D41leuk / W2D41.length
let W2D41moeilijkaverage = W2D41moeilijk / W2D41.length

let W2D42moeilijk = 0
let W2D42leuk = 0
const W2D42 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D4-2"))
for(let i = 0; i < W2D42.length; i++){
  W2D42moeilijk += W2D42[i].moeilijk
  W2D42leuk += W2D42[i].leuk
}
let W2D42leukaverage = W2D42leuk / W2D42.length
let W2D42moeilijkaverage = W2D42moeilijk / W2D42.length

let W2D43moeilijk = 0
let W2D43leuk = 0
const W2D43 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D4-3"))
for(let i = 0; i < W2D43.length; i++){
  W2D43moeilijk += W2D43[i].moeilijk
  W2D43leuk += W2D43[i].leuk
}
let W2D43leukaverage = W2D43leuk / W2D43.length
let W2D43moeilijkaverage = W2D43moeilijk / W2D43.length

let W2D5moeilijk = 0
let W2D5leuk = 0
const W2D5 = data.filter(opdracht => opdracht["opdracht of project"].includes("W2D5"))
for(let i = 0; i < W2D5.length; i++){
  W2D5moeilijk += W2D5[i].moeilijk
  W2D5leuk += W2D5[i].leuk
}
let W2D5leukaverage = W2D5leuk / W2D5.length
let W2D5moeilijkaverage = W2D5moeilijk / W2D5.length

let W3D11moeilijk = 0
let W3D11leuk = 0
const W3D11 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D1-1"))
for(let i = 0; i < W3D11.length; i++){
  W3D11moeilijk += W3D11[i].moeilijk
  W3D11leuk += W3D11[i].leuk
}
let W3D11leukaverage = W3D11leuk / W3D11.length
let W3D11moeilijkaverage = W3D11moeilijk / W3D11.length

let W3D12moeilijk = 0
let W3D12leuk = 0
const W3D12 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D1-2"))
for(let i = 0; i < W3D12.length; i++){
  W3D12moeilijk += W3D12[i].moeilijk
  W3D12leuk += W3D12[i].leuk
}
let W3D12leukaverage = W3D12leuk / W3D12.length
let W3D12moeilijkaverage = W3D12moeilijk / W3D12.length

let W3D13moeilijk = 0
let W3D13leuk = 0
const W3D13 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D1-3"))
for(let i = 0; i < W3D13.length; i++){
  W3D13moeilijk += W3D13[i].moeilijk
  W3D13leuk += W3D13[i].leuk
}
let W3D13leukaverage = W3D13leuk / W3D13.length
let W3D13moeilijkaverage = W3D13moeilijk / W3D13.length

let W3D14moeilijk = 0
let W3D14leuk = 0
const W3D14 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D1-4"))
for(let i = 0; i < W3D14.length; i++){
  W3D14moeilijk += W3D14[i].moeilijk
  W3D14leuk += W3D14[i].leuk
}
let W3D14leukaverage = W3D14leuk / W3D14.length
let W3D14moeilijkaverage = W3D14moeilijk / W3D14.length

let W3D21moeilijk = 0
let W3D21leuk = 0
const W3D21 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D2-1"))
for(let i = 0; i < W3D21.length; i++){
  W3D21moeilijk += W3D21[i].moeilijk
  W3D21leuk += W3D21[i].leuk
}
let W3D21leukaverage = W3D21leuk / W3D21.length
let W3D21moeilijkaverage = W3D21moeilijk / W3D21.length

let W3D22moeilijk = 0
let W3D22leuk = 0
const W3D22 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D2-2"))
for(let i = 0; i < W3D22.length; i++){
  W3D22moeilijk += W3D22[i].moeilijk
  W3D22leuk += W3D22[i].leuk
}
let W3D22leukaverage = W3D22leuk / W3D22.length
let W3D22moeilijkaverage = W3D22moeilijk / W3D22.length

let W3D23moeilijk = 0
let W3D23leuk = 0
const W3D23 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D2-3"))
for(let i = 0; i < W3D23.length; i++){
  W3D23moeilijk += W3D23[i].moeilijk
  W3D23leuk += W3D23[i].leuk
}
let W3D23leukaverage = W3D23leuk / W3D23.length
let W3D23moeilijkaverage = W3D23moeilijk / W3D23.length

let W3D31moeilijk = 0
let W3D31leuk = 0
const W3D31 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D3-1"))
for(let i = 0; i < W3D31.length; i++){
  W3D31moeilijk += W3D31[i].moeilijk
  W3D31leuk += W3D31[i].leuk
}
let W3D31leukaverage = W3D31leuk / W3D31.length
let W3D31moeilijkaverage = W3D31moeilijk / W3D31.length

let W3D32moeilijk = 0
let W3D32leuk = 0
const W3D32 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D3-2"))
for(let i = 0; i < W3D32.length; i++){
  W3D32moeilijk += W3D32[i].moeilijk
  W3D32leuk += W3D32[i].leuk
}
let W3D32leukaverage = W3D32leuk / W3D32.length
let W3D32moeilijkaverage = W3D32moeilijk / W3D32.length

let W3D33moeilijk = 0
let W3D33leuk = 0
const W3D33 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D3-3"))
for(let i = 0; i < W3D33.length; i++){
  W3D33moeilijk += W3D33[i].moeilijk
  W3D33leuk += W3D33[i].leuk
}
let W3D33leukaverage = W3D33leuk / W3D33.length
let W3D33moeilijkaverage = W3D33moeilijk / W3D33.length

let W3D34moeilijk = 0
let W3D34leuk = 0
const W3D34 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D3-4"))
for(let i = 0; i < W3D34.length; i++){
  W3D34moeilijk += W3D34[i].moeilijk
  W3D34leuk += W3D34[i].leuk
}
let W3D34leukaverage = W3D34leuk / W3D34.length
let W3D34moeilijkaverage = W3D34moeilijk / W3D34.length

let W3D41moeilijk = 0
let W3D41leuk = 0
const W3D41 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D4-1"))
for(let i = 0; i < W3D41.length; i++){
  W3D41moeilijk += W3D41[i].moeilijk
  W3D41leuk += W3D41[i].leuk
}
let W3D41leukaverage = W3D41leuk / W3D41.length
let W3D41moeilijkaverage = W3D41moeilijk / W3D41.length

let W3D42moeilijk = 0
let W3D42leuk = 0
const W3D42 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D4-2"))
for(let i = 0; i < W3D42.length; i++){
  W3D42moeilijk += W3D42[i].moeilijk
  W3D42leuk += W3D42[i].leuk
}
let W3D42leukaverage = W3D42leuk / W3D42.length
let W3D42moeilijkaverage = W3D42moeilijk / W3D42.length

let W3D5moeilijk = 0
let W3D5leuk = 0
const W3D5 = data.filter(opdracht => opdracht["opdracht of project"].includes("W3D5"))
for(let i = 0; i < W3D5.length; i++){
  W3D5moeilijk += W3D5[i].moeilijk
  W3D5leuk += W3D5[i].leuk
}
let W3D5leukaverage = W3D5leuk / W3D5.length
let W3D5moeilijkaverage = W3D5moeilijk / W3D5.length

let W4D21moeilijk = 0
let W4D21leuk = 0
const W4D21 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D2-1"))
for(let i = 0; i < W4D21.length; i++){
  W4D21moeilijk += W4D21[i].moeilijk
  W4D21leuk += W4D21[i].leuk
}
let W4D21leukaverage = W4D21leuk / W4D21.length
let W4D21moeilijkaverage = W4D21moeilijk / W4D21.length

let W4D22moeilijk = 0
let W4D22leuk = 0
const W4D22 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D2-2"))
for(let i = 0; i < W4D22.length; i++){
  W4D22moeilijk += W4D22[i].moeilijk
  W4D22leuk += W4D22[i].leuk
}
let W4D22leukaverage = W4D22leuk / W4D22.length
let W4D22moeilijkaverage = W4D22moeilijk / W4D22.length

let W4D23moeilijk = 0
let W4D23leuk = 0
const W4D23 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D2-3"))
for(let i = 0; i < W4D23.length; i++){
  W4D23moeilijk += W4D23[i].moeilijk
  W4D23leuk += W4D23[i].leuk
}
let W4D23leukaverage = W4D23leuk / W4D23.length
let W4D23moeilijkaverage = W4D23moeilijk / W4D23.length

let W4D24moeilijk = 0
let W4D24leuk = 0
const W4D24 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D2-4"))
for(let i = 0; i < W4D24.length; i++){
  W4D24moeilijk += W4D24[i].moeilijk
  W4D24leuk += W4D24[i].leuk
}
let W4D24leukaverage = W4D24leuk / W4D24.length
let W4D24moeilijkaverage = W4D24moeilijk / W4D24.length

let W4D31moeilijk = 0
let W4D31leuk = 0
const W4D31 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3-1"))
for(let i = 0; i < W4D31.length; i++){
  W4D31moeilijk += W4D31[i].moeilijk
  W4D31leuk += W4D31[i].leuk
}
let W4D31leukaverage = W4D31leuk / W4D31.length
let W4D31moeilijkaverage = W4D31moeilijk / W4D31.length

let W4D32moeilijk = 0
let W4D32leuk = 0
const W4D32 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3-2"))
for(let i = 0; i < W4D32.length; i++){
  W4D32moeilijk += W4D32[i].moeilijk
  W4D32leuk += W4D32[i].leuk
}
let W4D32leukaverage = W4D32leuk / W4D32.length
let W4D32moeilijkaverage = W4D32moeilijk / W4D32.length

let W4D33moeilijk = 0
let W4D33leuk = 0
const W4D33 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3-3"))
for(let i = 0; i < W4D33.length; i++){
  W4D33moeilijk += W4D33[i].moeilijk
  W4D33leuk += W4D33[i].leuk
}
let W4D33leukaverage = W4D33leuk / W4D33.length
let W4D33moeilijkaverage = W4D33moeilijk / W4D33.length

let W4D34moeilijk = 0
let W4D34leuk = 0
const W4D34 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3-4"))
for(let i = 0; i < W4D34.length; i++){
  W4D34moeilijk += W4D34[i].moeilijk
  W4D34leuk += W4D34[i].leuk
}
let W4D34leukaverage = W4D34leuk / W4D34.length
let W4D34moeilijkaverage = W4D34moeilijk / W4D34.length

let W4D35moeilijk = 0
let W4D35leuk = 0
const W4D35 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3-5"))
for(let i = 0; i < W4D35.length; i++){
  W4D35moeilijk += W4D35[i].moeilijk
  W4D35leuk += W4D35[i].leuk
}
let W4D35leukaverage = W4D35leuk / W4D35.length
let W4D35moeilijkaverage = W4D35moeilijk / W4D35.length

let W4D36moeilijk = 0
let W4D36leuk = 0
const W4D36 = data.filter(opdracht => opdracht["opdracht of project"].includes("W4D3 - Project - Next-Level CSS"))
for(let i = 0; i < W4D36.length; i++){
  W4D36moeilijk += W4D36[i].moeilijk
  W4D36leuk += W4D36[i].leuk
}
let W4D36leukaverage = W4D36leuk / W4D36.length
let W4D36moeilijkaverage = W4D36moeilijk / W4D36.length

let W5D4moeilijk = 0
let W5D4leuk = 0
const W5D4 = data.filter(opdracht => opdracht["opdracht of project"].includes("W5D4"))
for(let i = 0; i < W5D4.length; i++){
  W5D4moeilijk += W5D4[i].moeilijk
  W5D4leuk += W5D4[i].leuk
}
let W5D4leukaverage = W5D4leuk / W5D4.length
let W5D4moeilijkaverage = W5D4moeilijk / W5D4.length

let W5D5moeilijk = 0
let W5D5leuk = 0
const W5D5 = data.filter(opdracht => opdracht["opdracht of project"].includes("W5D5"))
for(let i = 0; i < W5D5.length; i++){
  W5D5moeilijk += W5D5[i].moeilijk
  W5D5leuk += W5D5[i].leuk
}
let W5D5leukaverage = W5D5leuk / W5D5.length
let W5D5moeilijkaverage = W5D5moeilijk / W5D5.length

let W6D1moeilijk = 0
let W6D1leuk = 0
const W6D1 = data.filter(opdracht => opdracht["opdracht of project"].includes("W6D1"))
for(let i = 0; i < W6D1.length; i++){
  W6D1moeilijk += W6D1[i].moeilijk
  W6D1leuk += W6D1[i].leuk
}
let W6D1leukaverage = W6D1leuk / W6D1.length
let W6D1moeilijkaverage = W6D1moeilijk / W6D1.length

let W6D21moeilijk = 0
let W6D21leuk = 0
const W6D21 = data.filter(opdracht => opdracht["opdracht of project"].includes("W6D2-1"))
for(let i = 0; i < W6D21.length; i++){
  W6D21moeilijk += W6D21[i].moeilijk
  W6D21leuk += W6D21[i].leuk
}
let W6D21leukaverage = W6D21leuk / W6D21.length
let W6D21moeilijkaverage = W6D21moeilijk / W6D21.length

let W6D22moeilijk = 0
let W6D22leuk = 0
const W6D22 = data.filter(opdracht => opdracht["opdracht of project"].includes("W6D2 - Project - Eindopdracht"))
for(let i = 0; i < W6D22.length; i++){
  W6D22moeilijk += W6D22[i].moeilijk
  W6D22leuk += W6D22[i].leuk
}
let W6D22leukaverage = W6D22leuk / W6D22.length
let W6D22moeilijkaverage = W6D22moeilijk / W6D22.length


let Average = [
  {opdracht: "SCRUM", leuk: scrumleukaverage, moeilijk: scrummoeilijkaverage},
  {opdracht: "W1D1", leuk: W1D1leukaverage, moeilijk: W1D1moeilijkaverage},
  {opdracht: "W1D2-1", leuk: W1D21leukaverage, moeilijk: W1D21moeilijkaverage},
  {opdracht: "W1D2-2", leuk: W1D22leukaverage, moeilijk: W1D22moeilijkaverage},
  {opdracht: "W1D2-3", leuk: W1D23leukaverage, moeilijk: W1D23moeilijkaverage},
  {opdracht: "W1D2-4", leuk: W1D24leukaverage, moeilijk: W1D24moeilijkaverage},
  {opdracht: "W1D2-5", leuk: W1D25leukaverage, moeilijk: W1D25moeilijkaverage},
  {opdracht: "W1D3-1", leuk: W1D31leukaverage, moeilijk: W1D31moeilijkaverage},
  {opdracht: "W1D3-2", leuk: W1D32leukaverage, moeilijk: W1D32moeilijkaverage},
  {opdracht: "W1D3-4", leuk: W1D34leukaverage, moeilijk: W1D34moeilijkaverage},
  {opdracht: "W1D3-5", leuk: W1D35leukaverage, moeilijk: W1D35moeilijkaverage},
  {opdracht: "W1D3-6", leuk: W1D36leukaverage, moeilijk: W1D36moeilijkaverage},
  {opdracht: "W1D4-1", leuk: W1D41leukaverage, moeilijk: W1D41moeilijkaverage},
  {opdracht: "W1D4-2", leuk: W1D42leukaverage, moeilijk: W1D42moeilijkaverage},
  {opdracht: "W1D5", leuk: W1D5leukaverage, moeilijk: W1D5moeilijkaverage},
  {opdracht: "W2D1-1", leuk: W2D11leukaverage, moeilijk: W2D11moeilijkaverage},
  {opdracht: "W2D1-2", leuk: W2D12leukaverage, moeilijk: W2D12moeilijkaverage},
  {opdracht: "W2D2-1", leuk: W2D21leukaverage, moeilijk: W2D21moeilijkaverage},
  {opdracht: "W2D2-2", leuk: W2D22leukaverage, moeilijk: W2D22moeilijkaverage},
  {opdracht: "W2D2-3", leuk: W2D23leukaverage, moeilijk: W2D23moeilijkaverage},
  {opdracht: "W2D3-1", leuk: W2D31leukaverage, moeilijk: W2D31moeilijkaverage},
  {opdracht: "W2D3-2", leuk: W2D32leukaverage, moeilijk: W2D32moeilijkaverage},
  {opdracht: "W2D3-3", leuk: W2D33leukaverage, moeilijk: W2D33moeilijkaverage},
  {opdracht: "W2D4-1", leuk: W2D41leukaverage, moeilijk: W2D41moeilijkaverage},
  {opdracht: "W2D4-2", leuk: W2D42leukaverage, moeilijk: W2D42moeilijkaverage},
  {opdracht: "W2D4-3", leuk: W2D43leukaverage, moeilijk: W2D43moeilijkaverage},
  {opdracht: "W2D5", leuk: W2D5leukaverage, moeilijk: W2D5moeilijkaverage},
  {opdracht: "W3D1-1", leuk: W3D11leukaverage, moeilijk: W3D11moeilijkaverage},
  {opdracht: "W3D1-2", leuk: W3D12leukaverage, moeilijk: W3D12moeilijkaverage},
  {opdracht: "W3D1-3", leuk: W3D13leukaverage, moeilijk: W3D13moeilijkaverage},
  {opdracht: "W3D1-4", leuk: W3D14leukaverage, moeilijk: W3D14moeilijkaverage},
  {opdracht: "W3D2-1", leuk: W3D21leukaverage, moeilijk: W3D21moeilijkaverage},
  {opdracht: "W3D2-2", leuk: W3D22leukaverage, moeilijk: W3D22moeilijkaverage},
  {opdracht: "W3D2-3", leuk: W3D23leukaverage, moeilijk: W3D23moeilijkaverage},
  {opdracht: "W3D3-1", leuk: W3D31leukaverage, moeilijk: W3D31moeilijkaverage},
  {opdracht: "W3D3-2", leuk: W3D32leukaverage, moeilijk: W3D32moeilijkaverage},
  {opdracht: "W3D3-3", leuk: W3D33leukaverage, moeilijk: W3D33moeilijkaverage},
  {opdracht: "W3D3-4", leuk: W3D34leukaverage, moeilijk: W3D34moeilijkaverage},
  {opdracht: "W3D4-1", leuk: W3D41leukaverage, moeilijk: W3D41moeilijkaverage},
  {opdracht: "W3D4-2", leuk: W3D42leukaverage, moeilijk: W3D42moeilijkaverage},
  {opdracht: "W3D5", leuk: W3D5leukaverage, moeilijk: W3D5moeilijkaverage},
  {opdracht: "W4D2-1", leuk: W4D21leukaverage, moeilijk: W4D21moeilijkaverage},
  {opdracht: "W4D2-2", leuk: W4D22leukaverage, moeilijk: W4D22moeilijkaverage},
  {opdracht: "W4D2-3", leuk: W4D23leukaverage, moeilijk: W4D23moeilijkaverage},
  {opdracht: "W4D2-4", leuk: W4D24leukaverage, moeilijk: W4D24moeilijkaverage},
  {opdracht: "W4D3-1", leuk: W4D31leukaverage, moeilijk: W4D31moeilijkaverage},
  {opdracht: "W4D3-2", leuk: W4D32leukaverage, moeilijk: W4D32moeilijkaverage},
  {opdracht: "W4D3-3", leuk: W4D33leukaverage, moeilijk: W4D33moeilijkaverage},
  {opdracht: "W4D3-4", leuk: W4D34leukaverage, moeilijk: W4D34moeilijkaverage},
  {opdracht: "W4D3-5", leuk: W4D35leukaverage, moeilijk: W4D35moeilijkaverage},
  {opdracht: "W4D3-6", leuk: W4D36leukaverage, moeilijk: W4D36moeilijkaverage},
  {opdracht: "W5D4", leuk: W5D4leukaverage, moeilijk: W5D4moeilijkaverage},
  {opdracht: "W5D5", leuk: W5D5leukaverage, moeilijk: W5D5moeilijkaverage},
  {opdracht: "W6D1", leuk: W6D1leukaverage, moeilijk: W6D1moeilijkaverage},
  {opdracht: "W6D2-1", leuk: W6D21leukaverage, moeilijk: W6D21moeilijkaverage},
  {opdracht: "eind", leuk: W6D22leukaverage, moeilijk: W6D22moeilijkaverage}
]

export default Average