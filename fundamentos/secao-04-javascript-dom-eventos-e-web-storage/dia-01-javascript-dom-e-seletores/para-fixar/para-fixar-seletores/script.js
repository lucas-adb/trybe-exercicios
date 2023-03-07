// document.querySelectorAll(h1)

const headerContainer = document.querySelector('#header-container');
headerContainer.style.backgroundColor = '#022C16'; 

const footerContainer = document.querySelector('#footer-container');
footerContainer.style.backgroundColor = '#022C16'; 

const emergencyTasks = document.querySelectorAll('.emergency-tasks');
emergencyTasks[0].style.border = '1px solid #b4b9c0';
emergencyTasks[0].style.borderRadius = '5px';
emergencyTasks[0].style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
emergencyTasks[0].style.backgroundColor = '#704488';

const h3 = document.querySelectorAll('h3');
for (let index = 0; index < h3.length; index += 1) {
    h3[index].style.color = '#FFFFFF';
}

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');
noEmergencyTasks[0].style.border = '1px solid #b4b9c0';
noEmergencyTasks[0].style.borderRadius = '5px';
noEmergencyTasks[0].style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
noEmergencyTasks[0].style.backgroundColor = '#10433D';

const body = document.querySelector('#container');
body.style.fontFamily = "Trebuchet MS";