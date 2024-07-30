document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'aakanto.zip'; // Replace with the URL of your file
    link.download = 'aakanto.zip'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
