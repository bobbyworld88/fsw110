function submitForm() {
    let nameInput = document.getElementById("name1").value;
    let emailInput = document.getElementById("email1").value;
    let messageInput = document.getElementById("message1").value;
    alert(
      "Name : " +
        nameInput +
        "\nE-mail : " +
        emailInput +
        "\nMessage : " +
        messageInput +
        ""
    );
    document.contact - form.submit();
  }
  
  function clearText() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  