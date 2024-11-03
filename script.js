document.getElementById('btn-calculate').addEventListener('click', function() {
    // Get input values
    const date = document.getElementById('input-data').value;
    const quantity = parseInt(document.getElementById('input-quantity').value);
    const price = parseInt(document.getElementById('input-price').value);

    // Calculate total before discount
    const totalBeforeDiscount = quantity * price;
    
    // Initialize discount percentage
    let discountPercentage = 0;
    let discountDescription = '';

    // Determine discount based on total purchase
    if (totalBeforeDiscount >= 200000) {
        discountPercentage = 0.15; // 15% discount
        discountDescription = '15% (Pembelian di atas Rp 200,000)';
    } else if (totalBeforeDiscount >= 100000) {
        discountPercentage = 0.1; // 10% discount
        discountDescription = '10% (Pembelian di atas Rp 100,000)';
    } else if (totalBeforeDiscount >= 50000) {
        discountPercentage = 0.05; // 5% discount
        discountDescription = '5% (Pembelian di atas Rp 50,000)';
    }

    // Calculate additional weekend discount
    const orderDate = new Date(date);
    const isWeekend = orderDate.getDay() === 0 || orderDate.getDay() === 6;
    if (isWeekend) {
        discountPercentage += 0.05; // Additional 5% weekend discount
        discountDescription += ' + 5% (Weekend Bonus)';
    }

    // Calculate final amounts
    const discountAmount = totalBeforeDiscount * discountPercentage;
    const finalTotal = totalBeforeDiscount - discountAmount;

    // Display results with detailed calculation
    const resultElement = document.getElementById('result');
    const discountElement = document.getElementById('discount');

    resultElement.innerHTML = `
        <strong>Detail Perhitungan:</strong><br>
        Jumlah: ${quantity}<br>
        Harga: Rp ${price.toLocaleString('id-ID')}<br>
        Total: Rp ${totalBeforeDiscount.toLocaleString('id-ID')}<br>
        <strong>Total Akhir: Rp ${finalTotal.toLocaleString('id-ID')}</strong>
    `;

    discountElement.innerHTML = `
        <strong>Diskon yang diperoleh:</strong><br>
        ${discountDescription}<br>
        Jumlah Diskon: Rp ${discountAmount.toLocaleString('id-ID')}
    `;
}); 