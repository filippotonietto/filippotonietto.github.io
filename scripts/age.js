function calculateAge() {
    const birthDate = new Date(2001, 2, 16);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.getElementById('ageValue').textContent = `${calculateAge()}`;