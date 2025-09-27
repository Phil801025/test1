function updateSensorData(sensorId) {
    const tempSpan = document.getElementById(`${sensorId}-temp`);
    if (tempSpan) {
        const newTemp = (Math.random() * 10 + 20).toFixed(1); // Random temp between 20 and 30
        tempSpan.textContent = newTemp;
        console.log(`Updated ${sensorId} temperature to ${newTemp}°C`);
    }
}

function toggleActuator(actuatorId) {
    const statusSpan = document.getElementById(`${actuatorId}-status`);
    if (statusSpan) {
        if (statusSpan.textContent === 'Off') {
            statusSpan.textContent = 'On';
            statusSpan.style.color = 'green';
            console.log(`${actuatorId} turned On`);
        } else {
            statusSpan.textContent = 'Off';
            statusSpan.style.color = 'red';
            console.log(`${actuatorId} turned Off`);
        }
    }
}