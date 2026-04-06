// QR Code utility functions
window.qrCodeUtils = {
    downloadQRCode: function (base64Data, fileName) {
        const link = document.createElement('a');
        link.href = 'data:image/png;base64,' + base64Data;
        link.download = fileName || 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    printQRCode: function (base64Data, title) {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Print QR Code - ${title}</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 20px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            font-family: Arial, sans-serif;
                        }
                        .qr-container {
                            text-align: center;
                            page-break-inside: avoid;
                        }
                        h1 {
                            margin-bottom: 20px;
                            color: #333;
                        }
                        img {
                            max-width: 400px;
                            border: 2px solid #ddd;
                            padding: 20px;
                            background: white;
                        }
                        .instructions {
                            margin-top: 20px;
                            padding: 15px;
                            background: #f0f9ff;
                            border: 1px solid #bfdbfe;
                            border-radius: 8px;
                            max-width: 500px;
                        }
                        @media print {
                            .no-print {
                                display: none;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="qr-container">
                        <h1>${title}</h1>
                        <img src="data:image/png;base64,${base64Data}" alt="QR Code" />
                        <div class="instructions">
                            <h3>How to Check In:</h3>
                            <ol style="text-align: left;">
                                <li>Scan this QR code with your mobile phone camera</li>
                                <li>Fill in your details on the check-in form</li>
                                <li>Submit to receive your queue number</li>
                                <li>Wait for your number to be called</li>
                            </ol>
                        </div>
                    </div>
                    <button onclick="window.print()" class="no-print" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Print</button>
                </body>
                </html>
            `);
            printWindow.document.close();
        }
    }
};
