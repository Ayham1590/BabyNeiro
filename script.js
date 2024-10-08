document.getElementById('copy-button').addEventListener('click', function () {
    const contractAddress = document.getElementById('contract-address').innerText;
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Copied to clipboard: ' + contractAddress);
    });
});