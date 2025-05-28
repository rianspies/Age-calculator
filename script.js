
const currentDate = new Date(Date.now());

const handleClick = () =>{
    const dob = document.getElementById('dob').value;
    const dobParse = Date.parse(dob);
    const dobDate = new Date(dobParse);
    const currentYear = currentDate.getFullYear();
    const dobYear = dobDate.getFullYear();
    const age = currentYear - dobYear;
    document.getElementById('age').innerHTML = `You are currently ${age} years old`
}