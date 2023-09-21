function handleGetFormData() {
    // Mengambil nilai dari inputan menggunakan DOM method getElementById
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    // Membuat objek dengan properti yang sesuai
    const formData = {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };

    // Mengembalikan objek formData
    return formData;
}

// Contoh penggunaan function
document.getElementById('submit-form').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form submit (untuk contoh ini)
    
    const formData = handleGetFormData();
    console.log(formData); // Output objek formData ke konsol
});

function isNumber(inputString) {
    // Menggunakan regular expression untuk memeriksa apakah string hanya mengandung angka
    const regex = /^[0-9]+$/;
    return regex.test(inputString);
}

// Contoh penggunaan function
console.log(isNumber("12345")); // Output: true
console.log(isNumber("abc123")); // Output: false
console.log(isNumber("9876543210")); // Output: true
console.log(isNumber("123 456")); // Output: false

function checkboxIsChecked() {
    const statusCheckbox = document.getElementById('status');
    return statusCheckbox.checked;
}

// Contoh penggunaan function
document.getElementById('submit-form').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form submit (untuk contoh ini)
    
    const isChecked = checkboxIsChecked();
    console.log(isChecked); // Output true jika dicentang, false jika tidak
});

function validateFormData(objek) {
if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
return true;
}
return false;
}

// Function yang akan dipanggil saat form disubmit
function submitForm(event) {
    event.preventDefault(); // Mencegah refresh halaman saat form disubmit

    // Lakukan aksi yang diperlukan saat form disubmit di sini
    console.log("Form submitted!");
}

function submit(){
  if(validateFormData(handleGetFormData())){
    warningMessage.innerHTML = ''
  } else {
    warningMessage.innerHTML = 'Periksa form anda sekali lagi'
  }
}

const warningMessage = document.getElementById("warning");

'submit', function(event){
 event.preventDefault()
 submit()
}