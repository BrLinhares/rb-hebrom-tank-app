const BB = {
  100:0.009,200:0.015,300:0.033,400:0.126,500:0.325,600:0.593,
  700:0.941,800:1.375,900:1.912,1000:2.482,1100:3.080,1200:4.432,
  1300:5.096,1400:5.702,1500:6.384,1600:7.072,1700:7.764,1800:8.459,
  1900:9.157,2000:9.856,2100:10.557,2200:11.261,2300:11.967,
  2400:12.677,2500:13.386,2600:14.098,2700:14.810,2800:16.315,2900:16.830
};

const BE = {
  100:0.01,200:0.029,300:0.076,400:0.188,500:0.306,600:0.472,
  700:0.671,800:1.013,900:1.435,1000:1.942,1100:2.553,1200:3.197,
  1300:3.968,1400:4.573,1500:5.294,1600:6.032,1700:6.785,
  1800:7.541,1900:8.303,2000:9.069,2100:9.837,2200:10.604,
  2300:11.381,2400:12.156,2500:12.934,2600:13.714,2700:14.497,
  2800:15.280,2900:16.066,3000:16.856,3100:18.430,3200:18.914
};

function interpolar(valor, tabela){
  const keys = Object.keys(tabela).map(Number).sort((a,b)=>a-b);

  for(let i=0; i<keys.length-1; i++){
    if(valor >= keys[i] && valor <= keys[i+1]){
      let x1 = keys[i];
      let x2 = keys[i+1];
      let y1 = tabela[x1];
      let y2 = tabela[x2];

      return y1 + ((valor - x1) * (y2 - y1) / (x2 - x1));
    }
  }
  return null;
}

function calcular(){
  let metro = parseFloat(document.getElementById("metro").value);

  if(isNaN(metro)){
    alert("Digite um valor válido!");
    return;
  }

  let mm = metro * 1000;

  let tanque = document.getElementById("tanque").value;
  let tabela = tanque === "BB" ? BB : BE;

  let volumeM3 = interpolar(mm, tabela);

  if(volumeM3 === null){
    document.getElementById("resultado").innerText = "Fora da tabela";
    return;
  }

  let litros = volumeM3 * 1000;

  document.getElementById("resultado").innerText =
    litros.toFixed(0) + " Litros";
}