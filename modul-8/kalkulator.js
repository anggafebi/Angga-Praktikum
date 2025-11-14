function hitung(operator) {
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    let hasil = 0;
    
    if (isNaN(bil1) || isNaN(bil2)) {
        document.getElementById('hasil').value = "Input harus angka!";
        return;
    }

    switch (operator) {
        case '+':
            hasil = bil1 + bil2;
            break;
        case '-':
            hasil = bil1 - bil2;
            break;
        case '*':
            hasil = bil1 * bil2;
            break;
        case '/':
            
            if (bil2 === 0) {
                hasil = "Tidak bisa dibagi 0";
            } else {
                hasil = bil1 / bil2;
            }
            break;
    }

    // Tampilkan hasil
    document.getElementById('hasil').value = hasil;
}
