





//$("#btnChangePassword").click(function () {


/// prueba
//    $("#frmChangePassword").validate();
//    if ($("#frmChangePassword").valid()) {

//        if ($("#NewPassword").val().toString().trim() == "" || $("#ConfirmNewPassword").val().trim() == "") {
//            $.UifDialog("alert", { 'message': "Las Contraseñas no pueden estar en vacío. Por favor verifique la información.", 'title': "ATENCIÓN" }, function (result) { });
//        }
//        else {
//            if ($("#NewPassword").val().toString().trim() == $("#ConfirmNewPassword").val().toString().trim()) {
//                $.ajax({
//                    async: false,
//                    type: "GET",
//                    url: _URL_ROOT + "Account/ChangeTemporaryPassword",
//                    data: { "oldPassword": $("#OldPassword").val(), "newPassword": $("#NewPassword").val() },
//                    dataType: "json",
//                    contentType: "application/json; charset=utf-8",
//                    success: function (data) {
//                        if (data != "") {
//                            if (data.isPasswordChanged == true) {
//                                $.UifDialog("alert", { 'message': "La Contraseña se cambió correctamente.", 'title': "ATENCIÓN" }, function (result) {
//                                    window.location.href = _URL_ROOT + "Account/LogOff";
//                                });
//                            }
//                            else {
//                                $.UifDialog("alert", { 'message': "La Contraseña no se cambió. Por favor verifique la información.", 'title': "ATENCIÓN" }, function (result) { });
//                            }
//                        }
//                    }
//                });
//            }
//            else {
//                $.UifDialog("alert", { 'message': "La confirmación de la nueva Contraseña no coincide con la ingresada. Por favor verifique la información.", 'title': "ATENCIÓN" }, function (result) { });
//            }
//        }
//        $("#OldPassword").val("");
//        $("#NewPassword").val("");
//        $("#ConfirmNewPassword").val("");
//    }

//});

