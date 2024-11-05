const form = document.getElementById("create-customer")
const lastname_input = document.getElementById("last-name")
const firstname_input = document.getElementById("first-name")
const email_input = document.getElementById("email")
const password_input = document.getElementById("password")

const error_message = document.getElementById("error-message")

form.addEventListener("submit", (e) => {
    let errors = []

    errors = getSignUpFormErrors(lastname_input.value, firstname_input.value, email_input.value, password_input.value)

    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join("\n")
    }
})

function getSignUpFormErrors(lastname, firstname, email, password) {
    let errors = []
    if (lastname === "" || lastname == null) {
        errors.push("Lastname is required")
        lastname_input.classList.add("incorrect")
    }
    if (firstname === "" || firstname == null) {
        errors.push("Firstname is required")
        firstname_input.classList.add("incorrect")
    }
    if (email === "" || email == null) {
        errors.push("Email is required")
        email_input.classList.add("incorrect")
    } else {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if (!email.match(pattern)) {
            errors.push("Invalid email form")
        }
    }
    if (password === "" || password == null) {
        errors.push("Password is required")
        password_input.classList.add("incorrect")
    } else if (password.length < 8) {
        errors.push("Password must have at least 8 characters")
        password_input.classList.add("incorrect")
    }

    return errors
}

email_input.addEventListener("keyup", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (email_input.value.match(pattern)) {
        if (email_input.classList.contains("incorrect")) {
            email_input.classList.remove("incorrect")
        }
    } else {
        email_input.classList.add("incorrect")
    }
})

const allInputs = [lastname_input, firstname_input, password_input]

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.classList.contains("incorrect")) {
            input.classList.remove("incorrect")
            error_message.innerText = ""
        }
    })
})