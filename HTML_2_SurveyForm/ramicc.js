function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const gender = Array.from(genderElements).filter(e => e.checked).map(e => e.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    document.getElementById('popupFirstName').textContent = firstName;
    document.getElementById('popupLastName').textContent = lastName;
    document.getElementById('popupDob').textContent = dob;
    document.getElementById('popupCountry').textContent = country;
    document.getElementById('popupGender').textContent = gender;
    document.getElementById('popupProfession').textContent = profession;
    document.getElementById('popupEmail').textContent = email;
    document.getElementById('popupMobile').textContent = mobile;
}

document.getElementById('closePopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('surveyForm').reset();
});

document.getElementById('submitBtn').addEventListener('click', function() {
    if (document.getElementById('surveyForm').checkValidity()) {
        showPopup();
    } else {
        alert('Please fill out all the required fields.');
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('surveyForm').reset();
});