const form = document.querySelector('#form')
const employees = document.querySelector('#employeeList')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const firstname = formData.get('firstname') //input name ='fullname'
    const lastname = formData.get('lastname') //input name ='lastname'
    const email = formData.get('email') //input name ='email'
    const hire_date = formData.get('hire_date') //input name ='hire_date'
    const photo = formData.get('photo') //input name ='photo'
    createEmployee(photo, firstname, lastname, email, hire_date)
})

function createEmployee(photo, name, lastName, email, date) {
    const tableRow = document.createElement('tr')
    const tdBtn = document.createElement('td')
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    tableRow.innerHTML = `
        <td><img src="./images/${photo.name}" alt="${photo.name}"></td>
        <td>${name}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${date}</td>
    `
    tdBtn.appendChild(deleteBtn)
    tableRow.appendChild(tdBtn)
    employees.appendChild(tableRow)
    deleteBtn.addEventListener('click', () => {
        if (confirm(`Do you want to delete ${name} ${lastName} employee?`) === true) {
            tableRow.remove()
        }
    })
}

// if(confirm('Are you sure?') === true) {

// }