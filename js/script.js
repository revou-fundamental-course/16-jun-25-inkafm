//Menu Segitiga//
function showCard(card) {
  document.getElementById('card-luas').style.display = card === 'luas' ? 'block' : 'none';
  document.getElementById('card-keliling').style.display = card === 'keliling' ? 'block' : 'none';
  document.getElementById('btn-luas').classList.toggle('active', card === 'luas');
  document.getElementById('btn-keliling').classList.toggle('active', card === 'keliling');
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(alas) || isNaN(tinggi)) return;
  const luas = 0.5 * alas * tinggi;
  document.getElementById('hasil-luas').textContent = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function hitungKeliling() {
  const a = parseFloat(document.getElementById('sisi-a').value);
  const b = parseFloat(document.getElementById('sisi-b').value);
  const c = parseFloat(document.getElementById('sisi-c').value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return;
  const keliling = a + b + c;
  document.getElementById('hasil-keliling').textContent = `K = ${a} + ${b} + ${c} = ${keliling}`;
}

function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-luas').textContent = '';
  } else {
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';
    document.getElementById('hasil-keliling').textContent = '';
  }
}

//Menu Persegi//
function hitungLuas() {
  const sisi = parseFloat(document.getElementById("sisiL").value);
  const hasil = sisi * sisi;
  document.getElementById("hasilLuas").textContent = `Luas = ${hasil}`;
}
function hitungKeliling() {
  const sisi = parseFloat(document.getElementById("sisiK").value);
  const hasil = 4 * sisi;
  document.getElementById("hasilKeliling").textContent = `Keliling = ${hasil}`;
}
function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('sisiL').value = '';
    document.getElementById('hasilLuas').textContent = '';
  } else {
    document.getElementById('sisiK').value = '';
    document.getElementById('hasilKeliling').textContent = '';
  }
}

//Menu Persegi Panjang//
function hitungLuas() {
  const p = parseFloat(document.getElementById("panjangL").value);
  const l = parseFloat(document.getElementById("lebarL").value);
  document.getElementById("hasilLuas").textContent = `Luas = ${p * l}`;
}
function hitungKeliling() {
  const p = parseFloat(document.getElementById("panjangK").value);
  const l = parseFloat(document.getElementById("lebarK").value);
  document.getElementById("hasilKeliling").textContent = `Keliling = ${2 * (p + l)}`;
}
function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('panjangL').value = '';
    document.getElementById('lebarL').value = '';
    document.getElementById('hasilLuas').textContent = '';
  } else {
    document.getElementById('panjangK').value = '';
    document.getElementById('lebarK').value = '';
    document.getElementById('hasilKeliling').textContent = '';
  }
}

//Menu Trapesium//
function hitungLuas() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const t = parseFloat(document.getElementById("t").value);
  document.getElementById("hasilLuas").textContent = `Luas = ${(0.5 * (a + b) * t).toFixed(2)}`;
}
function hitungKeliling() {
  const a = parseFloat(document.getElementById("ka").value);
  const b = parseFloat(document.getElementById("kb").value);
  const c = parseFloat(document.getElementById("kc").value);
  const d = parseFloat(document.getElementById("kd").value);
  document.getElementById("hasilKeliling").textContent = `Keliling = ${a + b + c + d}`;
}
function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('t').value = '';
    document.getElementById('hasilLuas').textContent = '';
  } else {
    document.getElementById('ka').value = '';
    document.getElementById('kb').value = '';
    document.getElementById('kc').value = '';
    document.getElementById('kd').value
    document.getElementById('hasilKeliling').textContent = '';
  }
}

//Menu Jajar Genjang//
function hitungLuas() {
  const a = parseFloat(document.getElementById("alas").value);
  const t = parseFloat(document.getElementById("tinggi").value);
  document.getElementById("hasilLuas").textContent = `Luas = ${a * t}`;
}
function hitungKeliling() {
  const a = parseFloat(document.getElementById("ka").value);
  const m = parseFloat(document.getElementById("km").value);
  document.getElementById("hasilKeliling").textContent = `Keliling = ${2 * (a + m)}`;
}
function resetForm(type) {
  if (type === 'luas') {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas').textContent = '';
  } else {
    document.getElementById('ka').value = '';
    document.getElementById('km').value = '';
    document.getElementById('hasilKeliling').textContent = '';
  } 
}

//Menu Layang-Layang//
function hitungLuas() {
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  document.getElementById("hasilLuas").textContent = `Luas = ${(0.5 * d1 * d2).toFixed(2)}`;
}
function hitungKeliling() {
  const a = parseFloat(document.getElementById('sisi-a').value);
  const b = parseFloat(document.getElementById('sisi-b').value);
  const c = parseFloat(document.getElementById('sisi-c').value);
  const d = parseFloat(document.getElementById('sisi-d').value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return;
  const keliling = a + b + c;
  document.getElementById('hasilKeliling').textContent = `K = ${a} + ${b} + ${c} = ${keliling}`;
}

function resetForm(type) {
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