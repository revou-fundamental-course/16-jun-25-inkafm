//Menu Segitiga//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}

function hitungLuas1() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(alas) || isNaN(tinggi)) return;
  const luas = 0.5 * alas * tinggi;
  document.getElementById('hasilLuas1').textContent = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function hitungKeliling1() {
  const a = parseFloat(document.getElementById('sisi-a').value);
  const b = parseFloat(document.getElementById('sisi-b').value);
  const c = parseFloat(document.getElementById('sisi-c').value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return;
  const keliling = a + b + c;
  document.getElementById('hasilKeliling1').textContent = `K = ${a} + ${b} + ${c} = ${keliling}`;
}

function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas1').textContent = '';
  } else {
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';
    document.getElementById('hasilKeliling1').textContent = '';
  }
}

//Menu Persegi//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}
function hitungLuas2() {
  const sisi = parseFloat(document.getElementById("sisiL").value);
  if (isNaN(sisiL)) return;
  const luas = sisi * sisi;
  document.getElementById("hasilLuas2").textContent = `L = ${sisi} × ${sisi} = ${luas}`;
}
function hitungKeliling2() {
  const sisi = parseFloat(document.getElementById("sisiK").value);
  const keliling = 4 * sisi;
  document.getElementById("hasilKeliling2").textContent = `K = 4 × ${sisi} = ${keliling}`;
}
function resetForm2(type) {
  if (type === 'luas') {
    document.getElementById('sisiL').value = '';
    document.getElementById('hasilLuas2').textContent = '';
  } else {
    document.getElementById('sisiK').value = '';
    document.getElementById('hasilKeliling2').textContent = '';
  }
}

//Menu Persegi Panjang//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}
function hitungLuas3() {
  const p = parseFloat(document.getElementById("panjangL").value);
  const l = parseFloat(document.getElementById("lebarL").value);
  if (isNaN(p) || isNaN(l)) return;
  document.getElementById("hasilLuas3").textContent = `L = ${p} × ${l} = ${p * l}`;
}
function hitungKeliling3() {
  const p = parseFloat(document.getElementById("panjangK").value);
  const l = parseFloat(document.getElementById("lebarK").value);
  if (isNaN(p) || isNaN(l)) return;
  document.getElementById("hasilKeliling3").textContent = `K = 2 × (${p} + ${l}) = ${2 * (p + l)}`;
}
function resetForm3(type) {
  if (type === 'luas') {
    document.getElementById('panjangL').value = '';
    document.getElementById('lebarL').value = '';
    document.getElementById('hasilLuas3').textContent = '';
  } else {
    document.getElementById('panjangK').value = '';
    document.getElementById('lebarK').value = '';
    document.getElementById('hasilKeliling3').textContent = '';
  }
}

//Menu Trapesium//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}
function hitungLuas4() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const t = parseFloat(document.getElementById("t").value);
  if (isNaN(a) || isNaN(b) || isNaN(t)) return;
  document.getElementById("hasilLuas4").textContent = `L = ½ × (${a} + ${b}) = ${(0.5 * (a + b) * t).toFixed(2)}`;
}
function hitungKeliling4() {
  const a = parseFloat(document.getElementById("ka").value);
  const b = parseFloat(document.getElementById("kb").value);
  const c = parseFloat(document.getElementById("kc").value);
  const d = parseFloat(document.getElementById("kd").value);
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) return;
  document.getElementById("hasilKeliling4").textContent = `K = ${a} + ${b} + ${c} + ${d} = ${a + b + c + d}`;
}
function resetForm4(type) {
  if (type === 'luas') {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('t').value = '';
    document.getElementById('hasilLuas4').textContent = '';
  } else {
    document.getElementById('ka').value = '';
    document.getElementById('kb').value = '';
    document.getElementById('kc').value = '';
    document.getElementById('kd').value
    document.getElementById('hasilKeliling4').textContent = '';
  }
}

//Menu Jajar Genjang//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}
function hitungLuas5() {
  const a = parseFloat(document.getElementById("alas").value);
  const t = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(a) || isNaN(t)) return;
  document.getElementById("hasilLuas5").textContent = `L= ${a} × ${t} = ${a * t}`;
}
function hitungKeliling5() {
  const a = parseFloat(document.getElementById("ka").value);
  const m = parseFloat(document.getElementById("km").value);
  if (isNaN(a) || isNaN(m)) return;
  document.getElementById("hasilKeliling5").textContent = `K = 2 × (${a} + ${m}) = ${2 * (a + m)}`;
}
function resetForm5(type) {
  if (type === 'luas') {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas5').textContent = '';
  } else {
    document.getElementById('ka').value = '';
    document.getElementById('km').value = '';
    document.getElementById('hasilKeliling5').textContent = '';
  } 
}

//Menu Layang-Layang//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}
function hitungLuas6() {
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  if (isNaN(d1) || isNaN(d2)) return;
  document.getElementById("hasilLuas").textContent = `L =  ½ × ${d1} × ${d2} = ${(0.5 * d1 * d2).toFixed(2)}`;
}
function hitungKeliling6() {
  const a = parseFloat(document.getElementById('sisi-a').value);
  const b = parseFloat(document.getElementById('sisi-b').value);
  const c = parseFloat(document.getElementById('sisi-c').value);
  const d = parseFloat(document.getElementById('sisi-d').value);
  if (isNaN(a) || isNaN(b) || isNaN(c) ||isNaN(d)) return;
  const keliling = a + b + c + d;
  document.getElementById('hasilKeliling').textContent = `K = ${a} + ${b} + ${c} ${d} = ${keliling}`;
}

function resetForm6(type) {
  if (type === 'luas') {
    document.getElementById('d1').value = '';
    document.getElementById('d2').value = '';
    document.getElementById('hasilLuas').textContent = '';
  } else {
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';
    document.getElementById('sisi-d').value = '';
    document.getElementById('hasilKeliling').textContent = '';
  }
}