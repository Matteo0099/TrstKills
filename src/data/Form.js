var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");

form.addEventListener("submit", function (e) {
  setTimeout(function () {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});

// Disable the submit button if any required field is empty
var requiredFields = form.querySelectorAll("[required]");
requiredFields.forEach(function (field) {
  field.addEventListener("input", function () {
    var isFormValid = true;
    requiredFields.forEach(function (reqField) {
      if (!reqField.value.trim()) {
        isFormValid = false;
      }
    });
    submitButton.disabled = !isFormValid;
  });
});

var data_js = {
  "access_token": "vbq9cm5xi8qbxuhx731l2o2c"
};

function js_onSuccess() {
  // Remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
  // Remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

function js_send() {
  submitButton.value = 'Sending…';
  submitButton.disabled = true;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      js_onSuccess();
    } else if (request.readyState == 4) {
      js_onError(request.response);
    }
  };

  // Get values from the form fields
  var subject = document.querySelector("#email_form [name='product']").value;
  var message = document.querySelector("#email_form [name='text']").value;
  var name = document.querySelector("#email_form [name='name']").value;
  var yourEmail = document.querySelector("#email_form [name='reply_to']").value;

  // Assign values to data_js
  data_js['subject'] = subject;
  data_js['text'] = "Name: " + name + "\nYour Email: " + yourEmail + "\n\n" + message;

  var params = toParams(data_js);
  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);

  return false;
}

submitButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
  }

  return form_data.join("&");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
